import { config } from "@/src/config";
import { EXAMPLE_VESTING_CONTRACT, WLD_ADDRESS } from "@/src/constants";
import {
	useReadVestingWalletEnd,
	useReadVestingWalletOwner,
	useReadVestingWalletReleasable,
	useReadVestingWalletReleased,
	useReadVestingWalletStart,
	useReadVestingWalletVestedAmount,
	useWriteVestingWalletRelease,
} from "@/src/generated";
import {
	Box,
	Button,
	Container,
	Flex,
	FormControl,
	FormHelperText,
	FormLabel,
	Heading,
	Input,
	Link,
	Progress,
	Stat,
	StatGroup,
	StatLabel,
	StatNumber,
	Text,
	Tooltip,
	VStack,
} from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";
import {
	type Address,
	formatEther,
	isAddress,
	parseAbiItem,
	stringify,
} from "viem";
import { useAccount, usePublicClient } from "wagmi";

export default function Home() {
	const [vestingContractAddressInput, setVestingContractAddress] =
		useState<Address>(EXAMPLE_VESTING_CONTRACT);
	const isValidAddress = isAddress(vestingContractAddressInput);

	const vestingContractAddress = isValidAddress
		? vestingContractAddressInput
		: EXAMPLE_VESTING_CONTRACT;

	const { data, writeContractAsync } = useWriteVestingWalletRelease();

	const { data: owner } = useReadVestingWalletOwner({
		address: vestingContractAddress,
		args: [],
	});

	const { data: claimable } = useReadVestingWalletReleasable({
		address: vestingContractAddress,
		args: [WLD_ADDRESS],
	});

	const { data: claimed } = useReadVestingWalletReleased({
		address: vestingContractAddress,
		args: [WLD_ADDRESS],
	});

	const { data: totalBigInt } = useReadVestingWalletVestedAmount({
		address: vestingContractAddress,
		args: [WLD_ADDRESS, BigInt(10 ** 18)],
	});
	const total = Math.round(
		Number((totalBigInt ?? 0n) - (claimed ?? 0n)) / 10 ** 18,
	);

	const { data: startBigInt } = useReadVestingWalletStart({
		address: vestingContractAddress,
		args: [],
	});
	const start = Number(startBigInt);

	const { data: endBigInt } = useReadVestingWalletEnd({
		address: vestingContractAddress,
		args: [],
	});
	const end = Number(endBigInt);

	const now = Date.now() / 1000;
	const progress =
		start === end ? (now > start ? 100 : 0) : (now - start) / (end - start);

	const { address } = useAccount();
	const publicClient = usePublicClient({ config });
	const { data: claims } = useSWR(
		[vestingContractAddressInput, address],
		async () => {
			const logs = await publicClient?.getLogs({
				address: vestingContractAddress,
				event: parseAbiItem(
					"event ERC20Released(address indexed token, uint256 amount)",
				),
				args: {},
				fromBlock: "earliest",
				toBlock: "latest",
			});
			return logs?.filter((log) => log.args.amount !== 0n);
			// return logs;
		},
	);

	return (
		<>
			<Head>
				<title>WLD Vesting</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container maxW={"4xl"}>
				<Flex mt={10} mb={10} justify="space-between">
					<Heading>WLD Vesting</Heading>
					<ConnectButton />
				</Flex>

				<FormControl my={3}>
					<FormLabel>Vesting Contract Address</FormLabel>
					<Flex alignItems="center" justifyContent="stretch" gap={5}>
						<Input
							placeholder={"Enter vesting contract address"}
							value={vestingContractAddressInput}
							onChange={(e) =>
								setVestingContractAddress(e.target.value as Address)
							}
						/>
						<Button px={8}>Example contract</Button>
					</Flex>
				</FormControl>

				<Flex mb={10} alignItems="end" justifyContent="start" gap={1}>
					Vesting a total of
					<Text>{total.toLocaleString()} WLD</Text>
					to{" "}
					<Link
						textDecor={"underline"}
						href={`https://optimistic.etherscan.io/address/${owner}`}
					>
						{owner}
					</Link>
				</Flex>

				<Tooltip
					isDisabled={owner === address}
					label={"Please connect the owner address to claim"}
				>
					<Button
						mb={10}
						isDisabled={!(claimable && claimable > 0n)}
						colorScheme={owner !== address ? "orange" : "green"}
						onClick={() => {
							writeContractAsync({
								address: vestingContractAddress,
								args: [WLD_ADDRESS],
							});
						}}
					>
						Claim {claimable?.toString()} WLD
					</Button>
				</Tooltip>

				<Box>
					<StatGroup>
						<Stat>
							<StatLabel>Claimed</StatLabel>
							<StatNumber>
								{Number((claimed ?? 0n) / 10n ** 18n)} WLD
							</StatNumber>
						</Stat>
						<Stat>
							<StatLabel>Claimable</StatLabel>
							<StatNumber>{Number(claimable)} WLD</StatNumber>
						</Stat>
						<Stat>
							<StatLabel>Unclaimed</StatLabel>
							<StatNumber>{Number(total)} WLD</StatNumber>
						</Stat>
					</StatGroup>

					<Heading as={"h3"} fontSize={"xl"} mt={10}>
						Claims
					</Heading>
					<VStack justifyContent="start" alignItems={"start"} gap={1}>
						{claims?.map((claim) => {
							return (
								<div key={claim.blockHash}>
									{formatEther(claim.args.amount ?? 0n)} WLD in tx{" "}
									<Link
										target={"_blank"}
										href={`https://optimistic.etherscan.io/tx/${claim.transactionHash}`}
										rel="noreferrer"
										textDecor={"underline"}
									>
										{`${claim.transactionHash.slice(
											0,
											4,
										)}...${claim.transactionHash.slice(60)}`}
									</Link>
								</div>
							);
						})}
					</VStack>
				</Box>
			</Container>
		</>
	);
}
