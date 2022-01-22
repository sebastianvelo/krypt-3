import Button from "app/atom/button/Button";
import Input from "app/atom/input/Input";
import { FunctionComponent } from "react";

interface FormSendCryptoProps {

}

const FormSendCrypto: FunctionComponent<FormSendCryptoProps> = () => (
    <div className="w-full rounded-lg bg-black bg-opacity-50 p-4 space-y-4 border border-gray-800 shadow-xl">
        <Input label="Address to" type="text" />
        <Input label="Amount" type="number" />
        <Input label="Keyword" type="text" />
        <Input label="Message" type="text" />
        <Button>Send</Button>
    </div>
);

export default FormSendCrypto;