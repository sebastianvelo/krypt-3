import React, { FunctionComponent, useEffect, useState } from "react";
import { ethers } from "ethers";
import { TransactionsABI, address } from "../contracts/index";

export const TransactionContext = React.createContext(0);

const { ethereum } = window as any;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(address, TransactionsABI, signer);

    console.log({
        provider,
        signer,
        transactionContract
    })
};

export const TransactionProvider = ({ children }: { children: React.ReactNode }) => (
    <TransactionContext.Provider value={4}>
        {children}
    </TransactionContext.Provider>
);