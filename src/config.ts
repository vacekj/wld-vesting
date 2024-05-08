import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { http } from "viem";
import { optimism } from "wagmi/chains";

export const config = getDefaultConfig({
	appName: "WLD Vesting",
	projectId: "YOUR_PROJECT_ID",
	chains: [optimism],
	transports: {
		[optimism.id]: http(
			"https://opt-mainnet.g.alchemy.com/v2/B7L75BbBgi5gKJqq-rcsrI20LwyCB6jr",
		),
	},
	ssr: true,
});
