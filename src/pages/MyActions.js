import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import tree from '../utils/images/tree-img.jpg';
import man from '../utils/images/man.jpg';
import bee from '../utils/images/bee.jpg';
import treeVid from '../utils/images/treeVid.jpg'
import waterfall from '../utils/images/waterfall.jpg'
import waterfall_vid from '../utils/images/waterfall_video.mp4'
import icons from '../utils/images/icons.jpg'
import Button from '@mui/material/Button';
// components
// sections
import {
  AppCurrentVisitsProfile,
  AppWidgetSummaryProfile,
  AppWebsiteVisitsProfile
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function MyActions() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> My Actions | TheiaSphere </title>
      </Helmet>

      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummaryProfile img={tree}/>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummaryProfile img={man} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummaryProfile img={bee} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummaryProfile img={tree} />
          </Grid>
    
          <Grid item xs={16} md={0} lg={0}>
            <AppWebsiteVisitsProfile
              title="My Tree"
              subheader="Adoption"
              img={treeVid}
              source=''
              video={false}
            />
          </Grid>

          <Grid item xs={16} md={0} lg={0}>
            <AppWebsiteVisitsProfile
              title="Waterfall"
              subheader="Support"
              img=''
              source={waterfall_vid}
              video={true}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
