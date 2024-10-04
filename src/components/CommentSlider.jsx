import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import CommentDynamic from "./CommentDynamic";
import ellipse1 from './images/Ellipse 175.png'
import ellipse2 from './images/Ellipse 175 (1).png'
import ellipse3 from './images/Ellipse 175 (2).png'

const comments = [
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

const CommentSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <Slider {...settings}>
            {comments.map((comment, index) => (
                <div key={comment.id}>
                    <CommentDynamic
                    Profile={comment.profile}
                    Name={comment.userName}
                    City={comment.city}
                    UserComment={comment.userComment} />
                </div>
            ))}
        </Slider>
    )
}

export default CommentSlider