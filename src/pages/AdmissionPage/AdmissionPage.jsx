import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarDays, 
  ClipboardCheck, 
  FileText, 
  Users, 
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  Download,
  ExternalLink
} from 'lucide-react';
import './AdmissionPage.css';

const AdmissionPage = () => {
  const [activeStep, setActiveStep] = useState(null);

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

  const admissionSteps = [
    {
      icon: <FileText />,
      title: 'Online Application',
      description: 'Complete the online application form with basic details',
      status: 'Open',
      deadline: 'March 31, 2025'
    },
    {
      icon: <ClipboardCheck />,
      title: 'Entrance Assessment',
      description: 'Schedule and complete the entrance test (Grade 1 and above)',
      status: 'Upcoming',
      deadline: 'April 15, 2025'
    },
    {
      icon: <Users />,
      title: 'Interview Process',
      description: 'Parent-student interaction with school administration',
      status: 'Not Started',
      deadline: 'April 30, 2025'
    }
  ];

  const documents = [
    { title: 'Birth Certificate', required: true },
    { title: 'Previous School Records', required: true },
    { title: 'Address Proof', required: true },
    { title: 'Passport Size Photographs', required: true },
    { title: 'Medical Certificate', required: false },
    { title: 'Transfer Certificate', required: true }
  ];

  const ageCriteria = [
    { grade: 'Grade 1', age: '5+ years' },
    { grade: 'Grade 2', age: '6+ years' },
    { grade: 'Grade 3', age: '7+ years' },
    { grade: 'Grade 4', age: '8+ years' },
    { grade: 'Grade 5', age: '9+ years' }
  ];

  return (
    <div className="admission-container">
      {/* Hero Section */}
      <motion.section 
        className="admission-hero"
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
          <motion.h1 variants={fadeIn}>Begin Your Journey</motion.h1>
          <motion.p variants={fadeIn} className="hero-subtitle">
            Join our community of lifelong learners
          </motion.p>
          <motion.div variants={fadeIn} className="cta-buttons">
            <button className="primary-btn">
              Apply Now <ChevronRight size={20} />
            </button>
            <button className="secondary-btn">
              Download Brochure <Download size={20} />
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Admission Steps */}
      <motion.section 
        className="admission-steps"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className="section-title">
          Admission Process
        </motion.h2>
        
        <div className="steps-timeline">
          {admissionSteps.map((step, index) => (
            <motion.div
              key={index}
              className={`step-card ${activeStep === index ? 'active' : ''}`}
              variants={fadeIn}
              onClick={() => setActiveStep(activeStep === index ? null : index)}
            >
              <div className="step-icon">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <div className="step-meta">
                  <span className="deadline">
                    <Clock size={16} /> {step.deadline}
                  </span>
                  <span className={`status ${step.status.toLowerCase()}`}>
                    {step.status === 'Open' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
                    {step.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Eligibility Section */}
      <motion.section 
        className="eligibility-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className="section-title">
          Eligibility Criteria
        </motion.h2>
        
        <div className="criteria-grid">
          {ageCriteria.map((criteria, index) => (
            <motion.div
              key={index}
              className="criteria-card"
              variants={fadeIn}
            >
              <h3>{criteria.grade}</h3>
              <p>Minimum Age: {criteria.age}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Documents Section */}
      <motion.section 
        className="documents-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className="section-title">
          Required Documents
        </motion.h2>
        
        <div className="documents-grid">
          {documents.map((doc, index) => (
            <motion.div
              key={index}
              className="document-card"
              variants={fadeIn}
            >
              <FileText className="doc-icon" />
              <div className="doc-info">
                <h3>{doc.title}</h3>
                <span className={`doc-status ${doc.required ? 'required' : 'optional'}`}>
                  {doc.required ? 'Required' : 'Optional'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Important Dates */}
      <motion.section 
        className="dates-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className="section-title">
          Important Dates
        </motion.h2>
        
        <div className="dates-grid">
          {[
            { date: 'March 31, 2025', event: 'Application Deadline' },
            { date: 'April 15, 2025', event: 'Entrance Test' },
            { date: 'April 30, 2025', event: 'Results Declaration' },
            { date: 'May 15, 2025', event: 'Session Begins' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="date-card"
              variants={fadeIn}
            >
              <CalendarDays className="date-icon" />
              <div className="date-info">
                <h3>{item.event}</h3>
                <p>{item.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default AdmissionPage;