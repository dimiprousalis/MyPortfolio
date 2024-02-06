import { useRef, useState } from "react";
import './contact.scss';
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Cloud from "../Common/Cloud";


const Contact = () => {

    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_xocdsqw",
                "template_hqzrf4l",
                formRef.current,
                "b_F0ixVgUQK67Q_YF"
            )
            .then(
                (result) => {
                    setSuccess(true)
                },
                (error) => {
                    setError(true);
                }
            );
    };

    return (
        <div id='contact'>
            <Cloud text="Contact" />

            <div className="contact-container">
                <img className="comp-pic" src={require('../../assets/old-comp-5.png')} alt="comp" />
                <div className='contact'>
                        <div >
                            <motion.form
                                ref={formRef}
                                onSubmit={sendEmail}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: .5, duration: 2 }}>
                                <input type="text" required placeholder="Name" name="name" />
                                <input type="email" required placeholder="Email" name="email" />
                                <textarea rows={8} placeholder="Message" name="message" />
                                <button>Send</button>
                                {error && "Sorry, looks like that didn't work. Let's try again!"}
                                {success && "Thank you! I'll be reaching out shortly."}
                            </motion.form>
                        </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;