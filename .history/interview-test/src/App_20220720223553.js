import './App.css';
import {Box,Grid,Typography} from '@mui/material';

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>

            <Typography variant="h2" gutterBottom component="div">
            Current Openings
            </Typography>

          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
