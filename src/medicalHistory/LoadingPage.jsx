import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./LoadMedicalRecords.css";

function LoadingPage() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const name = params.get("name") || "";
        const timer = setTimeout(() => {
            navigate(`/records?name=${encodeURIComponent(name)}`);
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigate, location.search]);

    return (
        <div className="load-medical-root">
            <div className="ad-square">
                여기에 보험광고를<br />넣어드립니다
            </div>
            <div className="loading-area loading-area-bottom">
                <div className="spinner" />
                <div className="loading-text">진료 내역을 불러오는 중...</div>
            </div>
        </div>
    );
}

export default LoadingPage;