import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import Star from './icon/Vector.svg'
import style from './CommentDynamic.css'

export default function CommentDynamic ({Profile, Name, City, UserComment}) {
    return (
        <div className="cm-section-ss">
            <div className="user-cm-section-ss">
                <div className="prof-name">
                    <div className="profile-pic">
                        <img src={Profile} alt="user1" />
                    </div>
                    <div className="name-location">
                        <p>{Name}</p>
                        <p>{City}</p>
                    </div>
                    <div className="rate">
                        <img src={Star} alt="star" />
                        <p>۵</p>
                    </div>
                </div>
                <div className="user-comment">
                    <p>{UserComment}</p>
                </div>
            </div>
        </div>
    )
}