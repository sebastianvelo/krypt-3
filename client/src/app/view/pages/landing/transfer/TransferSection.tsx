import Title from "app/components/atom/title/Title";
import FormSendCrypto from "app/components/shared/form-send-crypto/FormSendCrypto";
import { FunctionComponent } from "react";

export interface TransferSectionProps {
    title: string;
}

const TransferSection: FunctionComponent<TransferSectionProps> = (props: TransferSectionProps) => (
    <div className="w-full space-y-4">
        <Title>{props.title}</Title>
        <FormSendCrypto />
    </div>
);

export default TransferSection;