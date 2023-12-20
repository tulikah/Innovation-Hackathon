// @mui
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const StyledImg = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  // borderRadius: '100%',
  alignItems: 'center',
  width: theme.spacing(20),
  height: theme.spacing(10),
  justifyContent: 'center',
  // marginBottom: theme.spacing(3),
  backgroundColor: 'transparent'
}));

// ----------------------------------------------------------------------

AppWidgetSummaryProfile.propTypes = {
  color: PropTypes.string,
  img: PropTypes.any,
  sx: PropTypes.object
};

export default function AppWidgetSummaryProfile({ color = 'primary', img, sx, ...other }) {
  return (
    <Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        // borderRadius: '80%',
        backgroundColor: '#f8f9fa',

        ...sx,
      }}
      {...other}
    >
      <StyledImg>
      <img src={img}></img>
      </StyledImg>


    </Card>
  );
}
