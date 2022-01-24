import ConnectWallet from "app/components/shared/connect-wallet/ConnectWallet";
import StyleProps from "common/entities/tailwind/StyleProps";
import { FunctionComponent } from "react";
import KeywordCard, { KeywordCardProps } from "./keywords-card/KeywordsCard";
import Welcome, { WelcomeProps } from "./welcome/Welcome";

export interface InfoSectionProps extends StyleProps {
    welcome: WelcomeProps;
    keywords: KeywordCardProps;
}

const InfoSection: FunctionComponent<InfoSectionProps> = (props: InfoSectionProps) => (
    <div className={props.style?.value}>
        <Welcome {...props.welcome} />
        <ConnectWallet />
        <KeywordCard {...props.keywords} />
    </div>
);

export default InfoSection;