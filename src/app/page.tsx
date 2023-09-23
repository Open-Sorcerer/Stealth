'use client'
import { NextPage } from "next";
import SendPrivately from '@components/Home/SendPrivately';
import TopUpScreen from '@components/Home/TopUpScreen';
import { useState } from 'react';

const About: NextPage = () => {
  const [toggle, setToggle] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const [recipientAddress, setRecipientAddress] = useState<string>("");
  const [topUpAmount, setTopUpAmount] = useState<number>(0);

  const handleSend = () => {
    // Harsh Noob Fills this
  }

  const handleTopUp = () => {
    // Harsh Prashant Ghodkar populates this shite
  }


  return (
    <>
    {toggle?
    <TopUpScreen toggle={toggle} setToggle={setToggle} topUpAmount={topUpAmount} setTopUpAmount={setTopUpAmount} handleSend={handleSend}/>:
    <SendPrivately toggle={toggle} setToggle={setToggle} amount={amount} setAmount={setAmount} recipientAddress={recipientAddress} setRecipientAddress={setRecipientAddress} handleTopUp={handleTopUp}/>
    }
    </>

  )
}

export default About;


