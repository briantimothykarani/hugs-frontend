import { useState } from "react";
import axios from "axios";

function PasswordReset() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/userauth/password-reset/", {
                email,
            });
            setMessage("Password reset email sent. Check your inbox.");
        } catch (err) {
            setMessage("Something went wrong.");
        }
    };

    return (
        <div className="min-h-screen bg-blue-50 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl mb-4 font-semibold text-purple-800">Reset Password</h2>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border px-4 py-2 mb-4 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 cursor-pointer">
                    Send Reset Link
                </button>
                {message && <p className="mt-4 text-green-600">{message}</p>}
            </form>
        </div>
    );
}

export default PasswordReset;