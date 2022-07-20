import * as React from 'react';
import { Box, Grid, Typography, Button,Chip } from '@mui/material';
import DomainIcon from '@mui/icons-material/Domain';
import PlaceIcon from '@mui/icons-material/Place';

export default function Card2(props) {


    return (
        <>
            <Box sx={{ flexGrow: 1 }} className="list-box">
                <Grid container spacing={1} className="list-margin">
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Typography variant="h5" gutterBottom component="div" className='title3'>
                            {props.title}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div"  className='subtitle1'>
                        <Chip label={props.type} />
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div"  className='subtitle1'>
                            <DomainIcon fontSize="small"/> {props.function.title}  <PlaceIcon fontSize="small"/> {props.location.city},{props.location.state}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                        <Button className='btn-round' variant="contained">Apply</Button> &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button>View</Button>
                    </Grid>
                </Grid>
            </Box>
            <br/>
        </>
    );
}
