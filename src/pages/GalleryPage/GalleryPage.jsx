import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Play, 
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon
} from 'lucide-react';
import './GalleryPage.css';

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

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

  const albums = [
    {
      id: 'annual-day',
      title: 'Annual Day Celebrations',
      description: 'Capturing moments from our grand annual day festivities',
      thumbnail: '/api/placeholder/400/300',
      images: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ]
    },
    {
      id: 'sports-meet',
      title: 'Sports Meet 2024',
      description: 'Highlights from our annual sports competition',
      thumbnail: '/api/placeholder/400/300',
      images: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ]
    },
    {
      id: 'cultural-fest',
      title: 'Cultural Festival',
      description: 'A celebration of art, music, and dance',
      thumbnail: '/api/placeholder/400/300',
      images: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ]
    },
    {
      id: 'stem-projects',
      title: 'STEM Exhibition',
      description: 'Innovative projects by our young scientists',
      thumbnail: '/api/placeholder/400/300',
      images: [
        '/api/placeholder/800/600',
        '/api/placeholder/800/600',
        '/api/placeholder/800/600'
      ]
    }
  ];

  const videos = [
    {
      title: 'Campus Tour',
      thumbnail: '/api/placeholder/400/300',
      duration: '3:45'
    },
    {
      title: 'Student Life',
      thumbnail: '/api/placeholder/400/300',
      duration: '4:20'
    },
    {
      title: 'Academic Excellence',
      thumbnail: '/api/placeholder/400/300',
      duration: '5:15'
    }
  ];

  return (
    <div className="gallery-page-container">
      {/* Hero Section */}
      <motion.section 
        className="gallery-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="gallery-hero-overlay"></div>
        <motion.div 
          className="gallery-hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeIn}>Our Gallery</motion.h1>
          <motion.p variants={fadeIn} className="gallery-hero-subtitle">
            Moments and memories from our vibrant campus life
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Photo Albums */}
      <motion.section 
        className="gallery-albums"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className="gallery-section-title">
          Photo Albums
        </motion.h2>
        
        <div className="gallery-albums-grid">
          {albums.map((album) => (
            <motion.div
              key={album.id}
              className="gallery-album-card"
              variants={fadeIn}
              onClick={() => setSelectedAlbum(album)}
            >
              <div className="gallery-album-thumbnail">
                <img src={album.thumbnail} alt={album.title} />
                <div className="gallery-album-overlay">
                  <ImageIcon />
                  <span>View Album</span>
                </div>
              </div>
              <div className="gallery-album-content">
                <h3>{album.title}</h3>
                <p>{album.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Videos Section */}
      <motion.section 
        className="gallery-videos"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className="gallery-section-title">
          Featured Videos
        </motion.h2>
        
        <div className="gallery-videos-grid">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="gallery-video-card"
              variants={fadeIn}
            >
              <div className="gallery-video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className="gallery-video-overlay">
                  <Play className="gallery-play-icon" />
                </div>
                <span className="gallery-video-duration">{video.duration}</span>
              </div>
              <h3>{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Virtual Tour */}
      <motion.section 
        className="gallery-virtual-tour"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeIn} className="gallery-section-title">
          Virtual Campus Tour
        </motion.h2>
        
        <motion.div variants={fadeIn} className="gallery-tour-container">
          <div className="gallery-tour-preview">
            <img src="/api/placeholder/1200/600" alt="Campus Virtual Tour" />
            <div className="gallery-tour-overlay">
              <button className="gallery-tour-button">
                <Maximize2 />
                Start Tour
              </button>
            </div>
          </div>
          <div className="gallery-tour-info">
            <h3>Explore Our Campus</h3>
            <p>Take a virtual walk through our state-of-the-art facilities and experience the vibrant atmosphere of our campus.</p>
          </div>
        </motion.div>
      </motion.section>

      {/* Image Lightbox */}
      {selectedImage && (
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
          <button className="gallery-close-button">
            <X />
          </button>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}

      {/* Album Modal */}
      {selectedAlbum && (
        <div className="gallery-album-modal">
          <button 
            className="gallery-close-button"
            onClick={() => setSelectedAlbum(null)}
          >
            <X />
          </button>
          <div className="gallery-modal-content">
            <h2>{selectedAlbum.title}</h2>
            <div className="gallery-modal-grid">
              {selectedAlbum.images.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${selectedAlbum.title} ${index + 1}`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;