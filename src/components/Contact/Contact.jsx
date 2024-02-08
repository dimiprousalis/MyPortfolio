import './contact.scss';
import Cloud from "../Common/Cloud";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <>
            <div id="contact-nav"></div>
            <div id='contact'>
                <Cloud text="Contact" />
                <ContactForm />
            </div>
        </>
    );
};

export default Contact;