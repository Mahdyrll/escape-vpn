import DynamicPlanBox from "../DynamicPlanBox.js"
import ImagePremium from '../images/Premium.png'
import ImageStandard from '../images/Standard.png'
import ImageFree from '../images/Free.png'

export default function PlanBox () {
    const planOne = {
        Image: ImagePremium,
        Title: 'طرح حق بیمه',
        Features: [
            'پهنای باند نامحدود',
            'اتصال رمزگذاری شده',
            'بله سیاهه های ترافیک',
            'روی همه دستگاه ها کار می کند',
            'اتصال سریع',
            'دریافت ویژگی های جدید'
        ],
        Price: '۳۰۰۰۰ تومان'
    }

    const planTwo = {
        Image: ImageStandard,
        Title: 'طرح استاندارد',
        Features: [
            'پهنای باند نامحدود',
            'اتصال رمزگذاری شده',
            'بله سیاهه های ترافیک',
            'همه جا کار می کند',
            'اتصال سریع'
        ],
        Price: '۳۰۰۰ تومان'
    }

    const planThree = {
        Image: ImageFree,
        Title: 'طرح رایگان',
        Features: [
            'پهنای باند نامحدود',
            'اتصال رمزگذاری شده',
            'بدون گزارش ترافیک',
            'همه جا کار می کند'
        ],
        Price: 'رایگان'
    }

    return (
        <div className="plan-box">
            <DynamicPlanBox 
            Image={planOne.Image}
            Title={planOne.Title}
            Features={planOne.Features}
            Price={planOne.Price} />
            <DynamicPlanBox
            Image={planTwo.Image}
            Title={planTwo.Title}
            Features={planTwo.Features}
            Price={planTwo.Price} />
            <DynamicPlanBox
            Image={planThree.Image}
            Title={planThree.Title}
            Features={planThree.Features}
            Price={planThree.Price} />
        </div>
    )
}