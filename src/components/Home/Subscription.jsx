import Button from '../Button'

export default function Subscription () {
    return (
        <div className="subscription">
            <div className='sub-title'>
                <h3>برای دریافت ویژگی های ویژه، اکنون مشترک شوید!</h3>
                <p>بیایید با ما مشترک شوید و لذت ببرید.</p>
            </div>
            <div className='sub-btn'>
                <Button text={'مشترک شدن'} style/>
            </div>
        </div>
    )
}