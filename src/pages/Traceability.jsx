import React, { useEffect } from 'react';

const Traceability = () => {
  useEffect(() => {
    // Open the external link in a new tab when component mounts
    window.open('http://localhost:8501/', '_blank');
  }, []);

  // Render nothing in the component
  return null;
};

export default Traceability;







// import React, { useEffect } from 'react';
// import Chart from 'chart.js/auto';

// function Traceability() {
//   useEffect(() => {
//     // Chart 1 - Fertilizer Distribution
//     const ctx1 = document.getElementById('chart1');
//     new Chart(ctx1, {
//       type: 'doughnut',
//       data: {
//         labels: ["DAP", "Potassium Sulphate", "MOP", "Urea", "SSP", "Diammonium", "Potassium"],
//         datasets: [{
//           label: "Fertilizers",
//           data: [100, 50, 30, 150, 70, 200, 130],
//           backgroundColor: [
//             'rgba(0, 100, 0, 0.2)',
//             'rgba(0, 100, 0, 0.4)',
//             'rgba(0, 100, 0, 0.6)',
//             'rgba(0, 100, 0, 0.8)',
//             'rgba(0, 100, 0, 1)',
//             'rgba(0, 150, 0, 1)',
//             'rgba(0, 200, 0, 1)'
//           ],
//           borderColor: '#006400',
//           borderWidth: 2
//         }]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false
//       }
//     });

//     // Chart 2 - Seed Distribution
//     const ctx2 = document.getElementById('chart2');
//     new Chart(ctx2, {
//       type: 'bar',
//       data: {
//         labels: ["Soybean", "Maize", "Paddy", "Mustard", "Rice", "Barley", "Wheat"],
//         datasets: [{
//           label: 'Seeds',
//           data: [100, 50, 200, 70, 130, 150, 100],
//           backgroundColor: '#006400',
//           borderColor: '#006400',
//           borderWidth: 5
//         }]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false
//       }
//     });
// //    Chart 3 - Top Winter Seeds
//     var ctx3 = document.getElementById('chart3').getContext('2d');
//     var chart3 = new Chart(ctx3, {
//       type: 'bar',
//       data: {
//         labels: ["Wheat", "Barley", "Mustard"],
//         datasets: [{
//           label:'Top Seeds (Winter)',
//           data: [100, 50, 30, 150,70,200,130],
//           backgroundColor: '#006400',
//           borderColor: '#006400',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false
//       }
//     });

//     // Chart 4 - Top Summer Seeds
//     var ctx4 = document.getElementById('chart4').getContext('2d');
//     var chart4 = new Chart(ctx4, {
//       type: 'bar',
//       data: {
//         labels: ["Wheat", "Paddy", "Mustard"],
//         datasets: [{
//           label:'Top Seeds (Summer)',
//           data: [100, 50, 30, 150,70,200,130],
//           backgroundColor: '#006400',
//           borderColor: '#006400',
//           borderWidth: 1
//         }]
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false
//       }
//     });


// // Chart 5 - Irrigation Data
// function generateIrrigationData() {
//     const data = [];
//     for (let i = 0; i < 12; i++) {
//       const baseIrrigation = Math.random() * 50 + 50;
//       const rainfall = Math.random() * 100;
//       const adjustedIrrigation = baseIrrigation - (rainfall / 3);
//       data.push(adjustedIrrigation);
//     }
//     return data;
//   }


//   var ctx5 = document.getElementById('chart5').getContext('2d');
//     var chart5 = new Chart(ctx5, {
//       type: 'line',
//       data: {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//         datasets: [{
//           label: 'Irrigation Data (in mm)',
//           data: generateIrrigationData(),
//           fill: 'start',
//           backgroundColor: 'rgba(0, 100, 0, 0.4)',
//           borderColor: '#006400',
//           tension: 0.1
//         }]
//       },
//       options: {
//         scales: {
//           x: {
//             title: {
//               display: true,
//               text: 'Month'
//             }
//           },
//           y: {
//             title: {
//               display: true,
//               text: 'Irrigation (mm)'
//             }
//           }
//         },
//         responsive: true,
//         maintainAspectRatio: false
//       }
//     });



//     // Additional charts...

//   }, []); // Empty dependency array to run only once after component mount

//   return (
//      <div className="dashb">
//         <div className="chart-item">
//          <div className="chart-container" >
//      <canvas id="chart1" width="300" height="300"></canvas>
//          </div>
//          <p>Fertilizer Distribution</p>
//        </div>
//        <div className="chart-item">
//          <div className="chart-container">
//            <canvas id="chart2" width="300" height="300"></canvas>
//          </div>
//          <p><h4><i>Seed Distribution</i></h4></p>
//        </div>
//       {/* Additional chart items... */}

//        <div class="chart-item">
//        <div class="chart-container">
//          <canvas id="chart3" width="150" height="150"></canvas>
//        </div>
//        <p><h4><i>Top Winter Seeds</i></h4></p>
//      </div>
//      <div class="chart-item">
//        <div class="chart-container">
//          <canvas id="chart4" width="150" height="150"></canvas>
//        </div>
//        <p>Top Summer Seeds</p>
//      </div>
//      <div class="chart-item">
//        <div class="chart-container">
//          <canvas id="chart5" width="150" height="150"></canvas>
//        </div>
//        <p>Irrigation Data</p>
//      </div>
//     </div>
//   );
// }

// export default Traceability;
