import React from "react";
import Swirl from "../components/Swirl";

import "./Pages.css";

class Contact extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="first-frame-container dance-first-frame">
                    <h1 className="header">Contact Lily</h1>
                    <Swirl />
                </div>
                <div className="contact">
                    <div>
                        <div>Email: lilythongnuam@gmail.com</div>
                        <div>Phone: (608)-575-8565</div>
                    </div>
                    <img src="/images/Lily/Bodyshot_1.jpg" alt="Lily Thongnuam" />
                </div>
            </div>
        );
    }
}

export default Contact;
