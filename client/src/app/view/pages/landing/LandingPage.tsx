import StyleProps from "common/entities/tailwind/StyleProps";
import { FunctionComponent } from "react";
import Cards, { CardsProps } from "./cards/Cards";
import InfoSection, { InfoSectionProps } from "./info/InfoSection";
import TransferSection, { TransferSectionProps } from "./transfer/TransferSection";

export interface LandingPageProps extends StyleProps {
    info: InfoSectionProps;
    transfer: TransferSectionProps;
    cards: CardsProps;
}

const LandingPage: FunctionComponent<LandingPageProps> = (props: LandingPageProps) => (
    <div className={props.style?.value}>
        <div className={props.style?.children?.top.value}>
            <InfoSection {...props.info} />
            <TransferSection {...props.transfer} />
        </div>
        <Cards {...props.cards} />
    </div>
);

export default LandingPage;