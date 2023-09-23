'use client'
import { NextPage } from "next";
import SendPrivately from '@components/Home/SendPrivately';
import TopUpScreen from '@components/Home/TopUpScreen';
import { useState } from 'react';

const About: NextPage = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
    {toggle?
    <TopUpScreen toggle={toggle} setToggle={setToggle}/>:
    <SendPrivately toggle={toggle} setToggle={setToggle}/>
    }
    </>

  )
}

export default About;


