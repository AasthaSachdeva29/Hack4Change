// import React, { useEffect, useState } from 'react';
// import Chart from 'chart.js/auto';
// import { fetchProductsFromMongoDB } from '..\..\..\..\backend\db\fetch'; // Function to fetch products data from MongoDB

// const graphChart = () => {
//   const [chartData, setChartData] = useState({});

//   useEffect(() => {
//     const fetchChartData = async () => {
//       try {
//         // Fetch products data from MongoDB
//         const productsData = await fetchProductsFromMongoDB();

//         // Process data into the format Chart.js expects
//         const labels = productsData.map(product => product.fertiliser);
//         const prices = productsData.map(product => product.fertiliserQuantity);

//         // Set up Chart.js data
//         setChartData({
//           labels: labels,
//           datasets: [
//             {
//               label: 'Fertilisers',
//               data: prices,
//               backgroundColor: [
//                 'rgba(0, 100, 0, 0.2)',
//                 'rgba(0, 100, 0, 0.4)',
//                 'rgba(0, 100, 0, 0.6)',
//                 'rgba(0, 100, 0, 0.8)',
//                 'rgba(0, 100, 0, 1)',
//                 'rgba(0, 150, 0, 1)',
//                 'rgba(0, 200, 0, 1)'
//               ],
//               borderColor: '#006400',
//               borderWidth: 2
//             },
//           ],
//         });
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchChartData();
//   }, []);

//   // Create the chart once data is loaded
//   useEffect(() => {
//     const ctx1 = document.getElementById('chart1').getContext('2d');
//     new Chart(ctx1, {
//       type: 'bar',
//       data: chartData,
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//           },
//         },
//       },
//     });
//   }, [chartData]);


// //   useEffect(() => {
// //     // Chart 1 - Fertilizer Distribution
// //     const ctx1 = document.getElementById('chart1');
// //     new Chart(ctx1, {
// //       type: 'doughnut',
// //       data: {
// //         labels: ["DAP", "Potassium Sulphate", "MOP", "Urea", "SSP", "Diammonium", "Potassium"],
// //         datasets: [{
// //           label: "Fertilizers",
// //           data: [100, 50, 30, 150, 70, 200, 130],
// //           backgroundColor: [
// //             'rgba(0, 100, 0, 0.2)',
// //             'rgba(0, 100, 0, 0.4)',
// //             'rgba(0, 100, 0, 0.6)',
// //             'rgba(0, 100, 0, 0.8)',
// //             'rgba(0, 100, 0, 1)',
// //             'rgba(0, 150, 0, 1)',
// //             'rgba(0, 200, 0, 1)'
// //           ],
// //           borderColor: '#006400',
// //           borderWidth: 2
// //         }]
// //       },
// //       options: {
// //         responsive: true,
// //         maintainAspectRatio: false
// //       }
// //     });

  
//   return (
//     <div>
//       <canvas id="myChart" width="400" height="400"></canvas>
//     </div>
//   );
// };

// export default graphChart;



import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { fetch } from 'D:\agrotech22222222\backend\db\fetch.js'; // Corrected import path

const GraphChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        // Fetch products data from MongoDB
        const productsData = await fetch();

        // Process data into the format Chart.js expects
        const labels = productsData.map(product => product.fertiliser);
        const prices = productsData.map(product => product.fertiliserQuantity);

        // Set up Chart.js data
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Fertilisers',
              data: prices,
              backgroundColor: [
                'rgba(0, 100, 0, 0.2)',
                'rgba(0, 100, 0, 0.4)',
                'rgba(0, 100, 0, 0.6)',
                'rgba(0, 100, 0, 0.8)',
                'rgba(0, 100, 0, 1)',
                'rgba(0, 150, 0, 1)',
                'rgba(0, 200, 0, 1)'
              ],
              borderColor: '#006400',
              borderWidth: 2
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchChartData();
  }, []);

  // Create the chart once data is loaded
  useEffect(() => {
    const ctx1 = document.getElementById('myChart').getContext('2d'); // Corrected canvas ID
    new Chart(ctx1, {
      type: 'bar',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [chartData]);

  return (
    <div>
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
};

export default GraphChart;
