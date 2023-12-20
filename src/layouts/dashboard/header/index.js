
// import { createConfig, configureChains, useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
// import { polygonMumbai } from "wagmi/chains";
// import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
// import { InjectedConnector } from 'wagmi/connectors/injected'
import { ConnectButton } from '@rainbow-me/rainbowkit';
// @mui
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

// const { chains, publicClient } = configureChains(
//   [polygonMumbai],
//   [
//     jsonRpcProvider({
//       rpc: () => ({
//         http: "https://polygon-mumbai.infura.io/v3/3b5238c5edcf453aa56c30aa0ced1a1f" // 👈 Replace this with your HTTP URL from the previous step
//       }),
//     })
//   ]
// );

// const config = createConfig({
//   autoConnect: true,
//   publicClient,
//   connectors: [
//     new InjectedConnector({
//       chains,
//       options: {
//         name: 'Injected',
//         shimDisconnect: true,
//       },
//     })
//   ]
// })

// function Profile() {
//   const { address } = useAccount()
//   const { connect, isConnecting } = useConnect({
//     connector: new InjectedConnector(),
//   })
//   const { disconnect } = useDisconnect()
//   const { data, isError, isLoading } = useBalance({
//     address: address,
//   })

//   if (address) {
//     return (
//       <div>
//           <button className="btn btn-primary mt-3" onClick={disconnect}>Connected</button>
//       </div>)
//       // <div className="d-flex justify-content-center align-items-center vh-100">
//       //   <div className="text-center">
//           {/* <p>Connected to {address}</p>
//           <p>Balance: {data ? data.formatted : "Loading..."} ETH</p>
//           <p>Chain ID: {config ? config.lastUsedChainId : ""}</p> */}
        

//         {/* </div>
//       </div> */}
//    // )
//   }

//   if (isConnecting) {
//     return (
//       <div>
//         <p>Connecting...</p>
//       </div>
//     )
//   }


//   return (
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <button className="btn btn-primary" onClick={() => connect()}>Connect Wallet</button>
//     </div>
//   )
// }

export default function Header({ onOpenNav }) {
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          {/* <Profile /> */}
          <ConnectButton/>
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}
