// import CommentDynamic from "../CommentDynamic";
import style from '../CommentDynamic.css'
import ellipse1 from '../images/Ellipse 175.png'
import ellipse2 from '../images/Ellipse 175 (1).png'
import ellipse3 from '../images/Ellipse 175 (2).png'
import left from '../images/left.png'
import right from '../images/right.png'
import group from '../images/Group 1300.png'
import { useState } from "react";
import Star from '../icon/Vector.svg'
import CommentSlider from "../CommentSlider";

export default function Comment () {
    const testimonials = [
        {
            id: 1,
            profile: ellipse1,
            userName: 'محمدرضا حسینی',
            city: 'ایران _ مازندران',
            userComment: '"این برای تجارت من که در حال حاضر به یک شبکه خصوصی مجازی با امنیت بالا نیاز دارد، بسیار غیرمعمول است."'
        },

        {
            id: 2,
            profile: ellipse2,
            userName: 'سارا محمدی',
            city: 'ایران _ گلستان',
            userComment: '"من آن را دوست دارم زیرا دوست دارم راه دور سفر کنم و هنوز می توانم با سرعت بالا ارتباط برقرار کنم."'
        },

        {
            id: 3,
            profile: ellipse3,
            userName: 'علیرضا وفایی',
            city: 'ایران _ تهران',
            userComment: '"وای... من بسیار خوشحالم که از این تحریم شکن استفاده می کنم، معلوم شد که بیش از انتظار من بود و تا کنون هیچ مشکلی وجود نداشته است. اسکیپ همیشه بهترین است.'
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };
    
    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    return (
        <div className="Comment">
            <div className="cm-title">
                <h2>مورد اعتماد هزاران مشتری خوشحال</h2>
                <p>اینها داستان های مشتریان ما است که هنگام استفاده از این ویژگی دیوانه کننده با کمال میل به ما ملحق شده اند.</p>
            </div>
            <div className="cm-container">
            {/* ***responsive*** */}
                <CommentSlider />
                {/* <CommentDynamic
                Profile={user1.profile}
                Name={user1.userName}
                City={user1.city}
                UserComment={user1.userComment} />

                <CommentDynamic
                Profile={user2.profile}
                Name={user2.userName}
                City={user2.city}
                UserComment={user2.userComment} />

                <CommentDynamic
                Profile={user3.profile}
                Name={user3.userName}
                City={user3.city}
                UserComment={user3.userComment} /> */}
            {/* **************** */}
                <div className='cm-section'>
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial.id} className={`user-cm-section ${index === currentIndex ? 'selected' : ''}`}>
                            <div className='prof-name'>
                                <div className='profile-pic'>
                                    <img src={testimonial.profile} alt="profile"/>
                                </div>
                                <div className='name-location'>
                                    <p>{testimonial.userName}</p>
                                    <p>{testimonial.city}</p>
                                </div>
                                <div className='rate'>
                                    <img src={Star} alt='star'/>
                                    <p>۵</p>
                                </div>
                            </div>
                            <div className='user-comment'>
                                <p>{testimonial.userComment}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="signs">
                    <div className="left-right">
                        <img onClick={handleLeftClick} src={left} alt="left" />
                        <img onClick={handleRightClick} src={right} alt="right" />
                    </div>
                    <div className="group">
                        <img src={group} alt="Group" />
                    </div>
                </div>
            </div>
        </div>
    )
}