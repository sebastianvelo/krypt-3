import ConnectWallet from "app/components/connect-wallet/ConnectWallet";
import { FunctionComponent } from "react";
import KeywordCard, { KeywordCardProps } from "./keywords-card/KeywordsCard";
import Welcome, { WelcomeProps } from "./welcome/Welcome";

export interface InfoSectionProps {
    welcome: WelcomeProps;
    keywords: KeywordCardProps;
}

const InfoSection: FunctionComponent<InfoSectionProps> = (props: InfoSectionProps) => (
    <div className="space-y-8 flex flex-col justify-between">
        <Welcome {...props.welcome} />
        <ConnectWallet />
        <KeywordCard {...props.keywords} />
    </div>
);

export default InfoSection;