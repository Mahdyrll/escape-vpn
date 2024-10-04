import CheckList from "../icon/Eo_circle_green_checkmark.svg (1).png"

export default function OurServiceLeft () {
    return (
        <div className="our-service-left">
            <h3>ما ویژگی های بسیاری را ارائه می دهیم</h3>
            <p>می‌توانید ویژگی‌هایی را که ما با سرگرمی ارائه می‌دهیم</p>
            <ul>
                <div className="li-checklist">
                    <img src={CheckList} alt="check" />
                    <li className="check-list">حفاظت آنلاین قدرتمند</li>
                </div>
                <div className="li-checklist">
                    <img src={CheckList} alt="check"/>
                    <li className="check-list">اینترنت بدون مرز</li>
                </div>
                <div className="li-checklist">
                    <img src={CheckList} alt="check"/>
                    <li className="check-list">تحریم شکن پر سرعت</li>
                </div>
                <div className="li-checklist">
                    <img src={CheckList} alt="check"/>
                    <li className="check-list">بدون محدودیت زمانی خاص</li>
                </div>
            </ul>
        </div>
    )
}