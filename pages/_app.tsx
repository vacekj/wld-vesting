import { config } from "@/src/config";
import { ChakraProvider } from "@chakra-ui/react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { WagmiProvider } from "wagmi";
const queryClient = new QueryClient();
import "@rainbow-me/rainbowkit/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<WagmiProvider config={config}>
				<QueryClientProvider client={queryClient}>
					<RainbowKitProvider>
						<Component {...pageProps} />
					</RainbowKitProvider>
				</QueryClientProvider>
			</WagmiProvider>
		</ChakraProvider>
	);
}

export default MyApp;
