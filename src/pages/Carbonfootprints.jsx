// import React, { useEffect } from 'react';

// const Carbonfootprints = () => {
//   useEffect(() => {
//     // Open the external link in a new tab when component mounts
//     window.open('http://localhost:8501/', '_blank');
//   }, []);

//   // Render nothing in the component
//   return null;
// };

// export default Carbonfootprints;


import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Slider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
  Alert,
} from "@mui/material";

const EMISSION_FACTORS = {
  India: {
    Electricity: 0.82, // kgCO2/kWh
    diesel: 0.32, // kgCO2/litre
    Nitrogen: 4.0, // kg CO2/kg product
    Parali: 0.42, // kg CO2/kg product
  },
};

const Carbonfootprints = () => {
  const [country, setCountry] = useState("India");
  const [diesel, setDiesel] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [nitrogen, setNitrogen] = useState(0);
  const [parali, setParali] = useState(0);
  const [totalEmissions, setTotalEmissions] = useState(null);

  const calculateEmissions = () => {
    const dieselEmissions =
      (EMISSION_FACTORS[country].diesel * diesel * 12) / 1000;
    const electricityEmissions =
      (EMISSION_FACTORS[country].Electricity * electricity * 12) / 1000;
    const nitrogenEmissions =
      (EMISSION_FACTORS[country].Nitrogen * nitrogen * 12) / 1000;
    const paraliEmissions =
      (EMISSION_FACTORS[country].Parali * parali * 1000) / 1000;

    const total = (
      dieselEmissions +
      electricityEmissions +
      nitrogenEmissions +
      paraliEmissions
    ).toFixed(2);
    setTotalEmissions(total);
  };

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Personal Carbon Calculator App
      </Typography>

      <FormControl fullWidth margin="normal">
        <InputLabel style={{fontSize:"25px",fontWeight:"bold"}}>🌍 Your Country</InputLabel>
        <Select value={country} style={{marginTop:"25px"}} onChange={(e) => setCountry(e.target.value)}>
          <MenuItem value="India">India</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} style={{marginTop:"7px"}}>
        <Grid item xs={12} md={6}>
          {/* <Box mb={3}>
            <Typography variant="h6">🚜 Monthly diesel used (in litre)</Typography>
            <Slider value={diesel} onChange={(e, v) => setDiesel(v)} step={1} min={0} max={100} />
          </Box> */}
          <Box mb={3}>
         
            <Typography variant="h6">
              🚜 Monthly diesel used (in litre)
            </Typography>

            <Slider
              value={diesel}
              onChange={(e, v) => setDiesel(v)}
              step={1}
              min={0}
              max={100}
            />
            <Box mt={2} style={{textAlign:"start",marginTop:"0px",color:"grey"}}>
              <Typography variant="body1" align="start">
                {diesel} litres
              </Typography>
            </Box>
          </Box> 

          <Box mb={3}>
            <Typography variant="h6">
              💡 Monthly electricity consumption (in kWh)
            </Typography>
            <Slider
              value={electricity}
              onChange={(e, v) => setElectricity(v)}
              step={1}
              min={0}
              max={1000}
            />
            <Box mt={2} style={{textAlign:"start",marginTop:"0px",color:"grey"}}>
              <Typography variant="body1" align="start">
                {electricity} kWH
              </Typography>
            </Box>
         
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box mb={3}>
            <Typography variant="h6">
              🌱 Nitrogen(N) used per month (in kg)
            </Typography>
            <Slider
              value={nitrogen}
              onChange={(e, v) => setNitrogen(v)}
              step={1}
              min={0}
              max={100}
            />
            <Box mt={2} style={{textAlign:"start",marginTop:"0px",color:"grey"}}>
              <Typography variant="body1" align="start">
                {nitrogen} kg
              </Typography>
            </Box>
          </Box>

          <Box mb={3}>
            <Typography variant="h6">
              🌱 Amount of Parali burnt (in tons)
            </Typography>
            <Slider
              value={parali}
              onChange={(e, v) => setParali(v)}
              step={1}
              min={0}
              max={100}
            />
            <Box mt={2} style={{textAlign:"start",marginTop:"0px",color:"grey"}}>
              <Typography variant="body1" align="start">
                {parali} tons
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Button variant="contained" color="primary" onClick={calculateEmissions}>
        Calculate CO2 Emissions
      </Button>

      {totalEmissions !== null && (
        <Box mt={3}>
          <Typography variant="h4" component="h2">
            Results
          </Typography>
          <Alert severity="info" style={{margin:"10px"}}>
            🚜 Diesel:{" "}
            {((EMISSION_FACTORS[country].diesel * diesel * 12) / 1000).toFixed(
              2
            )}{" "}
            tonnes CO2 per year
          </Alert>
          <Alert severity="info" style={{margin:"10px"}}>
            💡 Electricity:{" "}
            {(
              (EMISSION_FACTORS[country].Electricity * electricity * 12) /
              1000
            ).toFixed(2)}{" "}
            tonnes CO2 per year
          </Alert>
          <Alert severity="info" style={{margin:"10px"}}>
            🌱 Nitrogen(N):{" "}
            {(
              (EMISSION_FACTORS[country].Nitrogen * nitrogen * 12) /
              1000
            ).toFixed(2)}{" "}
            tonnes CO2 per year
          </Alert>
          <Alert severity="info" style={{margin:"10px"}}>
            🌱 Parali:{" "}
            {(
              (EMISSION_FACTORS[country].Parali * parali * 1000) /
              1000
            ).toFixed(2)}{" "}
            tonnes CO2 per year
          </Alert>
          <Alert severity="success" style={{margin:"10px"}}>
            🌍 Your total carbon footprint is: {totalEmissions} tonnes CO2 per
            year
          </Alert>
          {/* <Alert severity="warning">In 2023, CO2 emissions per capita for India was around 2 tons of CO2 per capita. Between 1972 and 2023, CO2 emissions per capita of India grew substantially from 0.39 to 1.9 tons of CO2 per capita rising at an increasing annual rate that reached a maximum of 9.41% in 2023.</Alert> */}

          <p
            style={{
              backgroundColor: "green",
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              margin: "10px",
              padding: "20px",
              borderRadius: "7px",
            }}
          >
            Due to the use of our ONDC MARKETPLACE you have reduced {parali}{" "}
            tonn of CO2 and gained {parali} CARBON CREDITS
          </p>
        </Box>
      )}
    </Container>
  );
};

export default Carbonfootprints;