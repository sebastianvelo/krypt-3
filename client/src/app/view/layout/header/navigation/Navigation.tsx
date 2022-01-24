import LineAnimation from "app/components/atom/line-animation/LineAnimation";
import Link, { LinkProps } from "app/components/atom/link/LInk";
import { Hamburger } from "app/components/atom/svg/Svg";
import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import useToggle from "common/hooks/useToggle";
import { FunctionComponent } from "react";

export interface NavigationProps {
    actions: LinkProps[];
}

const navStyle = (isOpen: boolean) => TailwindStyle.builder()
    .add("flex flex-col md:flex-row")
    .add("absolute md:relative top-0")
    .add("space-y-4 md:space-x-8 md:space-y-0")
    .add("w-full md:w-auto")
    .add("p-4 md:p-0")
    .add("bg-black bg-opacity-95 md:bg-transparent")
    .add("transition-all duration-300")
    .add("md:opacity-100")
    .addIf("opacity-100", isOpen)
    .addIf("opacity-0", !isOpen)
    .get();

const Navigation: FunctionComponent<NavigationProps> = (props: NavigationProps) => {
    const [isOpen, toggle] = useToggle();
    return (
        <>
            <button className="flex absolute top-1 right-1 md:hidden z-10 text-white" onClick={toggle}>
                <Hamburger />
            </button>
            <nav className={navStyle(isOpen)}>
                {props.actions.map(action => (
                    <LineAnimation>
                        <Link {...action} />
                    </LineAnimation>
                ))}
            </nav>
        </>
    )
};

export default Navigation;