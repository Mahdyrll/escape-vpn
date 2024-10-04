import style from './FooterLink.css'

export default function FooterLink ({Title, Link}) {
    return (
        <div className="footer-link">
            <p>{Title}</p>
            {Link.map((link, index) => (
                <a href="#" key={index}>{link}</a>
            ))}
        </div>
    )
}