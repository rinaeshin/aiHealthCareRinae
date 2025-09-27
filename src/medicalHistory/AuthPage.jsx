import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoadMedicalRecords.css";

function AuthPage() {
    const navigate = useNavigate();

    const handleAuth = () => {
        // '신경준' 이름을 쿼리스트링으로 전달
        navigate("/loading?name=신경준");
    };

    return (
        <div className="load-medical-root">
            <div className="auth-topbar">간편 인증</div>
            <div className="auth-content">
                <div className="auth-title">
                    간편 인증으로 건강보험 확인을 완료하세요
                </div>
                <div className="auth-desc">
                    안전하고 편리한 서비스 이용을 위해 필수적인 과정입니다.
                </div>
                <button className="load-btn" onClick={handleAuth}>
                    간편 인증 시작하기
                </button>
            </div>
        </div>
    );
}

export default AuthPage;