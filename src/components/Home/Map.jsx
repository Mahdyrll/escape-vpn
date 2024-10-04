import map from '../images/Huge Global.png'

export default function Map () {
    return (
        <div className="map">
            <div className="map-title">
                <h3>شبکه جهانی عظیم تحریم شکن سریع</h3>
                <p>تحریم شکن اسکیپ را در همه جا ببینید تا هنگام جابجایی مکان ها برای شما آسان تر شود.</p>
            </div>
            <div className="map-image">
                <img src={map} alt='map'/>
            </div>
        </div>
    )
}