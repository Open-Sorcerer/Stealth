import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import getTokensByOwner from "@utils/tokens";
import { useWallet } from "@hooks/useWallet";
import axios from "axios";

const useTokens = (reload?: number) => {
  const [tokens, setTokens] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { publicKey } = useWallet();
  const { connection } = useConnection();

  useEffect(() => {
    const fetchTokens = async () => {
      setLoading(true);
      setError(false);

      try {
        let tokens = (await getTokensByOwner(publicKey!.toBase58()))

        console.log("filtered: ", tokens);
        const supportedTokensArray = Object.keys(tokens).map((tokenName) => {
          const tokenData = tokens[tokenName];
          return {
            ...tokenData,
          };
        });

        setTokens(supportedTokensArray);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };

    if (publicKey) {
      console.log("Fetching Tokens");
      fetchTokens();
    }
  }, [connection, publicKey, reload]);

  return { tokens, loading, error };
};

export default useTokens;