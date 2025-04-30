import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <motion.section 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Building Bright Futures
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Empowering students to excel academically and socially.
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/courses" className="btn primary-btn">
              Explore Courses
            </Link>
            <Link to="/admission" className="btn secondary-btn">
              Apply Now
            </Link>
          </motion.div>
        </div>
        <motion.div 
          className="hero-image"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img src="https://www.dresden-is.de/cdn/img/Discover/Campuses/Schulcampus-Hof-Innensicht-Schueler-Dreiergruppe.jpg" alt="School Campus" />
        </motion.div>
      </motion.section>

      {/* Key Highlights Section */}
      <motion.section 
        className="highlights-section"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: {},
          animate: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.h2 
          className="section-title"
          variants={fadeIn}
        >
          Why Choose Us
        </motion.h2>
        <div className="highlights-grid">
          {[
            {
              icon: "/icons/achievement.png",
              title: "Outstanding Achievements",
              description: "Our students consistently achieve top ranks in academics and extracurricular activities."
            },
            {
              icon: "/icons/faculty.png",
              title: "Expert Faculty",
              description: "Learn from the best educators who inspire and guide every step of the way."
            },
            {
              icon: "/icons/facilities.png",
              title: "World-Class Facilities",
              description: "Experience top-notch infrastructure, labs, and libraries that enhance learning."
            }
          ].map((highlight, index) => (
            <motion.div 
              key={index}
              className="highlight-card"
              variants={fadeIn}
            >
              <img src={highlight.icon} alt={highlight.title} />
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* News and Updates */}
      <motion.section 
        className="news-updates-section"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: {},
          animate: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.h2 
          className="section-title"
          variants={fadeIn}
        >
          News & Updates
        </motion.h2>
        <div className="news-grid">
          {[
            {
              title: "Annual Sports Day",
              description: "Join us for our grand sports day event on March 15, 2025."
            },
            {
              title: "New STEM Program",
              description: "Enroll in our cutting-edge STEM courses starting this semester."
            },
            {
              title: "Admissions Open",
              description: "Applications for the academic year 2025-26 are now open!"
            }
          ].map((news, index) => (
            <motion.div 
              key={index}
              className="news-card"
              variants={fadeIn}
            >
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <Link to={`/news/${index}`} className="read-more">
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;