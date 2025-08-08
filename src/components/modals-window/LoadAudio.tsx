 import './style.css'
 import { useState, useEffect } from 'react';


const LoadAudio = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        return () => clearInterval(intervalId);
    },[])

    return (
        <>
            <div className="modal-container">
                <div className="modal-content">
                    <div className="modal-header">
                        <p className="modal-text">Генерация аудио...</p>
                    </div>
                    <div className="modal-timer">
                        <p className="modal-text">{seconds} c</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoadAudio;