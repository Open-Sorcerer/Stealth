const getTokensByOwner = async (owner: string) => {
  const url = `https://api.helius.xyz/v0/addresses/${owner}/balances?api-key=${process.env.NEXT_PUBLIC_HELIUS_API}`;
  // const token_url = `https://api.helius.xyz/v0/token-metadata?api-key=${process.env.NEXT_PUBLIC_HELIUS_API}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log("balances: ", data);

  // filter the above supportedTokenAddresses in the data we got and the native balance

  // const supportedTokenAddresses = [
  //   "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU", // USDC
  //   "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB", // USDT
  //   "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263", // bonk
  // ];
  const supportedTokenAddressesMetadata: Record<string, {
    address: string;
    tokenName: string;
    imageURI: string;
  }> = {
    // Solana: {
    //   address: "native",
    //   tokenName: "Sol",
    //   imageURI:
    //     "https://images.xnftdata.com/cdn-cgi/image/fit=crop,width=100,height=100,quality=85/https://assets.coingecko.com/coins/images/4128/large/solana.png",
    // },
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
  };

  const supportedTokens: Record<string, any> = {};
  supportedTokens["Sol"] = {
    tokenName: "Sol",
    imageURI:
      "https://images.xnftdata.com/cdn-cgi/image/fit=crop,width=100,height=100,quality=85/https://assets.coingecko.com/coins/images/4128/large/solana.png",
    amount: data.nativeBalance,
    decimals: 9
  }
  
  for (const tokenName in supportedTokenAddressesMetadata) {
    const tokenAddress = supportedTokenAddressesMetadata[tokenName].address;
    const matchingToken = data.tokens.find((token: any) => token.mint === tokenAddress);
    if (matchingToken) {
      supportedTokens[tokenName] = {
        ...matchingToken,
        ...supportedTokenAddressesMetadata[tokenName]
      };
    }
  }

  console.log("Supported Tokens:", supportedTokens);
  return supportedTokens;
};

export default getTokensByOwner;
