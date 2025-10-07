
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function PasswordResetConfirm() {
    const { uid, token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8000/userauth/reset/${uid}/${token}/`, {
                password,
            });
            setMessage("Password reset successful! Redirecting to login...");
            setTimeout(() => navigate("/login"), 3000);
        } catch {
            setMessage("Invalid reset link or token.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Set New Password</h2>
                <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full border px-4 py-2 mb-4 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 cursor-pointer">
                    Reset Password
                </button>
                {message && <p className="mt-4 text-green-700">{message}</p>}
            </form>
        </div>
    );
}

export default PasswordResetConfirm;