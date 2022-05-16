import React from 'react'
import "./features.css"

export default function FeaturedInfo() {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
        }}>
            <div className="featureItems">
                <span className="featureTitle">Revenu</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">2 450€</span>
                    <span className="moneyRate">-10.3 </span>
                </div>
                <span className="featuredSpan">Compared to last</span>
            </div>
            <div className="featureItems">
                <span className="featureTitle">Sels</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">3 450€</span>
                    <span className="moneyRate">+10.3 </span>
                </div>
                <span className="featuredSpan">Compared to last</span>
            </div>
            <div className="featureItems">
                <span className="featureTitle">Test</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">3 450€</span>
                    <span className="moneyRate">+10.3 </span>
                </div>
                <span className="featuredSpan">Compared to last</span>
            </div>
        </div>
    )
}
