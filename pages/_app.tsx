import "../styles/globals.css";
import type { AppProps } from "next/app";

import { WagmiConfig, createClient } from "wagmi";
import {
  ConnectWSCProvider,
  getDefaultConfig,
  MilkomedaNetworkName,
} from "milkomeda-wsc-ui-test-beta";

const client = createClient(
  getDefaultConfig({
    oracleUrl: "https://wsc-server-devnet.c1.milkomeda.com",
    blockfrostId: "preprodliMqEQ9cvQgAFuV7b6dhA4lkjTX1eBLb",
    network: MilkomedaNetworkName.C1Devnet,
    cardanoWalletNames: ["flint"], // , "eternl", "nami", "nufi", "yoroi"
  })
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <ConnectWSCProvider>
        <Component {...pageProps} />
      </ConnectWSCProvider>
    </WagmiConfig>
  );
}

export default MyApp;
