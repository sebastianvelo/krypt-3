import LineAnimation from "app/atom/line-animation/LineAnimation";
import { FunctionComponent } from "react";
import Navigation, { NavigationProps } from "./navigation/Navigation";

export interface AppHeaderProps {
    brand: string;
    navigation: NavigationProps;
}

const AppHeader: FunctionComponent<AppHeaderProps> = (props: AppHeaderProps) => (
    <header className="flex flex-col md:flex-row justify-between items-center px-4 text-white md:py-2">
        <LineAnimation top>
            <h1 className="text-4xl font-black tracking-widest">{props.brand}</h1>
        </LineAnimation>
        <Navigation {...props.navigation} />
    </header>
);

export default AppHeader;