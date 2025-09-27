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
                        <div key={item.id} className="recommended-product-item">
                            <div className="recommended-product-name">{item.name}</div>
                            <div className="recommended-product-desc">{item.desc}</div>
                            <div className="recommended-product-price">{item.price}</div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default RecommendedProducts;