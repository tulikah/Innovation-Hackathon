import React, { useState } from 'react';
import { TextField, Button, Container, Card, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useContract } from '@thirdweb-dev/react';
import Alert, { AlertColor } from "@mui/material/Alert";
import { styled } from '@mui/system';

export default function Contribute() {
  const [alert, setAlert] = useState(<></>);

  const { data: contract } = useContract('0x767d8dDc2EEdDE385c3C12ca52351A84b5dd90bf', 'token');

  const AlertContainer = styled(Box)(
    () => `
    position: absolute;
    bottom: 10%;
    right: 10px;
    `
  );

  const alertMessage = (severity, message) => {
    return (
      <Alert
        onClose={() => {
          setAlert(<></>);
        }}
        severity={severity}
      >
        {message}
      </Alert>
    );
  };

  async function handleSubmit(event) {
    event.preventDefault();

    // Call contract

    if (contract) {
      console.log(contract)
      setAlert(
        alertMessage("info", "Sending your Tokens...")
      );
      await contract.transfer('0x946Cd80459Ddf4252403C312354fB27AAD695754', 15).then((res) => {
        setAlert(alertMessage("success", "Thank you for supporting us!"));
      });
    }
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ mb: 4 }}>
        Hi, Welcome back
      </Typography>

      <Card>
        <Box sx={{ p: 3, pb: 4 }} dir="ltr">
          <React.Fragment>
            <div style={{ margin: '10%' }}>
              <h2>Kuang Si Falls, Laos</h2>

              <ul>
                <li>
                  <b>Location:</b> Luang Prabang in Laos
                </li>
                <li>Supported by the local community and serve as a vital water source for nearby villages.</li>
                <li>
                  The communities have established community-based ecotourism initiatives, offering guided tours,
                  handicraft demonstrations, and traditional performances. The revenue generated from tourism activities
                  is reinvested in community development projects, such as education, healthcare, and infrastructure
                  improvements.
                </li>
                <li><b>Follow us: </b> <a href='https://minivanluangprabang.com/'> https://minivanluangprabang.com/</a></li>
                <li><b>Donation:</b> 10 Full Moon Tokens or More</li>
              </ul>
            </div>
            <form autoComplete="off" onSubmit={handleSubmit} style={{ margin: '10%' }}>
              <h4>Send Full Moon Tokens to Support</h4>
              <TextField label="" value='0x946Cd80459Ddf4252403C312354fB27AAD695754' variant="outlined" color="secondary" sx={{ mb: 3 }} fullWidth disabled/>
              <TextField label="Tokens" variant="outlined" color="secondary" fullWidth sx={{ mb: 3 }} />
              <Button variant="outlined" color="secondary" type="submit">
                Send Tokens
              </Button>
              <AlertContainer>{alert}</AlertContainer>
            </form>
          </React.Fragment>
        </Box>
      </Card>
    </Container>
  );
}
