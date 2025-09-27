import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RecommendedProducts.css";
import dummyRecommendedProducts from "./ex_data2";

function RecommendedProducts() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // 실제 API 대신 임의 데이터 사용
        setTimeout(() => {
            setProducts(dummyRecommendedProducts);
        }, 300);
    }, []);

    return (
        <div className="recommended-products-root">
            <div className="recommended-products-topbar">
                <button
                    className="back-btn-rect"
                    onClick={() => navigate("/")}
                    aria-label="뒤로가기"
                >
                    &#8592;
                </button>
                <div className="topbar-title-wrapper">
                    <span className="topbar-title">추천 상품</span>
                </div>
                <div style={{ width: 56 }} />
            </div>
            <div className="recommended-products-content">
                {products.length === 0 ? (
                    <div>추천 상품이 없습니다.</div>
                ) : (
                    products.map((item) => (
                        <div key={item.id} className="recommend-card">
                            <div className="recommend-card-header">
                                <img
                                    src={item.logo || "/insurance-logo.svg"}
                                    alt="보험사 로고"
                                    className="recommend-card-logo"
                                />
                                <span className="recommend-card-title">{item.name}</span>
                                <span className="recommend-card-price">{item.price}</span>
                            </div>
                            <div className="recommend-card-desc">{item.desc}</div>
                            <ul className="recommend-card-benefits">
                                {item.benefits && item.benefits.map((b, idx) => (
                                    <li key={idx}>
                                        <span className="benefit-check">✔</span> {b}
                                    </li>
                                ))}
                            </ul>
                            <button className="recommend-card-btn">자세히 보기</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default RecommendedProducts;