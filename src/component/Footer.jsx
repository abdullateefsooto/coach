import "../assets/style/foot.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <div className="foot">
        <p>&copy; 2024 sooto, All Rights Reserved. </p>
        <div className="feet">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i> </a>
        <a href="https://www.linkedin.com/in/abdullateef-sooto-660398350/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i> </a>    
        <a href="http://wa.me/+2348066244696" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullateefopeyemi06@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa-sharp-duotone fa-regular fa-envelope"></i></a>
          </div>
    </div>
  )
}

export default Footer