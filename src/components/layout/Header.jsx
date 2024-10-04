import Links from "./Links";
import LogoTitle from "./LogoTitle";
import SignInUp from "./SignInUp";
import Hamburger from '../icon/icons8-hamburger-menu.svg';

export default function Header () {
    return (
        <div className="header">
            <LogoTitle />
            <img src={Hamburger} alt="hamburger"/>
            <Links />
            <SignInUp />
        </div>
    )
}