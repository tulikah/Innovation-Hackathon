import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';
// @mui
import { Card, CardHeader, Box, imageListItemClasses } from '@mui/material';
import Button from '@mui/material/Button';
import { Link, useNavigate, Redirect } from 'react-router-dom';
import Contribute from '../../../components/actions/contribute';
import { useState } from 'react';
import ReactPlayer from 'react-player'

// components

// ----------------------------------------------------------------------

AppWebsiteVisitsProfile.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  img: PropTypes.any,
  source: PropTypes.any,
  video: PropTypes.any
};


export default function AppWebsiteVisitsProfile({ title, subheader, img, source, video, ...other }) {

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} style={{ display: 'inline-block', marginRight: '65%' }} />
      <Button style={{ marginBottom: '30px' }} variant="outlined">
       <Link to={'/dashboard/contribute'}>Know More</Link> 
      </Button>
      <Box sx={{ p: 3, pb: 4 }} dir="ltr">
       {video===true ? 
       <video controls autoPlay loop muted style={{ margin: '0 auto', width: '670px' }}>
        <source src={source} type="video/mp4"></source>
       </video> : <img style={{ margin: '0 auto', width: '670px' }} src={img}></img>}
      </Box>
    </Card>
  );
}
