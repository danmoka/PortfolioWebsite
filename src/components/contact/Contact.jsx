import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { contactInfo } from "../../data";
import Email from "../../img/email.png";
import Phone from "../../img/phone.png";
import LinkedIn from "../../img/linkedin.png";
import "./contract.css";

const Contract = () => {
    const formRef = useRef();
    const [done, setDone] = useState(null);
    const [doneMessage, setDoneMessage] = useState("Something went wrong :(");
    const [additionalInfo, setAdditionalInfo] = useState("");
    
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
                                src={LinkedIn}
                                alt=""
                                className="c-info-icon"
                            />
                            This is my LinkedIn profile:  
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
                                src={Phone}
                                alt=""
                                className="c-info-icon"
                            />
                            (999)-911-11-11
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Email}
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
                        <div className="c-desc">
                            <b>Feel free to write to me</b>
                            <p>
                                Et illo exercitationem ad saepe natus ea Quis culpa a amet tenetur ut aliquid totam quo excepturi sint quo aliquid tenetur.
                            </p>
                            <form ref={formRef} onSubmit={handleSubmit}>
                                <input type="text" placeholder="Name" name="user_name" />
                                <input type="text" placeholder="Subject" name="user_subject" />
                                <input type="text" placeholder="Email" name="user_email" />
                                <textarea rows="5" placeholer="Message" name="message"/>
                                <button>Submit</button>
                            </form>
                        </div>
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

export default Contract;