import { FunctionComponent } from "react";

interface ButtonProps {
    children: React.ReactNode | React.ReactNode[];
    onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => (
    <button onClick={props.onClick} className="w-full bg-blue-600 hover:bg-blue-700 font-bold text-white p-2 rounded-full transition-all duration-300 shadow-xl">
        {props.children}
    </button>
);

export default Button;