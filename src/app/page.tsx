"use client";
import { NextPage } from "next";
import SendPrivately from "@components/Home/SendPrivately";
import TopUpScreen from "@components/Home/TopUpScreen";
import { useState } from "react";

export const MAINNET_RPC_URL = "https://api.mainnet-beta.solana.com";
import {
  Cluster,
  Connection,
  Keypair,
  Transaction,
  SystemProgram,
  PublicKey,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import { Elusiv, SEED_MESSAGE } from "@elusiv/sdk";
import { useSolanaConnection, usePublicKeys, Button } from "react-xnft";

const About: NextPage = () => {
  // const connection = useSolanaConnection();

  const connection = new Connection(MAINNET_RPC_URL, "confirmed");

  const [toggle, setToggle] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const [blockhash, setBlockhash] = useState("");
  const [signature, setSignature] = useState("");
  const [recipientAddress, setRecipientAddress] = useState<string>("");
  const [topUpAmount, setTopUpAmount] = useState<number>(0);

  const handleSend = () => {
    // Harsh Noob Fills this
    console.log("handleSend");
  };

  const handleTopUp = async () => {
    // Harsh Prashant Ghodkar populates this shite

    console.log("handleTopUp");

    const message = Buffer.from(SEED_MESSAGE, "utf-8");

    console.log(message);

    console.log(connection);

    // console.log(window.xnft.solana);

    // const Tx = new Transaction().add(
    //   SystemProgram.transfer({
    //     fromPubkey: window.xnft.solana.publicKey,
    //     toPubkey: new PublicKey("EBefTt9xXvoixAousPZSkYm78j71yKRWfrXwy7duw84L"),
    //     lamports: 0.01 * LAMPORTS_PER_SOL,
    //   })
    // );

    // console.log(Tx);

    // const signature = await window.xnft.solana.send(Tx);

    // const seed = await window.xnft.solana.sign(message);

    // console.log(seed);
  };

  return (
    <>
      {toggle ? (
        <TopUpScreen
          toggle={toggle}
          setToggle={setToggle}
          topUpAmount={topUpAmount}
          setTopUpAmount={setTopUpAmount}
          handleTopUp={handleTopUp}
        />
      ) : (
        <SendPrivately
          toggle={toggle}
          setToggle={setToggle}
          amount={amount}
          setAmount={setAmount}
          recipientAddress={recipientAddress}
          setRecipientAddress={setRecipientAddress}
          handleSend={handleSend}
        />
      )}
    </>
  );
};

export default About;
