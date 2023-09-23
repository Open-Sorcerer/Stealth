const getTokensByOwner = async (owner: string) => {
  const url = `https://api.helius.xyz/v0/addresses/${owner}/balances?api-key=${process.env.NEXT_PUBLIC_HELIUS_API}`;

  const response = await fetch(url);
  const data = await response.json();
  console.log("balances: ", data);
};

export default getTokensByOwner;