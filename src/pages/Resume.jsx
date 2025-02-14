import cv from "../assets/CV.pdf"
import "../assets/style/cv.css"


const Resume = () => {
  return (
    <div className="rest">
        <h2 className="cv">click here to view and download my resume page!!!</h2>
        <a href={cv} target="_blank" rel="noopener noreferrer" className="but"><button>resume</button></a>
    </div>
  )
}

export default Resume