import LineAnimation from "app/components/atom/line-animation/LineAnimation";
import StyleProps from "common/entities/tailwind/StyleProps";
import { FunctionComponent } from "react";
import Navigation, { NavigationProps } from "./navigation/Navigation";

export interface AppHeaderProps extends StyleProps {
    brand: string;
    navigation: NavigationProps;
}

const AppHeader: FunctionComponent<AppHeaderProps> = (props: AppHeaderProps) => (
    <header className={props.style?.value}>
        <LineAnimation top>
            <h1 className={props.style?.children?.brand.value}>{props.brand}</h1>
        </LineAnimation>
        <Navigation {...props.navigation} />
    </header>
);

export default AppHeader;