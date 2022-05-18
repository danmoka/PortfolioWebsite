import { useContext } from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../store/context";
import { contactInfo } from "../../utils/data";
import images from "../../utils/images";
import "./contact.css";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(null);
    const [doneMessage, setDoneMessage] = useState("Something went wrong :(");
    const [additionalInfo, setAdditionalInfo] = useState("");

    const theme = useContext(ThemeContext);
    const isDarkMode = theme.state.isDarkMode;
    
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            contactInfo.serviceId, 
            contactInfo.templateId, 
            formRef.current, 
            contactInfo.publicKey)
        .then(
            (result) => {
                setDone(true);
                setDoneMessage("Thank You!");
                setAdditionalInfo("Your message has been sent successfully")
            }, 
            (error) => {
                setDone(false);
            }
        );
    }

    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Contact me</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={images.linkedIn}
                                alt=""
                                className="c-info-icon"
                            />
                            LinkedIn:  
                            <a
                                href="https://www.linkedin.com/in/daniil-potemkin-a5867a215"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Daniil Potemkin
                            </a>
                        </div>
                        <div className="c-info-item">
                            <img
                                src={images.phone}
                                alt=""
                                className="c-info-icon"
                            />
                            (999)-911-11-11
                        </div>
                        <div className="c-info-item">
                            <img
                                src={images.email}
                                alt=""
                                className="c-info-icon"
                            />
                            mymail@mail.com
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    { done === null 
                    ? (
                        <>
                            <div className="c-desc">
                                <b>Feel free to write to me</b>
                                <p>
                                    Et illo exercitationem ad saepe natus ea Quis culpa a amet tenetur ut aliquid totam quo excepturi sint quo aliquid tenetur.
                                </p>
                            </div>
                            <form ref={formRef} onSubmit={handleSubmit}>
                                <input
                                    className={isDarkMode && "input dark"}
                                    type="text" 
                                    placeholder="Name" 
                                    name="user_name" />
                                <input
                                    className={isDarkMode && "input dark"}
                                    type="text" 
                                    placeholder="Subject" 
                                    name="user_subject" />
                                <input
                                    className={isDarkMode && "input dark"}
                                    type="text" 
                                    placeholder="Email" 
                                    name="user_email" />
                                <textarea
                                    className={isDarkMode && "textarea dark"}
                                    rows="5" 
                                    placeholer="Message" 
                                    name="message"/>
                                <button>Submit</button>
                            </form>
                        </>
                    )
                    : (
                        <div className="c-message">
                            <h1>{doneMessage}</h1>
                            { additionalInfo && <p>{additionalInfo}</p> }
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;