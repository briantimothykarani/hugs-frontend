import { useState } from 'react';
import Popup from './Popup';
import VerticalNavbar from './VerticalNavbar';




const Combine = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="flex">
            <VerticalNavbar />

            <main className="flex-1 p-6">
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

                <button
                    onClick={() => setShowPopup(true)}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
                >
                    Open Popup
                </button>

                <Popup show={showPopup} title="Hello Popup" onClose={() => setShowPopup(false)}>
                    <p>This is your popup content. You can put anything here.</p>
                </Popup>
            </main>
        </div>
    );
};

export default Combine;