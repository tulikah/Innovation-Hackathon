import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const news = [
    'Norway to Mandate Solar Power for New Government Buildings from 2024',
    'EU Commission Takes Further Steps to Boost Investment for a Sustainable Future',
    'China Baowu and Rio Tinto Extend Climate Partnership to Decarbonize the Steel Value Chain',
    'BMC 2023 Corporate Citizenship and Environmental Social Governance Report Outlines Progress in Corporate Social Responsibility',
    'Eni Signs MoU for New Initiatives Related to the Energy Transition in Libya'
  ];

  return (
    <>
      <Helmet>
        <title> My Dashboard |  TheiaSphere </title>
      </Helmet>

      <Container maxWidth="md">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Full Moon" total={65} icon={'vaadin:moon'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Half Moon" total={10} color="info" icon={'bi:moon-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Crescent" total={20} color="warning" icon={'entypo:moon'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="New Moon" total={13} color="error" icon={'logos:moon'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Overall ESG Statistics"
              subheader="(+20%) than last year"
              chartLabels={[
                '01/01/2023',
                '02/01/2023',
                '03/01/2023',
                '04/01/2023',
                '05/01/2023',
                '06/01/2023',
                '07/01/2022',
                '08/01/2022',
                '09/01/2022',
                '10/01/2022',
                '11/01/2022',
              ]}
              chartData={[
                {
                  name: 'You',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'EY',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                }
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Your Score"
              chartData={[
                { label: 'Environment', value: 4344 },
                { label: 'Social', value: 5435 },
                { label: 'Governance', value: 4443 },
                { label: 'Others', value: 1443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Personal ESG Growth"
              subheader="(+34%) than last month"
              chartData={[
                { label: 'Recycling habits', value: 400 },
                { label: 'Teaching & Learnings', value: 430 },
                { label: 'Investing', value: 448 },
                { label: 'Dietary Choices', value: 470 },
                { label: 'Energy Usage', value: 540 },
                { label: 'Sustainable Clothing choice', value: 580 },
                { label: 'Utilities', value: 690 },
                { label: 'Electricity', value: 1100 },
                { label: 'Gas', value: 1200 },
                { label: 'Business Travel', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Engagement logs past month"
              chartLabels={['Eng1', 'Eng2', 'Eng3', 'Eng4', 'Eng5', 'Eng6']}
              chartData={[
                { name: 'Environment', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Social', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Governance', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="Regulatory news by ESG"
              list={news.map((data) => ({
                id: 0,
                title: '',
                description: data,
                image: `/assets/images/covers/cover_${news.length - 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
          <AppCurrentVisits
              title="Your Travel Data for the Past Month"
              chartData={[
                { label: 'Car', value: 4344 },
                { label: 'Walk', value: 5435 },
                { label: 'Ground', value: 4443 },
                { label: 'Air', value: 1443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 2348,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 400,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 3560,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 4839,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Separate Recycle Trash' },
                { id: '2', label: 'Travel plans' },
                { id: '3', label: 'Plant a tree for birthday this month ' },
                { id: '4', label: 'Research for eco-friendly products' },
                { id: '5', label: 'Update New Goals' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
