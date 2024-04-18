import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "viem";
import { optimism } from "wagmi/chains";

export const config = getDefaultConfig({
	appName: "WLD Vesting",
	projectId: "YOUR_PROJECT_ID",
	chains: [optimism],
	transports: {
		[optimism.id]: http(
			"https://optimism-mainnet.infura.io/v3/dca3b3f8ffa84b8c99987faf694cde1f",
		),
	},
	ssr: true,
});
