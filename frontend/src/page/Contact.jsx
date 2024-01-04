import { useEffect, useState } from 'react';
import '../style/contact.css';
import {useDispatch, useSelector} from "react-redux"
import { contactAction } from '../actions/contactAction';

function Contact() {

  const dispatch = useDispatch();
  const contactState = useSelector((state) => state.contactMessageReducer);
  const { loading, success } = contactState;

  useEffect(() => {
    if (success === true) {
      alert("Your message has been sent successfully");
      setContactMessage({
        ...contactMessage,
        name: "",
        email: "",
        message: ""
      });
    }
  }, [success]);

  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState;
  
  const [contactMessage, setContactMessage ] = useState(
    {
      userId: currentUser.data._id,
      name: "",
      message: ""
    }
  )


  const handleMessage = () => {
    if (contactMessage.name !== "" && contactMessage.email !== "" && contactMessage.message !== "") {
      console.log()
      dispatch(contactAction(contactMessage));
      setContactMessage({
        ...contactMessage,
        name: "",
        message: ""
      })
    } else {
      alert("Fill all the fields");
    }
  };
  

  return (
    <div className='contactPage'>
      <div className="ContactContainer">
        <h1 className='heading1'>Connect With Us</h1>
        <p>
          We would love to respond to your queries and help you succeed. Feel
          free to get in touch with us.
        </p>
        <div className="contact-box">
          <div className="contact-left">
            <h3>Contact Us</h3>
            <p>
              Feel free to contact us and we will get <br /> back to you as
              soon as we can
            </p>
            <div className='contactForm'>
              <div className='secondContact'> 
                <div className="input-row">
                  <div className="input-group">
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Name" 
                    onChange={(e) => setContactMessage({ ...contactMessage, name: e.target.value })}/>
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <textarea
                      type="text"
                      id="message"
                      placeholder="Tell us about it"
                      onChange={(e) => setContactMessage({ ...contactMessage, message: e.target.value })}/>
                  </div>
                </div>
                <button className='contactBtns' type="submit"  onClick={handleMessage}>{loading ? "Loading..." : "Send"}</button>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <h3>Reach Us</h3>
            <h4>Opening Hours</h4>
            <p>Monday-Friday</p>
            <p>9am-5pm</p>
            <p>Weekend</p>
            <p>Closed</p>
            <br />
            <h4>Address</h4>
            <p>
              Pranveer Singh Institute of Technology
              <br />
              Bhauti, Kanpur
            </p>
            <br />
            <h4>Support</h4>
            <p>
              <a href="mailto:earthgreen42453632@gmail.com">
                earthgreen42453632@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+919451691043">9451691043</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
