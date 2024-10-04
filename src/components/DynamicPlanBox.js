import React from "react";
import checkIcon from './icon/Group 1223.svg'
import "./DynamicPlanBox.css"

const DynamicPlanBox = ({ Image, Title, Features, Price}) => {
    return (
        <div className="plans">
            <div className="plan-image">
               <img src={Image} alt="box"/> 
            </div>
            <p className="plan-title-dynamic">{Title}</p>
            <div className="plan-list">
                <ul className="ul-plan-list">
                    {Features.map((feature, index) => (
                        <div className="icon-list">
                            <img src= {checkIcon} alt="check" />
                            <li key={index}>{feature}</li>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="price-choose">
                <div className="price">
                    <p>{Price}</p>
                </div>
                <div className="choose-box">
                    <a href="#" className="choose">انتخاب</a>
                </div>
            </div>
        </div>
    )
}

export default DynamicPlanBox;