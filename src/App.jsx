import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import AboutPage from './pages/AboutPage/AboutPage'
import CoursesPage from './pages/CoursesPage/CoursesPage'
import AdmissionPage from './pages/AdmissionPage/AdmissionPage'
import FacultyPage from './pages/FacultyPage/FacultyPage'
import GalleryPage from './pages/GalleryPage/GalleryPage'
import CareerPage from './pages/CareerPage/CareerPage'
import ContactPage from './pages/ContactPage/ContactPage'
import HomePage from './pages/HomePage/HomePage'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutpage" element={<AboutPage/>} />
        <Route path="/coursespage" element={<CoursesPage/>} />
        <Route path="/admissionpage" element={<AdmissionPage/>} />
        <Route path="/facultypage" element={<FacultyPage/>} />
        <Route path="/gallerypage" element={<GalleryPage/>} />
        <Route path="/careerpage" element={<CareerPage/>} />
        <Route path="/contactpage" element={<ContactPage/>} />
      </Routes>
    </Router>
  )
}

export default App
