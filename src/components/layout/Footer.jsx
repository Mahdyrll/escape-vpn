import FooterLink from "./FooterLink";
import RightFooter from "./RightFooter";

export default function Footer () {
    const linkOne = {
        title: 'کسب درآمد کنید',
        link: [
            'وابسته',
            'شریک شوید',
        ]
    };

    const linkTwo = {
        title: 'مشغول کردن',
        link: [
            'اسکیپ',
            'سوالات متداول',
            'آموزش ها',
            'درباره ما',
            'سیاست حفظ حریم خصوصی',
            'شرایط استفاده از خدمات'
        ]
    };

    const linkThree = {
        title: 'محصولات',
        link: [
            'دانلود',
            'قیمت گذاری',
            'مکان ها',
            'سرور',
            'کشورها',
            'وبلاگ'
        ]
    }

    return (
        <div className="footer">
            <RightFooter />
            <FooterLink Title={linkOne.title} Link={linkOne.link} />
            <FooterLink Title={linkTwo.title} Link={linkTwo.link} />
            <FooterLink Title={linkThree.title} Link={linkThree.link} />
        </div>
    )
}