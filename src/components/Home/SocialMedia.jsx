import discord from '../images/Mask Group.png'
import spotify from '../images/Mask Group (1).png'
import reddit from '../images/Mask Group (2).png'
import netflix from '../images/Mask Group (3).png'
import amazon from '../images/Mask Group (4).png'

export default function SocialMedia () {
    return (
        <div className='social-media'>
            <img src={discord} alt='sm' />
            <img src={spotify} alt='sm' />
            <img src={reddit} alt='sm' />
            <img src={netflix} alt='sm' />
            <img src={amazon} alt='sm' />
        </div>
    )
}