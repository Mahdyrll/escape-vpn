import { useState } from "react"
import Button from "../Button"

export default function FirstSectionRight () {
    const [ buttonText , setButtonText ] = useState("شروع کنید")

    return (
        <div className="first-sec-right">
            <div className="first-sec-text">
                <h2>با تحریم شکن اسکیپ آسان باشد</h2>
                <p>با استفاده از اسکیپ، شبکه ای را برای تمام نیازهای خود با سهولت و سرگرمی فراهم کنید، ویژگی های جالبی را از ما کشف کنید.</p>
            </div>
            <div className="first-sec-button">
                <Button text={buttonText}></Button>
            </div>
        </div>
    )
}