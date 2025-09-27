import React from "react";
import { useLocation } from "react-router-dom";
import "./medicalHistory.css";
import dummyMedicalRecords from "./ex_data";

function MedicalRecords() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const name = params.get("name") || "";

    // 이름이 일치하는 데이터만 필터링
    const records = dummyMedicalRecords.filter(rec => rec.name === name);

    return (
        <div className="medical-records-root">
            <div className="medical-records-topbar">
                진료 기록
            </div>
            <div className="medical-records-user-label">
                {name ? `${name} 님의 진료 내역 입니다.` : ""}
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
                onClick={() => window.location.href = "/recommend"}
            >
                추천 상품 보기
            </button>
        </div>
    );
}

export default MedicalRecords;