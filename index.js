const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "YOUR_API_KEY",
    // ...and any other configuration
  });

  const blockNumberOrHash = "15846571";

  const chain = EvmChain.ETHEREUM;

  const response = await Moralis.EvmApi.nft.getNFTTransfersByBlock({
    blockNumberOrHash,
    chain,
  });

  console.log(response.toJSON());
};

runApp();