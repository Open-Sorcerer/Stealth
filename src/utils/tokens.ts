const getTokensByOwner = async (owner: string) => {
  const url = `https://api.helius.xyz/v0/addresses/${owner}/balances?api-key=${process.env.NEXT_PUBLIC_HELIUS_API}`;
  const token_url = `https://api.helius.xyz/v0/token-metadata?api-key=${process.env.NEXT_PUBLIC_HELIUS_API}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log("balances: ", data);

  const supportedTokenAddresses = [
    "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU", // USDC
    "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", // USDT
    "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263", // bonk
  ];

  // filter the above supportedTokenAddresses in the data we got and the native balance

  const supportedTokenAddressesMetadata = {
    USDC: {
      address: "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU",
      tokenName: "USDC",
      imageURI:
        "https://images.xnftdata.com/cdn-cgi/image/fit=crop,width=400,height=400,quality=85/https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
    },
    USDT: {
      address: "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
      tokenName: "USDT",
      imageURI:
        "https://images.xnftdata.com/cdn-cgi/image/fit=crop,width=400,height=400,quality=85/https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg",
    },
    Bonk: {
      address: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
      tokenName: "Bonk",
      imageURI:
        "https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I",
    },
    Solana: {
      tokenName: "Sol",
      imageURI:
        "https://images.xnftdata.com/cdn-cgi/image/fit=crop,width=100,height=100,quality=85/https://assets.coingecko.com/coins/images/4128/large/solana.png",
    },
  };
};

export default getTokensByOwner;
