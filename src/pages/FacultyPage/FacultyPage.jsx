import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users,
  Award,
  BookOpen,
  Calculator,
  Palette,
  Dumbbell,
  Languages,
  Music,
  Mail,
  Linkedin,
  ChevronRight
} from 'lucide-react';
import './FacultyPage.css';

const FacultyPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

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

  const departments = [
    { id: 'science', name: 'Science', icon: <Palette />, color: 'from-green-500 to-green-600' },
    { id: 'mathematics', name: 'Mathematics', icon: <Calculator />, color: 'from-blue-500 to-blue-600' },
    { id: 'arts', name: 'Arts', icon: <Palette />, color: 'from-purple-500 to-purple-600' },
    { id: 'physical', name: 'Physical Education', icon: <Dumbbell />, color: 'from-red-500 to-red-600' },
    { id: 'languages', name: 'Languages', icon: <Languages />, color: 'from-yellow-500 to-yellow-600' },
    { id: 'music', name: 'Performing Arts', icon: <Music />, color: 'from-pink-500 to-pink-600' }
  ];

  const facultyMembers = [
    {
      name: 'Dr. Shalini Gupta',
      position: 'Head of Science',
      department: 'science',
      qualification: 'Ph.D. in Physics',
      experience: '15+ years',
      awards: ['Best Educator 2024', 'National Science Award'],
      image: '/api/placeholder/400/400'
    },
    {
      name: 'Prof. Rajesh Kumar',
      position: 'Mathematics Lead',
      department: 'mathematics',
      qualification: 'M.Sc. Mathematics',
      experience: '12+ years',
      awards: ['Excellence in Teaching 2023'],
      image: '/api/placeholder/400/400'
    },
    // Add more faculty members here
  ];

  return (
    <div className="faculty-container">
      {/* Hero Section */}
      <motion.section 
        className="faculty-hero"
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
          <motion.h1 variants={fadeIn}>Our Distinguished Faculty</motion.h1>
          <motion.p variants={fadeIn} className="hero-subtitle">
            Meet the educators shaping tomorrow's leaders
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Department Filter */}
      <motion.section 
        className="departments-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className="section-title">
          Academic Departments
        </motion.h2>
        
        <div className="departments-grid">
          <motion.div
            variants={fadeIn}
            className={`department-card ${selectedDepartment === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedDepartment('all')}
          >
            <Users className="dept-icon" />
            <h3>All Departments</h3>
          </motion.div>

          {departments.map((dept) => (
            <motion.div
              key={dept.id}
              variants={fadeIn}
              className={`department-card ${selectedDepartment === dept.id ? 'active' : ''}`}
              onClick={() => setSelectedDepartment(dept.id)}
            >
              <div className="dept-icon">{dept.icon}</div>
              <h3>{dept.name}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Faculty Members */}
      <motion.section 
        className="faculty-members"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className="section-title">
          Meet Our Team
        </motion.h2>
        
        <div className="faculty-grid">
          {facultyMembers
            .filter(member => selectedDepartment === 'all' || member.department === selectedDepartment)
            .map((member, index) => (
              <motion.div
                key={index}
                className="faculty-card"
                variants={fadeIn}
              >
                <div className="card-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="card-content">
                  <h3>{member.name}</h3>
                  <span className="position">{member.position}</span>
                  <p className="qualification">{member.qualification}</p>
                  <div className="experience">
                    <BookOpen size={16} />
                    <span>{member.experience} Experience</span>
                  </div>
                  <div className="awards">
                    {member.awards.map((award, i) => (
                      <div key={i} className="award-tag">
                        <Award size={14} />
                        {award}
                      </div>
                    ))}
                  </div>
                  <div className="contact-buttons">
                    <button className="contact-btn">
                      <Mail size={16} /> Contact
                    </button>
                    <button className="linkedin-btn">
                      <Linkedin size={16} /> Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </motion.section>

      {/* Faculty Message */}
      <motion.section 
        className="message-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeIn} className="message-content">
          <h2>Message from Our Faculty</h2>
          <blockquote>
            "At Vidyabarta, we believe in nurturing not just academic excellence, but also character, creativity, and critical thinking. Our commitment is to provide an enriching learning environment where every student can discover their potential and excel in their chosen path."
          </blockquote>
          <div className="collective-signature">
            - The Faculty of Vidyabarta
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default FacultyPage;