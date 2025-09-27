// App.jsx
import MedicalRecords from './medicalHistory/medicalHistory';
import './App.css';

function App() {
    return (
        <div className="App">
            <MedicalRecords />
        </div>
    );
}

export default App;

// medicalHistory.jsx
import React, { useEffect, useState } from "react";
import "./medicalHistory.css";
import dummyMedicalRecords from "./ex_data";
import RecommendedProducts from "./RecommendedProducts";

function MedicalRecords() {
    const [records, setRecords] = useState([]);
    const [showRecommend, setShowRecommend] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setRecords(dummyMedicalRecords);
        }, 300);
    }, []);

    if (showRecommend) {
        return <RecommendedProducts />;
    }

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
                onClick={() => setShowRecommend(true)}
            >
                추천 상품 보기
            </button>
        </div>
    );
}

export default MedicalRecords;

// RecommendedProducts.jsx
import React from "react";
import "./RecommendedProducts.css";

function RecommendedProducts() {
    return (
        <div className="recommended-products-root">
            <h2 className="recommended-products-title">추천 상품</h2>
            <p className="recommended-products-desc">여기에 추천 상품 목록이 표시됩니다.</p>
        </div>
    );
}

export default RecommendedProducts;