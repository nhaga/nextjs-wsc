import React from 'react'
import { ethers } from "ethers";
import VendingMachineABI from "../abi/VendingMachine.json";
import Link from "next/link";
import {
    ConnectWSCButton,
    TransactionConfigWSCProvider,
    useWSCProvider
  } from "milkomeda-wsc-ui-test-beta";
import { useAccount } from "wagmi";




const TOKEN = "0x5fA38625dbd065B3e336e7ef627B06a8e6090e8F"
const VENDING_MACHINE = "0xE7a39cF061b4Ea39aa534E4F1697AB1696E32349"


function TokenComponent() {
    const { address: account } = useAccount();
    const { isWSCConnected } = useWSCProvider();

    const wscOptions = {
        titleModal: "Buy Token",
        defaultWrapToken: {
          unit: "lovelace", 
          amount: "1000",
        },
        defaultUnwrapToken: {
          unit: TOKEN,
          amount: "1000000", // amountUnscaled
        },
        evmTokenAddress: TOKEN,
        evmContractRequest: {
          address: VENDING_MACHINE,
          abi: VendingMachineABI.abi,
          functionName: "buyTokens",
          args: [],
          overrides: {
            value: "1000000",
          },
        },
      }    

  return (
    <>
    <TransactionConfigWSCProvider options={wscOptions}>
      Account: { account }
    <ConnectWSCButton />

    </TransactionConfigWSCProvider>
          {isWSCConnected && <><Link href="/wsc-interface">Check WSC Interface</Link><Link href="/wsc-lib">WSC Lib</Link></>}          
    </>
)}

export default TokenComponent