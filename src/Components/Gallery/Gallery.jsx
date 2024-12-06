import React from 'react';
import './Gallery.css';
import imagerusl from '../../Images/rusls.jpg'

const Gallery = () => {
  const categories = [
    {
      title: "University",
      images: [
        imagerusl,
        "https://via.placeholder.com/150x150?text=University+2",
      ],
    },
    {
      title: "Family",
      images: [
        "https://via.placeholder.com/150x150?text=Family+1",
        "https://via.placeholder.com/150x150?text=Family+2",
        "https://via.placeholder.com/150x150?text=Family+3",
      ],
    },
    {
      title: "School",
      images: [
        "https://via.placeholder.com/150x150?text=School+1",
        "https://via.placeholder.com/150x150?text=School+2",
      ],
    },
    {
      title: "Others",
      images: [
        "https://via.placeholder.com/150x150?text=Others+1",
        "https://via.placeholder.com/150x150?text=Others+2",
        "https://via.placeholder.com/150x150?text=Others+3",
        "https://via.placeholder.com/150x150?text=Others+4",
      ],
    },
  ];

  return (
    <div className="image-grid">
      {categories.map((category, index) => (
        <div className="category" key={index}>
          <h3 className="category-title">{category.title}</h3>
          <div className="category-images">
            {category.images.map((image, idx) => (
              <img src={image} alt={`${category.title} ${idx + 1}`} key={idx} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
