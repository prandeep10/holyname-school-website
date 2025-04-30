import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  CheckCircle
} from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: <MapPin />,
      title: 'Visit Us',
      content: '123 Vidyabarta Lane, Educational Hub, Cityname - 123456',
      link: 'Get Directions'
    },
    {
      icon: <Phone />,
      title: 'Call Us',
      content: '+91 98765 43210',
      subContent: 'Mon-Fri from 9am to 5pm',
      link: 'Call Now'
    },
    {
      icon: <Mail />,
      title: 'Email Us',
      content: 'admissions@vidyabarta.edu',
      subContent: 'We reply within 24 hours',
      link: 'Send Email'
    }
  ];

  const socialLinks = [
    { icon: <Instagram />, name: 'Instagram' },
    { icon: <Facebook />, name: 'Facebook' },
    { icon: <Twitter />, name: 'Twitter' },
    { icon: <Linkedin />, name: 'LinkedIn' }
  ];

  return (
    <div className="contact-page-container">
      {/* Hero Section */}
      <motion.section 
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="contact-hero-overlay"></div>
        <motion.div 
          className="contact-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeIn}>Get in Touch</motion.h1>
          <motion.p variants={fadeIn} className="contact-hero-subtitle">
            We're here to help and answer any questions you might have
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section 
        className="contact-info"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="contact-cards-grid">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="contact-card"
              variants={fadeIn}
            >
              <div className="card-icon">{info.icon}</div>
              <h3>{info.title}</h3>
              <p className="main-content">{info.content}</p>
              {info.subContent && (
                <p className="sub-content">{info.subContent}</p>
              )}
              <a href="#" className="card-link">
                {info.link}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Main Contact Section */}
      <motion.section 
        className="main-contact-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="contact-grid">
          {/* Contact Form */}
          <motion.div 
            className="contact-form-container"
            variants={fadeIn}
          >
            <div className="form-header">
              <MessageSquare />
              <h2>Send us a Message</h2>
              <p>Fill out the form and our team will get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
                <Send size={16} />
              </button>

              {formStatus === 'success' && (
                <div className="success-message">
                  <CheckCircle />
                  <p>Your message has been sent successfully!</p>
                </div>
              )}
            </form>
          </motion.div>

          {/* Map Section */}
          <motion.div 
            className="map-container"
            variants={fadeIn}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_CODE"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </motion.section>

      {/* Working Hours & Social */}
      <motion.section 
        className="additional-info"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="info-grid">
          <motion.div className="working-hours" variants={fadeIn}>
            <div className="hours-header">
              <Clock />
              <h2>Working Hours</h2>
            </div>
            <div className="hours-content">
              <div className="hours-row">
                <span className="day">Monday - Friday</span>
                <span className="time">9:00 AM - 5:00 PM</span>
              </div>
              <div className="hours-row">
                <span className="day">Saturday</span>
                <span className="time">9:00 AM - 1:00 PM</span>
              </div>
              <div className="hours-row closed">
                <span className="day">Sunday</span>
                <span className="time">Closed</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="social-connect" variants={fadeIn}>
            <h2>Connect With Us</h2>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href="#" className="social-link">
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactPage;