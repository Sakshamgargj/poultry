import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md border">
                <h2 className="text-center text-2xl font-bold text-gray-800">Welcome Back</h2>
                <p className="text-center text-gray-600 mb-6">Login to your account</p>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Email</label>
                        <input type="email" className="w-full p-2 border rounded-md" placeholder="Enter your email" />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Password</label>
                        <input type="password" className="w-full p-2 border rounded-md" placeholder="Enter your password" />
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-gray-600">Remember me</span>
                        </div>
                        <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700">Login</button>
                </form>
                <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account? <Link to="/register" className="text-blue-600 hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
}
export default LoginPage