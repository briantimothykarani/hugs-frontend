import React from 'react';

interface PopupProps {
    show: boolean;
    title?: string;
    children: React.ReactNode;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ show, title, children, onClose }) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-md shadow-lg max-w-md w-full relative">
                <div className="flex justify-between items-center border-b p-4">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-red-600 text-2xl font-bold"
                    >
                        &times;
                    </button>
                </div>
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export default Popup;