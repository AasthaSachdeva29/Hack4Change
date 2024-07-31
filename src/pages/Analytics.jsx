// import React from 'react';
// import { Link } from 'react-router-dom';

// const Analytics = () => {
//     return (
//         <div>
//             <h1>Analytics page</h1>
//             <Link to="https://app.vectorshift.ai/chatbots/deployed/6626434f43a8ae971c855430"></Link>
//         </div>
//     );
// };

// export default Analytics;


// Analytics.jsx

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Analytics = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Navigate to the external link when component mounts
//     navigate('http://google.com', { replace: true });
//   }, [navigate]);

//   // Render nothing in the component
//   return null;
// };

// export default Analytics;


// import React, { useEffect } from 'react';

// const Analytics = () => {
//   useEffect(() => {
//     // Navigate to the external link when component mounts
//     window.location.href = 'https://app.vectorshift.ai/chatbots/deployed/6626434f43a8ae971c855430';
//   }, []);

//   // Render nothing in the component
//   return null;
// };

// export default Analytics;


// Analytics.jsx

import React, { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Open the external link in a new tab when component mounts
    window.open('https://app.vectorshift.ai/chatbots/deployed/6626434f43a8ae971c855430', '_blank');
  }, []);

  // Render nothing in the component
  return null;
};

export default Analytics;
