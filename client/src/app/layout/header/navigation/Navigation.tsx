import LineAnimation from "app/atom/line-animation/LineAnimation";
import Link, { LinkProps } from "app/atom/link/LInk";
import { FunctionComponent } from "react";

export interface NavigationProps {
    actions: LinkProps[];
}

const Navigation: FunctionComponent<NavigationProps> = (props: NavigationProps) => (
    <nav className="flex flex-col p-4 bg-black bg-opacity-95 w-full absolute top-0 space-y-4 md:relative md:flex-row md:bg-transparent md:space-x-8 md:w-auto md:p-0 md:space-y-0">
        {props.actions.map(action => (
            <LineAnimation>
                <Link {...action} />
            </LineAnimation>
        ))}
    </nav>
);

export default Navigation;