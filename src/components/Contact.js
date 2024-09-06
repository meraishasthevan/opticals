import React from "react";
import './Contact.css';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Contact() {
    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">
                    <div className="contact-title">
                        <span>contact us</span>
                        <h2>Contact Us</h2>
                    </div>
                    <div className="contact-info">
                        <div className="contact-item">
                            <h3>Email</h3>
                            <p><a href="mailto:info@meraisha.com">info@meraisha.com</a></p>
                        </div>
                        <div className="contact-item">
                            <h3>Phone</h3>
                            <p>+91 3456 346572</p>
                        </div>
                        <div className="contact-item">
                            <h3>Address</h3>
                            <p>849 West Street, Spex City, India.</p>
                        </div>
                    </div>
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                    <footer>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                            </a>
                        </div>
                        <p>@2024 Glasses. All rights reserved.</p>
                    </footer>
                </div>
            </section>
        </div>
    );
}

export default Contact;
