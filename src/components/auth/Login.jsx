import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { setLogin } from "../../action";

function LoginPage({commonData,setLogin}) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Using react-cookie
    const [cookies, setCookie, removeCookie] = useCookies(["rememberedEmail"]);

    // Load saved email from cookies if "Remember Me" was checked
    useEffect(() => {
        if (cookies.rememberedEmail) {
            setFormData((prev) => ({ ...prev, email: cookies.rememberedEmail }));
            setRememberMe(true);
        }
    }, [cookies]);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle "Remember Me" checkbox
    const handleRememberMe = (e) => {
        setRememberMe(e.target.checked);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await axios.post(
                import.meta.env.VITE_API_URL+`user/login`,
                {
                    email: formData.email,
                    password: formData.password,
                },
                { withCredentials: true } // Enable cookies for authentication
            );

            // console.log("Login Successful:", response.data);
            setLogin(1)
            // Store email in cookie if "Remember Me" is checked
            if (rememberMe) {
                setCookie("rememberedEmail", formData.email, { path: "/", maxAge: 7 * 24 * 60 * 60 }); // Store for 7 days
            } else {
                removeCookie("rememberedEmail"); // Remove if unchecked
            }

            navigate("/");
            window.location.reload();
        } catch (err) {
            setError(err.response?.data?.message || "Login failed!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex select-none justify-center items-center h-auto bg-white p-20">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md border">
                <h2 className="text-center text-2xl font-bold text-gray-800">Welcome Back</h2>
                <p className="text-center text-gray-600 mb-6">Login to your account</p>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md border-black shadow-lg focus:outline-none focus:ring-2 focus:ring-darkprimary text-darkText"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md border-black shadow-lg focus:outline-none focus:ring-2 focus:ring-darkprimary text-darkText"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={handleRememberMe}
                                className="mr-2 accent-darkprimary"
                            />
                            <span className="text-gray-600">Remember me</span>
                        </div>
                        <Link to="/forgotpassword" className="text-primary hover:underline">Forgot password?</Link>
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-2 rounded-md font-bold ${
                            loading ? "bg-gray-400" : "bg-primary hover:bg-darkprimary"
                        } text-white`}
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account? <Link to="/register" className="text-primary hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
}

let connectToStore = (state) => ({ commonData: state });
let dispatchToStore = (dispatch) => (
    {
        setLogin: (value) => dispatch(setLogin(value)),
    }
);
export default connect(connectToStore, dispatchToStore)(LoginPage);
