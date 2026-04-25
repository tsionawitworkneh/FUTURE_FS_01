import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { toast } from "sonner";
import "../styles/Contact.css";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !form.name.trim() ||
            !form.email.trim() ||
            !form.subject.trim() ||
            !form.message.trim()
        ) {
            toast.error("All fields are required!");
            return;
        }

        if (!form.email.includes("@")) {
            toast.error("Enter a valid email!");
            return;
        }

        toast.success("Message sent!");
    };


    return (
        <section id="contact" className="container">
            <h2>Get In <span>Touch</span></h2>
            <div className="contact-card">
                <div className="contact-info">
                    <h3 className="text-purple">Contact Information</h3>
                    <p>Fill out the form and I will reach you within 24 hours.</p>
                    <div className="info-item"><FaPhoneAlt /><div><p>+251 903133989</p><p>+251 938484837</p></div></div>
                    <div className="info-item"><FaEnvelope /><a href="mailto:tsionawitw@gmail.com">tsionawitw@gmail.com</a></div>
                    <div className="info-item"><FaMapMarkerAlt /><span>Addis Ababa, Ethiopia</span></div>
                    <div className="socials">
                        <a href="https://github.com/tsionawitworkneh" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://leetcode.com/u/Tsionawit/" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://t.me/Zionawit_16" aria-label="Telegram"><FaTelegram /></a>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row">
                        <div className="field"><label>Your Name</label><input name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" /></div>
                        <div className="field"><label>Your Email</label><input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="Enter your email" /></div>
                    </div>
                    <div className="field"><label>Your Subject</label><input name="subject" value={form.subject} onChange={handleChange} placeholder="Enter subject here..." /></div>
                    <div className="field"><label>Message</label><textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Write your message here" /></div>
                    <button type="submit" className="send-btn" >Send Message</button>
                </form>
            </div>

        </section>
    );

}

export default Contact;