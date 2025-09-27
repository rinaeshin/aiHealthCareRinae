import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./medicalHistory.css";
import getMedicalRecords from "./ex_data";

function MedicalRecords() {
    const [records, setRecords] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadMedicalRecords = async () => {
            try {
                const medicalRecords = await getMedicalRecords();
                setRecords(medicalRecords);
            } catch (error) {
                console.error('진료 기록을 불러오는데 실패했습니다:', error);
                setRecords([]);
            }
        };
        
        // 로딩 시뮬레이션을 위한 setTimeout
        setTimeout(loadMedicalRecords, 300);
    }, []);

    // useEffect(() => {
//     // 실제 API 엔드포인트로 교체하세요
//     fetch("/api/medical-records")
//         .then((res) => res.json())
//         .then((data) => setRecords(data))
//         .catch((err) => console.error(err));
// }, []);

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