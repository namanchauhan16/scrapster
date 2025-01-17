import React from 'react';

interface AlertProps {
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
    let alertStyles = '';
    
    switch (type) {
        case 'success':
            alertStyles = 'bg-green-100 text-green-800 border-green-400';
            break;
        case 'error':
            alertStyles = 'bg-red-200 text-red-800 border-red-400';
            break;
        case 'info':
            alertStyles = 'bg-blue-100 text-blue-800 border-blue-400';
            break;
        case 'warning':
            alertStyles = 'bg-yellow-100 text-yellow-800 border-yellow-400';
            break;
        default:
            alertStyles = 'bg-gray-100 text-gray-800 border-gray-400';
            break;
    }

    return (
        <div className={`flex justify-center w-[20rem] md:w-[30rem] px-4 py-1 my-4 border-4 ${alertStyles} rounded-full`} role="alert">
            <div className="flex-1">
                <p className="text-md font-medium">{message}</p>
            </div>
            <button onClick={onClose} className="ml-4 text-[1.7rem] leading-6 font-semibold text-gray-500 hover:text-gray-700">
                &times;
            </button>
        </div>
    );
};

export default Alert;
