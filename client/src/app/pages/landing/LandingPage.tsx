import { FunctionComponent } from "react";
import Cards, { CardsProps } from "./cards/Cards";
import InfoSection, { InfoSectionProps } from "./info/InfoSection";
import TransferSection, { TransferSectionProps } from "./transfer/TransferSection";

interface LandingPageProps {
    info: InfoSectionProps;
    transfer: TransferSectionProps;
    cards: CardsProps;
}

const LandingPage: FunctionComponent<LandingPageProps> = (props: LandingPageProps) => (
    <div className="p-8 lg:py-16 space-y-6">
        <div className="grid lg:grid-cols-2 lg:gap-32 gap-8">
            <InfoSection {...props.info} />
            <TransferSection {...props.transfer} />
        </div>
        <Cards {...props.cards} />
    </div>
);

export default LandingPage;