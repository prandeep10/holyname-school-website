import React from 'react';
import { motion } from 'framer-motion';
import { Book, Award, User, Building, Library, Star } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.1 }
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

  return (
    <div className="about-container">
      {/* Hero Section */}
      <motion.section 
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeIn}>About Vidyabarta</motion.h1>
          <motion.p variants={fadeIn} className="hero-text">
            Established in 1995, nurturing bright minds for over two decades
          </motion.p>
          <motion.div variants={fadeIn} className="mission-statement">
            <Book className="mission-icon" />
            <p>To foster holistic education and inspire lifelong learning</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Principal's Message */}
      <motion.section 
        className="principal-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="principal-container">
          <motion.div className="principal-image-container" variants={fadeIn}>
            <img src="/api/placeholder/400/400" alt="Principal Dr. Anjali Mehta" />
            <div className="image-accent"></div>
          </motion.div>
          <motion.div className="principal-content" variants={fadeIn}>
            <h2>Principal's Message</h2>
            <blockquote>
              "At Vidyabarta, we believe in nurturing not just academic excellence, but the complete development of a child's personality. Our focus is on creating an environment where learning becomes a joyful journey of discovery and growth."
            </blockquote>
            <div className="principal-signature">
              <strong>Dr. Anjali Mehta</strong>
              <span>Principal, Vidyabarta</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Infrastructure */}
      <motion.section 
        className="infrastructure-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn}>World-Class Infrastructure</motion.h2>
        <div className="infrastructure-grid">
          {[
            {
              icon: <Building />,
              title: "Modern Campus",
              desc: "State-of-the-art facilities spread across 10 acres"
            },
            {
              icon: <Library />,
              title: "Digital Library",
              desc: "30,000+ books and unlimited digital resources"
            },
            {
              icon: <Star />,
              title: "Smart Classrooms",
              desc: "Technology-integrated learning environments"
            },
            {
              icon: <User />,
              title: "Sports Complex",
              desc: "International standard sports facilities"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="infra-card"
              variants={fadeIn}
            >
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section 
        className="achievements-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn}>Our Achievements</motion.h2>
        <div className="achievements-grid">
          {[
            { number: "5", label: "Years as Best School" },
            { number: "100%", label: "Board Results" },
            { number: "50+", label: "National Awards" },
            { number: "1000+", label: "Success Stories" }
          ].map((achievement, index) => (
            <motion.div 
              key={index}
              className="achievement-card"
              variants={fadeIn}
            >
              <span className="achievement-number">{achievement.number}</span>
              <span className="achievement-label">{achievement.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;