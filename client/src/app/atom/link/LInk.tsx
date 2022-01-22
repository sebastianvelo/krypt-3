import { FunctionComponent } from "react";

export interface LinkProps {
    path: string;
    children: React.ReactNode | React.ReactNode[];
}

const Link: FunctionComponent<LinkProps> = (props: LinkProps) => (
    <a className="text-xl font-bold opacity-50 hover:opacity-100 transition-all duration-300" href={props.path}>{props.children}</a>
);

export default Link;