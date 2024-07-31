
// import React, { useState } from 'react';


// const Market = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (selectedOption === 'option1') {
//       window.location.href = '/Marketplace';
//     } else if (selectedOption === 'option2') {
//       window.location.href = '/Givemachines';
//       console.log('Option 2 selected');
//     } else {
//       console.log('Please select an option');
//     }
//   };

//   return (
//     <div className="market-container">
//       <h2 className="market-header">Want to buy a machine or give it on renting</h2>
//       <form onSubmit={handleSubmit} className="market-form">
//       <div className='option'>
//         <div className="radio-option">
//           <input
//             type="radio"
//             id="option1"
//             name="option"
//             value="option1"
//             checked={selectedOption === 'option1'}
//             onChange={() => setSelectedOption('option1')}
//           />
//           <label htmlFor="option1"><h4>Want to buy the machine</h4></label>
//         </div>
//         <div className="radio-option">
//           <input
//             type="radio"
//             id="option2"
//             name="option"
//             value="option2"
//             checked={selectedOption === 'option2'}
//             onChange={() => setSelectedOption('option2')}
//           />
//           <label htmlFor="option2"><h4>Want to give the machine on rent</h4></label>
//         </div>
//         </div>
//         <button type="submit" class="btn btn-primary" value="Submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Market;


// import React, { useState } from 'react';

// const Market = () => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (selectedOption === 'option1') {
//       window.location.href = '/Marketplace';
//     } else if (selectedOption === 'option2') {
//       window.location.href = '/Givemachines';
//       console.log('Option 2 selected');
//     } else {
//       console.log('Please select an option');
//     }
//   };

//   const styles = {
//     marketContainer: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '20px',
//       backgroundColor: '#f8f9fa',
//       borderRadius: '8px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       maxWidth: '500px',
//       margin: 'auto',
//     },
//     marketHeader: {
//       fontSize: '24px',
//       marginBottom: '20px',
//       color: '#333',
//     },
//     marketForm: {
//       width: '100%',
//     },
//     option: {
//       display: 'flex',
//       flexDirection: 'column',
//       marginBottom: '20px',
//     },
//     radioOption: {
//       display: 'flex',
//       alignItems: 'center',
//       marginBottom: '10px',
//     },
//     radioInput: {
//       marginRight: '10px',
//     },
//     radioLabel: {
//       margin: 0,
//     },
//     button: {
//       width: '100%',
//       padding: '10px 0',
//       backgroundColor: 'green',
//       border: 'none',
//       borderRadius: '4px',
//       color: 'white',
//       fontSize: '16px',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s ease',
//     },
//     // buttonHover: {
//     //   backgroundColor: 'rgba(81, 255, 0, 0.689)',
//     // },
//   };

//   return (
//     <div style={styles.marketContainer}>
//       <h2 style={styles.marketHeader}>Want to buy a machine or give it on renting</h2>
//       <form onSubmit={handleSubmit} style={styles.marketForm}>
//         <div style={styles.option}>
//           <div style={styles.radioOption}>
//             <input
//               type="radio"
//               id="option1"
//               name="option"
//               value="option1"
//               checked={selectedOption === 'option1'}
//               onChange={() => setSelectedOption('option1')}
//               style={styles.radioInput}
//             />
//             <label htmlFor="option1" style={styles.radioLabel}>
//               <h4>Want to buy the machine</h4>
//             </label>
//           </div>
//           <div style={styles.radioOption}>
//             <input
//               type="radio"
//               id="option2"
//               name="option"
//               value="option2"
//               checked={selectedOption === 'option2'}
//               onChange={() => setSelectedOption('option2')}
//               style={styles.radioInput}
//             />
//             <label htmlFor="option2" style={styles.radioLabel}>
//               <h4>Want to give the machine on rent</h4>
//             </label>
//           </div>
//         </div>
//         <button
//           type="submit"
//           style={styles.button}
//           onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
//           onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Market;



import React, { useState } from 'react';

const Market = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === 'option1') {
      window.location.href = '/Marketplace';
    } else if (selectedOption === 'option2') {
      window.location.href = '/Givemachines';
      console.log('Option 2 selected');
    } else {
      console.log('Please select an option');
    }
  };

  const styles = {
    pageContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      backgroundImage: 'url(/path/to/your/agriculture-background.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
    },
    marketContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: 'auto',
    },
    marketHeader: {
      fontSize: '28px',
      marginBottom: '20px',
      color: '#4caf50',
      fontWeight: 'bold',
    },
    marketForm: {
      width: '100%',
    },
    option: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
    },
    radioOption: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    radioInput: {
      marginRight: '10px',
    },
    radioLabel: {
      margin: 0,
      fontSize: '18px',
      color: '#555',
    },
    button: {
      width: '100%',
      padding: '10px 0',
      backgroundColor: '#4caf50',
      border: 'none',
      borderRadius: '4px',
      color: 'white',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#388e3c',
    },
    icon: {
      width: '100px',
      height: '100px',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.marketContainer}>
        <img
          src="data:image/jpeg;base64,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"
          alt="Agriculture Icon"
          style={styles.icon}
        />
        <h2 style={styles.marketHeader}>Want to Buy a machine or give it on Rent</h2>
        <form onSubmit={handleSubmit} style={styles.marketForm}>
          <div style={styles.option}>
            <div style={styles.radioOption}>
              <input
                type="radio"
                id="option1"
                name="option"
                value="option1"
                checked={selectedOption === 'option1'}
                onChange={() => setSelectedOption('option1')}
                style={styles.radioInput}
              />
              <label htmlFor="option1" style={styles.radioLabel}>
                <h4>Want to Buy the machine</h4>
              </label>
            </div>
            <div style={styles.radioOption}>
              <input
                type="radio"
                id="option2"
                name="option"
                value="option2"
                checked={selectedOption === 'option2'}
                onChange={() => setSelectedOption('option2')}
                style={styles.radioInput}
              />
              <label htmlFor="option2" style={styles.radioLabel}>
                <h4>Want to give the machine on Rent</h4>
              </label>
            </div>
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Market;




