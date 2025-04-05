import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EmailVerify() {
    const { token } = useParams();
    const [msg, setMsg] = useState("Verifying your email...");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        verifyEmail();
    }, []);

    const verifyEmail = async () => {
        try {
            const response = await axios.post(import.meta.env.VITE_API_URL+`user/confirmEmail/${token}`);
            if (response.status === 200) {
              console.log("if",response)

                setMsg(response.data.message || "Your email has been verified successfully!");
            } else {
              console.log("else",response)
                setMsg("Email verification failed. Please try again.");
            }
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md border text-center">
                <h2 className="text-xl font-semibold text-gray-800">Email Verification</h2>
                <p className="mt-4 text-gray-600">{loading ? "Processing..." : error ? <span className="text-red-500">{error}</span> : msg}</p>

                {!loading && error && (
                    <button 
                        onClick={verifyEmail} 
                        className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                    >
                        Retry Verification
                    </button>
                )}
            </div>
        </div>
    );
}

export default EmailVerify;
