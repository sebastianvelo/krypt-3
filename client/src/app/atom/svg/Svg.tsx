import { FunctionComponent } from "react";

interface SvgProps {
    className?: string;
    d: string;
}

const Svg: FunctionComponent<SvgProps> = (props: SvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={props.className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={props.d} />
    </svg>
);

export default Svg;

export const Hamburger = () => <Svg className="h-8 w-8" d="M4 6h16M4 12h16M4 18h16" />