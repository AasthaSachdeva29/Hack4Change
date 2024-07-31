// import React, { useEffect } from 'react';

// const Aires = () => {
//   useEffect(() => {
//     // Open the external link in a new tab when component mounts
//     window.open('https://app.vectorshift.ai/chatbots/deployed/6626434f43a8ae971c855430', '_blank');
//   }, []);

//   // Render nothing in the component
//   return null;
// };

// export default Aires;



// src/pages/Aires.jsx
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Aires = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Redirect to the specified link
//     window.location.href = "https://app.vectorshift.ai/chatbots/deployed/6626434f43a8ae971c855430",'_blank';
//   }, []);

//   return null; // This component doesn't need to render anything
// };

// export default Aires;

import React, { useEffect } from 'react';

const Aires = () => {
  useEffect(() => {
    // Open the specified link in a new tab
    window.open("https://app.vectorshift.ai/chatbots/deployed/6626434f43a8ae971c855430", '_blank');
  }, []);

  return null; // This component doesn't need to render anything
};

export default Aires;



