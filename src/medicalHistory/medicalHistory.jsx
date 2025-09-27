import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./medicalHistory.css";
import dummyMedicalRecords from "./ex_data";

function MedicalRecords() {
    const [records, setRecords] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setRecords(dummyMedicalRecords);
        }, 300);
    }, []);

    return (
        <div className="medical-records-root">
            {/* 상단 고정 바 */}
            <div className="medical-records-topbar">
                진료 기록
            </div>
            <div className="medical-records-list-container">
                {records.length === 0 ? (
                    <div>진료 기록이 없습니다.</div>
                ) : (
                    records.map((rec, idx) => (
                        <div key={rec.id || idx} className="medical-record-item">
                            <div className="medical-record-date">{rec.date}</div>
                            <div className="medical-record-diagnosis">진단명: {rec.diagnosis}</div>
                            <div>처방: {rec.prescription}</div>
                            <div className="medical-record-detail">{rec.detail}</div>
                        </div>
                    ))
                )}
            </div>
            <button
                className="fixed-bottom-btn"
                onClick={() => navigate("/recommend")}
            >
                추천 상품 보기
            </button>
        </div>
    );
}

export default MedicalRecords;