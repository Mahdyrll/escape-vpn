import ServerIcon from "./icon/server-svgrepo-com.svg"
import LocationIcon from "./icon/location-pin-svgrepo-com.svg"
import UserIcon from "./icon/user-svgrepo-com.svg"
import React from "react";

export default function SLI () {
    const IconText = [
        {id: 1, text: '+۵۰ سرور', icon: ServerIcon},
        {id: 2, text: '+۳۰ مکان', icon: LocationIcon},
        {id: 3, text: '+۹۰ افراد', icon: UserIcon}
    ];
    return (
        <div className="icon-text-section">
            {IconText.map(item => (
                <div key={item.id} className="icon-text-box">
                    <p>{item.text}</p>
                    <img src={item.icon} alt={(Math.random)} />
                </div>
            ))}
        </div>
    );
    
};