import { useState } from 'react'
import "../assets/style/home.css"
import { data1, data2, data3, data4, data5} from '../dbase'
import svg from '../assets/undraw_designer_0ogx.svg'
const Home = () => {
  const [base, setBase] = useState(data1)
  const [set, setSet] = useState(data2)
  const [lock, setLock] = useState(data3)
  const [up, setUp] = useState(data4)
  const [pad, setPad] = useState(data5)

  return (
  <div>
       <div className='container'>
        <div>
          <h1 className='the'>Building the future, one line of code at a time</h1>
          <p className='them'>Welcome i am Abdullateef,A software engineer crafting tech solutions with precision and an edtech advocate driven to innovate in education together on my journey </p>
        </div>
        <div><img src={svg} alt="" width="100%"/></div>
    </div>
    <div className='link'>
      <h1 className='they'>my skill</h1>

      <h2 className='big'>Language</h2>
    <ul>
      {base.map((script) => {
        const { id, name } = script
        return <span key={id}>
        <li className='san'>
          {name}
        </li>
        </span>
      })}
    </ul>
        <h2 className="big">Frameworks</h2>
    <ul>
      {set.map((script) => {
        const { id, name } = script
        return <span key={id}>
        <li className='san'>
          {name}
        </li>
        </span>
      })}
    </ul>

 
        <h2 className="big">Hosting Platforms</h2>
    <ul>
      {lock.map((script) => {
        const { id, name } = script
        return <span key={id}>
        <li className='san'>
          {name}
        </li>
        </span>
      })}
    </ul>



        <h2 className="big">Version Control</h2>
    <ul>
      {up.map((script) => {
        const { id, name } = script
        return <span key={id}>
        <li className='san'>
          {name}
        </li>
        </span>
      })}
    </ul>

       <h2 className="big">Content Management control</h2>

       <ul>
      {pad.map((script) => {
        const { id, name } = script
        return <span key={id}>
        <li className='san'>
          {name}
        </li>
        </span>
      })}
    </ul>




    </div>

  </div>
  )
}

export default Home