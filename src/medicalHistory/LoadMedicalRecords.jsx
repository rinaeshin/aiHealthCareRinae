import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoadMedicalRecords.css";

function LoadMedicalRecords() {
    const navigate = useNavigate();

    const handleLoad = () => {
        navigate("/auth");
    };

    return (
        <div className="load-medical-root">
            <div className="load-medical-message">
                지금까지 내가 진단 받은
                <br />
                내역을 불러와 보세요!
            </div>
            <button className="load-btn" onClick={handleLoad}>
                불러오기
            </button>
        </div>
    );
}

export default LoadMedicalRecords;