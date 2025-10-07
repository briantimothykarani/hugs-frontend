
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Activate() {
    const { uid, token } = useParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState("Activating...");

    useEffect(() => {
        axios
            .get(`http://localhost:8000/userauth/activate/${uid}/${token}/`)
            .then(() => {
                setStatus("Your account has been activated! Redirecting to login...");
                setTimeout(() => navigate("/login"), 3000);
            })
            .catch(() => {
                setStatus("Invalid or expired activation link.");
            });
    }, [uid, token, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center">
            <div className="bg-white p-10 rounded shadow-md text-lg font-semibold text-purple-700">
                {status}
            </div>
        </div>
    );
}

export default Activate;
