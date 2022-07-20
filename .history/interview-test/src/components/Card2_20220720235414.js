import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';

export default function Card2(props) {


    return (
        <>
            <Box sx={{ flexGrow: 1,marginBottom:5 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="h3" gutterBottom component="div" className='title1'>
                           {props.title}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
