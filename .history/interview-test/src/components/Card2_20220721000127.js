import * as React from 'react';
import { Box, Grid, Typography,Button } from '@mui/material';

export default function Card2(props) {


    return (
        <>
            <Box sx={{ flexGrow: 1}}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={8} lg={8}>
                        <Typography variant="h5" gutterBottom component="div" className='title2'>
                           {props.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Button variant="contained">Apply</Button> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button>View</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
