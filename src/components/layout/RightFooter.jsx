import LogoTitle from "./LogoTitle";
import facebook from '../icon/Facebook.svg'
import instagram from '../icon/Instagram.svg'
import twitter from '../icon/Twitter.svg'

export default function RightFooter () {
    return (
        <div className="container0">
            <LogoTitle />
            <p>تحریم شکن اسکیپ یک شبکه مجازی خصوصی است که ویژگی های منحصر به فردی دارد و امنیت بالایی دارد.</p>
            <div className="sm-icon">
                <img src={twitter} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={facebook} alt="twitter" />
            </div>
        </div>
    )
}