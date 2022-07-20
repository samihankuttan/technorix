import './App.css';
import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';


import { APIS } from './apiconstants/APIURLS';

import InputBox from './components/InputBox';

function App() {
  const [values, setValues] = React.useState({
    searchInput: '',
    allJobs:[]
  });

  useEffect(() => {
    getAllJobs();  
  },[]);


  const getAllJobs = () => {
    try {
      fetch(APIS.getAllJobs)
        .then(res => res.json())
        .then((result) => {
            console.log("result > ", result)
            setValues({ ...values, ['allJobs']: result });
            sortByDepartments(result);
          },
          (error) => {
            console.log("error > ", error)
          }
        )
    } catch (ex) { }
  }

const sortByDepartments=(list)=>{
  try{
    let departments=[];
    for(let item of list){
      departments=[...departments,{
        department:item.department
      }];
    }
    let Departments = departments.filter( (ele, ind) => ind === departments.findIndex( elem => elem.department.id === ele.department.id))
    console.log("Departments > ", Departments) 

    for(let department of Departments){
      let arr=[];
      for(let job of list){
        if(job.department.id===department.id){}
      }
    }
    


  }catch(ex){
    console.log("ex > ", ex)
  }
}


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };



  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <div style={{ height: 20 }}>&nbsp;</div>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography variant="h3" gutterBottom component="div" className='title1'>
                  Current Openings
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <InputBox
                  id="search-input"
                  type="text"
                  placeholder="Search Openings"
                  value={values.searchInput}
                  onChange={handleChange('searchInput')}
                  onClick={null}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    T3
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4}>
                    T4
                  </Grid>
                </Grid>
              </Grid>
            </Grid>


          </Grid>
          <Grid item xs={12} sm={12} md={2} lg={2}></Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
