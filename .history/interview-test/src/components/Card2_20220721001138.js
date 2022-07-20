import * as React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import DomainIcon from '@mui/icons-material/Domain';
import PlaceIcon from '@mui/icons-material/Place';

export default function Card2(props) {


    return (
        <>
            <Box sx={{ flexGrow: 1,height:150 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Typography variant="h5" gutterBottom component="div" className='title2'>
                            {props.title}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            <DomainIcon fontSize="small"/> {props.function.title}  <PlaceIcon fontSize="small"/> {props.location.city},{props.location.state}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Button className='btn-round' variant="contained">Apply</Button> &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button>View</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
