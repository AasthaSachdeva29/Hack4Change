import React, { useEffect } from 'react';

const DiseaseDetect = () => {
  useEffect(() => {
    // Open the specified link in a new tab
    window.open("https://cropdiseasedetector-dtgp.onrender.com/", '_blank');
  }, []);

  return null; // This component doesn't need to render anything
};

export default DiseaseDetect;
