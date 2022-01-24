import Button from "app/components/atom/button/Button";
import Input from "app/components/atom/input/Input";
import { FunctionComponent, useState } from "react";

interface FormSendCryptoProps {

}

const FormSendCrypto: FunctionComponent<FormSendCryptoProps> = () => {
    const [addressReceiver, setAddressReceiver] = useState<string>();
    const [amount, setAmount] = useState<number>();
    const [keyword, setKeyword] = useState<string>();
    const [message, setMessage] = useState<string>();

    const getContractData = () => ({
        addressReceiver, amount, keyword, message
    });

    const send = () => {
        // TODO
        const data = getContractData();
        return data;
    }

    return (
        <div className="w-full rounded-lg bg-black bg-opacity-50 p-4 space-y-4 border border-gray-800 shadow-xl">
            <Input onChange={(e) => setAddressReceiver(e.target.value)} label="Address to" type="text" />
            <Input onChange={(e) => setAmount(+e.target.value)} label="Amount" type="number" />
            <Input onChange={(e) => setKeyword(e.target.value)} label="Keyword" type="text" />
            <Input onChange={(e) => setMessage(e.target.value)} label="Message" type="text" />
            <Button onClick={send}>Send</Button>
        </div>
    )
};

export default FormSendCrypto;