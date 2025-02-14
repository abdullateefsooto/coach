import "../assets/style/about.css"
import about from '../../src/assets/undraw_about_me_re_82bv.svg'
import molly from '../../src/assets/undraw_co-working_re_w93t.svg'
const About = () => {
  return (
    <div>
        <div>
          <h1 className="me">about me</h1>
            <div className='both'>
                <div className="conten">
                    <p>Hi! i am abdullateef sooto, a software engineer with a passion for creating, e.g., innovative designs, high-quality content. I believe in the power of creativity and designing  e.g., creativity, designing websites,websites builder and to bring fresh ideas to life through  software engineering, e.g., design, development.</p>
                </div>
                <div className="glass">
                    <img src={about} width="500px" alt="" />
                </div>
            </div>
              <h1 className='me'>skills</h1>
              <div className='both'>
                    <div className="molly">
                      <img src={molly} width="500px" alt="" />
                    </div>
                    <div className="conten">
                        <p>I have expertise in a wide range of technologies, including HTML, CSS, JavaScript, and frameworks like React, and Node.js. I am experienced in building responsive and scalable web applications.
                        </p>
                    </div>
              </div>
        </div>
    </div>
  )
}

export default About