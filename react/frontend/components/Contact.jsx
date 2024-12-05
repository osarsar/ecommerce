import React, { useState } from 'react';
import "../style/css/Contact.css";
import emailjs from '@emailjs/browser';
import up from "../style/image/up1.jpeg"

export default function Contact() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const Params = {
            from_name: username,
            from_email: email,
            // subject: subject,
            message: message,
        };

        emailjs.send('service_loqv6p8', 'template_45ymu1s', Params, '7_zpZsZsRDqup1yja')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Your message has been sent successfully!');
            }, (error) => {
                console.error('Failed to send email:', error);
                alert('There was an error sending your message. Please try again.');
            });
    };

    return (
        <div className="contact_all">            
            <div className='middle'>
                <h1 className="contact1">Contact</h1>
                <br /><br />
                <div className="box">
                    <div className="input">
                        <div className='first_line'>
                            <input
                                className="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Name"
                                required
                                />
                            <input
                                className="username"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                                />
                        </div>
                            <input
                                className="username"
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="Subject"
                                required
                                />
                        <textarea
                            className="username"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Write Message"
                            required
                            />
                        <button onClick={handleSubmit}>Send message</button>
                    </div>
                </div>
            </div>

            <div className='frames'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1653.970057858954!2d-6.848809241278028!3d33.994071899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76d2aaa764935%3A0x71df93ce0ed89827!2sSMART%20Win!5e0!3m2!1sfr!2sma!4v1724837448480!5m2!1sfr!2sma"></iframe>
            </div>
        </div>
    );
}