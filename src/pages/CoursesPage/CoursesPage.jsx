import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code, 
  Languages, 
  Microscope,
  Music,
  Medal,
  Users,
  Brain,
  Rocket,
  ChevronRight
} from 'lucide-react';
import './CoursesPage.css';

const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);

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

  const courseCategories = [
    {
      id: 'primary',
      title: 'Primary Education',
      grades: 'Grades 1-5',
      description: 'Building strong foundations through engaging, hands-on learning experiences.',
      icon: <Brain />,
      features: [
        'Interactive Learning Methods',
        'Foundation in Mathematics and Science',
        'Language Development',
        'Creative Arts and Music',
        'Physical Education'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'secondary',
      title: 'Secondary Education',
      grades: 'Grades 6-10',
      description: 'Comprehensive education focusing on academic excellence and personal growth.',
      icon: <Users />,
      features: [
        'Advanced Mathematics',
        'Sciences with Lab Work',
        'Literature and Languages',
        'Social Sciences',
        'Computer Science Fundamentals'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'senior',
      title: 'Senior Secondary',
      grades: 'Grades 11-12',
      description: 'Specialized streams preparing students for higher education and career paths.',
      icon: <GraduationCap />,
      features: [
        'Science Stream (PCM/PCB)',
        'Commerce Stream',
        'Humanities Stream',
        'Career Counseling',
        'Competitive Exam Preparation'
      ],
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  const skillPrograms = [
    {
      icon: <Code />,
      title: 'Robotics & Coding',
      description: 'Learn programming, robotics, and AI fundamentals'
    },
    {
      icon: <Languages />,
      title: 'Foreign Languages',
      description: 'Master global languages with native speakers'
    },
    {
      icon: <Microscope />,
      title: 'STEM Projects',
      description: 'Hands-on experience with cutting-edge technology'
    },
    {
      icon: <Music />,
      title: 'Performing Arts',
      description: 'Express creativity through music, dance, and drama'
    },
    {
      icon: <Medal />,
      title: 'Sports Excellence',
      description: 'Professional coaching in various sports'
    },
    {
      icon: <Rocket />,
      title: 'Innovation Lab',
      description: 'Experiment with new ideas and technologies'
    }
  ];

  return (
    <div className="courses-container">
      {/* Hero Section */}
      <motion.section 
        className="courses-hero"
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
          <motion.h1 variants={fadeIn}>Academic Excellence</motion.h1>
          <motion.p variants={fadeIn} className="hero-subtitle">
            Comprehensive education programs designed for future leaders
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Main Course Categories */}
      <motion.section 
        className="course-categories"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className="section-title">
          Our Academic Programs
        </motion.h2>
        
        <div className="categories-grid">
          {courseCategories.map((category) => (
            <motion.div
              key={category.id}
              className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
              variants={fadeIn}
              onClick={() => setActiveCategory(
                activeCategory === category.id ? null : category.id
              )}
            >
              <div className={`card-header bg-gradient-to-r ${category.color}`}>
                <div className="header-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <span className="grades">{category.grades}</span>
              </div>
              <div className="card-content">
                <p>{category.description}</p>
                <ul className="feature-list">
                  {category.features.map((feature, index) => (
                    <li key={index}>
                      <ChevronRight size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skill Development Programs */}
      <motion.section 
        className="skill-programs"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className="section-title">
          Skill Development Programs
        </motion.h2>
        
        <div className="skills-grid">
          {skillPrograms.map((program, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={fadeIn}
            >
              <div className="skill-icon">{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <button className="learn-more">
                Learn More <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default CoursesPage;