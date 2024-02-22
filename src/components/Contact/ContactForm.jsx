import { useRef, useState } from "react";
import './contact.scss';
import emailjs from "@emailjs/browser";

const ContactForm = () => {

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
        <>
            <div className="screen">
                <form
                    ref={formRef}
                    onSubmit={sendEmail}>
                    <input type="text" required placeholder="Name" name="name" />
                    <input type="email" required placeholder="Email" name="email" />
                    <textarea rows={9} placeholder="Message" name="message" />
                    <button>Send</button>
                    {error && alert("Sorry, looks like that didn't work. Let's try again!")}
                    {success && alert("Thank you! I'll be reaching out shortly.")}
                </form>
            </div>
            <div className="comp-body">
                <div className="nob"></div>
                <div className="bar"></div>
                <div className="disk"></div>
            </div>
            <div className="keyboard">
                <img className="comp-pic" src="https://res.cloudinary.com/dwkg9jctn/image/upload/v1708627025/Portfolio/keyboard_ltmi57_c_pad_w_650_azdilt.png" alt="comp" />
            </div>
        </>
    )
}

export default ContactForm