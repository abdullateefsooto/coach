import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import call from "../assets/undraw_contact-us_kcoa.svg"
import "../assets/style/conatact.css"
import { toast } from 'react-toastify';


const MyContact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_igulvid', 'template_4zucvmq', form.current, {
        publicKey: 'FLKknnwaFnd4Cy6XO',
        
      })
      .then(
        () => {
          form.current.reset();
          toast.success("message send to abdullateef")
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("failed try again")
        },
      );
  };

  return (
    <div>
        <div className='gass'>
        <div className='grass'><img src={call} width={800} alt="" /></div>
    <form className='form' ref={form} onSubmit={sendEmail}>
      <label><i className="fa-duotone fa-solid fa-user"></i></label>
      <input type="text" name="name" id="name" placeholder="fullname" />
      <br />
      <label htmlFor="tel"><i className="fa-duotone fa-solid fa-phone"></i></label>
      <input type="tel" name="tel" id="tel" placeholder="phone" />
      <br />
      <label><i className="fa-duotone fa-solid fa-envelope"></i></label>
      <input type="email" name="email" id="email" placeholder='user@gmail.com'/>
      <br />
      <label><i className="fa-duotone fa-solid fa-pencil pen"></i></label>
      <textarea name="message" className='message' placeholder= "write what is on your mind" />
      <br />
      <p id='action' className='act'></p>
      <button className='send'>send</button>
    </form>
        </div>
    </div>
  );
};
export default MyContact