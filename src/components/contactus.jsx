import './contact.css';
import {
    FaWhatsapp,
    FaInstagram,
     
    FaLinkedin,
    FaGithub
} from "react-icons/fa";
export default function ContactUs() {
    return (

        <div className="contact">

            <h1>Contact Me</h1>

            <div className="contact-container">

                <div className="contact-info">
                    <h2>Get In Touch</h2>

                    <p>
                        If you have any questions or opportunities,
                        feel free to contact me.
                    </p>

                    <p><b>Email:</b>kprajapati47455@gmail.com</p>
                    <p><b>Phone:</b> +91 8766335304</p>
                    <p><b>Location:</b> Noida, Uttar Pradesh</p>
                    <div className='icons'>
                       <a href="https://wa.me/918766335304" target='blank' rel='noreferrer'><FaWhatsapp size={25}/></a> 
                      <a href="https://www.instagram.com/krishna_prajapati315" target='blank' rel='noreferrer'><FaInstagram size={25}/></a>
                     
                       <a href="https://www.linkedin.com/in/Krishna Prajapati" target='blank' rel='noreferrer'><FaLinkedin size={25}/></a> 
                      <a href='https://github.com/kprajapati47455-boop' target='blank' rel='noreferrer' ></a>  <FaGithub size={25}/>
                    </div>
                </div>

                <div className="contact-form">

                    <input
                        type="text"
                        placeholder="Your Name"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                    />

                    <textarea
                        placeholder="Your Message"
                        rows="5"
                    ></textarea>

                    <button>Send Message</button>

                </div>

            </div>

        </div>


    )
}