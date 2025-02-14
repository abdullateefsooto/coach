import { useState } from 'react'
import "../assets/style/exx.css"
import { data6, data7 } from '../dbase'
import des from '../assets/image/Desarrollo-de-Software.webp'
import typ from '../assets/image/types-of-software.png.webp'
const Experience = () => {
    const [stand, setStand] = useState(data6)
    const [off, setOff] = useState(data7)
  return (
    <div>
        <div className='flex'>
            <div className="setion">
            <h2 className="work">work location</h2>
                <div className="git">
                    <img src={des}   alt="" />
                </div>
                <ul >
        {stand.map((script) => {
            const { id, name } = script
            return <span key={id}>
            <li className='sand'>
            {name}
            </li>
            </span>
        })}
        </ul>
        </div>
        <div className="sec">
        <h2 className="work">work history</h2>
            <div className="git">
                <img src={typ} alt="" />
            </div>
            <ul >
        {off.map((script) => {
            const { id, name } = script
            return <span key={id}>
            <li className='sand'>
            {name}
            </li>
            </span>
        })}
        </ul>


    </div>

    </div>
</div>
  )
}

export default Experience