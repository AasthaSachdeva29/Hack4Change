import React, { useEffect } from 'react';

const DiseaseDetect = () => {
  useEffect(() => {
    // Open the specified link in a new tab
    window.open("http://127.0.0.1:7860/", '_blank');
  }, []);

  return null; // This component doesn't need to render anything
};

export default DiseaseDetect;