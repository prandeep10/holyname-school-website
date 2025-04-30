import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase,
  Upload,
  Users,
  Clock,
  MapPin,
  ChevronRight,
  GraduationCap,
  Coffee,
  Heart,
  Target,
  Award,
  Smile
} from 'lucide-react';
import './CareerPage.css';

const CareerPage = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [dragActive, setDragActive] = useState(false);

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

  const openPositions = [
    {
      title: 'Physics Teacher',
      department: 'Senior Secondary',
      location: 'Main Campus',
      type: 'Full Time',
      experience: '5+ years',
      description: 'We are looking for a passionate Physics teacher to inspire and guide our senior secondary students.',
      requirements: [
        'Ph.D. in Physics or related field',
        'Previous teaching experience',
        'Strong communication skills',
        'Innovative teaching methods'
      ]
    },
    {
      title: 'Software Engineer',
      department: 'IT Department',
      location: 'Tech Wing',
      type: 'Full Time',
      experience: '3+ years',
      description: 'Join our tech team to develop and maintain educational software solutions.',
      requirements: [
        'B.Tech/M.Tech in Computer Science',
        'React.js expertise',
        'Backend development skills',
        'Educational tech experience'
      ]
    },
    {
      title: 'Marketing Manager',
      department: 'Administration',
      location: 'Main Campus',
      type: 'Full Time',
      experience: '4+ years',
      description: 'Lead our marketing initiatives and strengthen our brand presence.',
      requirements: [
        'MBA in Marketing',
        'Digital marketing expertise',
        'Content strategy experience',
        'Educational sector knowledge'
      ]
    }
  ];

  const culturePillars = [
    {
      icon: <Heart />,
      title: 'Passion for Education',
      description: 'We believe in transforming lives through quality education'
    },
    {
      icon: <Users />,
      title: 'Collaborative Spirit',
      description: 'Work together to create an enriching learning environment'
    },
    {
      icon: <Target />,
      title: 'Innovation Focus',
      description: 'Constantly evolving and adopting new teaching methodologies'
    },
    {
      icon: <Award />,
      title: 'Excellence Driven',
      description: 'Striving for the highest standards in everything we do'
    }
  ];

  const benefits = [
    'Professional Development Programs',
    'Health Insurance Coverage',
    'Performance Bonuses',
    'Work-Life Balance',
    'Modern Infrastructure',
    'Career Growth Opportunities'
  ];

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload
      console.log("File dropped:", e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="career-page-container">
      {/* Hero Section */}
      <motion.section 
        className="career-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="career-hero-overlay"></div>
        <motion.div 
          className="career-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeIn}>Join Our Team</motion.h1>
          <motion.p variants={fadeIn} className="career-hero-subtitle">
            Shape the future of education with us
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Open Positions */}
      <motion.section 
        className="career-positions"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className="career-section-title">
          Open Positions
        </motion.h2>
        
        <div className="career-positions-grid">
          {openPositions.map((position, index) => (
            <motion.div
              key={index}
              className="career-position-card"
              variants={fadeIn}
              onClick={() => setSelectedPosition(position)}
            >
              <div className="position-header">
                <Briefcase className="position-icon" />
                <h3>{position.title}</h3>
                <span className="department-tag">{position.department}</span>
              </div>
              <div className="position-details">
                <div className="detail-item">
                  <MapPin size={16} />
                  <span>{position.location}</span>
                </div>
                <div className="detail-item">
                  <Clock size={16} />
                  <span>{position.type}</span>
                </div>
                <div className="detail-item">
                  <GraduationCap size={16} />
                  <span>{position.experience}</span>
                </div>
              </div>
              <p className="position-description">{position.description}</p>
              <button className="apply-button">
                View Details <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Application Process */}
      <motion.section 
        className="career-application"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className="career-section-title">
          Application Process
        </motion.h2>
        
        <motion.div variants={fadeIn} className="application-container">
          <div className="application-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Submit Application</h3>
              <p>Upload your resume and fill out basic information</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Initial Review</h3>
              <p>Our HR team will review your application</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Interview Process</h3>
              <p>Multiple rounds to assess skills and cultural fit</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Final Selection</h3>
              <p>Offer letter and onboarding process</p>
            </div>
          </div>

          <div 
            className={`upload-zone ${dragActive ? 'drag-active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload size={48} />
            <h3>Upload Your Resume</h3>
            <p>Drag and drop your resume here or click to browse</p>
            <input 
              type="file" 
              id="resume-upload" 
              accept=".pdf,.doc,.docx" 
              className="file-input"
            />
            <button className="browse-button">Browse Files</button>
          </div>
        </motion.div>
      </motion.section>

      {/* Work Culture */}
      <motion.section 
        className="career-culture"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className="career-section-title">
          Our Work Culture
        </motion.h2>
        
        <div className="culture-grid">
          {culturePillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="culture-card"
              variants={fadeIn}
            >
              <div className="culture-icon">{pillar.icon}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeIn} className="benefits-section">
          <h3>Benefits & Perks</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <Smile className="benefit-icon" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Position Modal */}
      {selectedPosition && (
        <div className="position-modal" onClick={() => setSelectedPosition(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2>{selectedPosition.title}</h2>
            <span className="modal-department">{selectedPosition.department}</span>
            
            <div className="modal-details">
              <div className="detail-item">
                <MapPin size={16} />
                <span>{selectedPosition.location}</span>
              </div>
              <div className="detail-item">
                <Clock size={16} />
                <span>{selectedPosition.type}</span>
              </div>
              <div className="detail-item">
                <GraduationCap size={16} />
                <span>{selectedPosition.experience}</span>
              </div>
            </div>

            <div className="modal-section">
              <h3>About the Role</h3>
              <p>{selectedPosition.description}</p>
            </div>

            <div className="modal-section">
              <h3>Requirements</h3>
              <ul>
                {selectedPosition.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <button className="apply-now-button">
              Apply Now <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPage;