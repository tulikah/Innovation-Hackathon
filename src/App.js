
import '@rainbow-me/rainbowkit/styles.css';
import { ChainId, ThirdwebSDKProvider } from "@thirdweb-dev/react";
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiConfig, configureChains, createClient, useSigner } from 'wagmi';
import { polygon, polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import 'bootstrap/dist/css/bootstrap.min.css'; // import Bootstrap CSS
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';

// ----------------------------------------------------------------------

const { chains, provider } = configureChains(
  [polygonMumbai],
  [
    jsonRpcProvider({
      rpc: () => ({
        http: "https://polygon-mumbai.infura.io/v3/3b5238c5edcf453aa56c30aa0ced1a1f" // 👈 Replace this with your HTTP URL from the previous step
      }),
    })
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function ThirdwebProvider({ wagmiClient, children }) {
  const { data: signer } = useSigner();
//NEXT_PUBLIC_OPENZEPPELIN_URL=https://api.defender.openzeppelin.com/autotasks/e2b13bd2-824d-4dec-b1a2-2416c631b4e5/runs/webhook/60a384fa-d268-4d92-84c2-2b8a3090c9c3/E9BX62wB7TbMiQjuKywe72

  return (
    <ThirdwebSDKProvider
      activeChain={ChainId.Mumbai}
      signer={signer}
      queryClient={wagmiClient.queryClient}
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl: 'https://api.defender.openzeppelin.com/autotasks/e2b13bd2-824d-4dec-b1a2-2416c631b4e5/runs/webhook/60a384fa-d268-4d92-84c2-2b8a3090c9c3/E9BX62wB7TbMiQjuKywe72',
          },
        },
      }}
    >
      {children}
    </ThirdwebSDKProvider>
  );
}

export default function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
      <ThirdwebProvider wagmiClient={wagmiClient}>
        <HelmetProvider>
          <BrowserRouter>
            <ThemeProvider>
              <ScrollToTop />
              <StyledChart />
              <Router />
            </ThemeProvider>
          </BrowserRouter>
        </HelmetProvider>
        </ThirdwebProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
