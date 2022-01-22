import { FunctionComponent } from "react";

interface InputProps {
    label: string;
    type: string;
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => (
    <div>
        <label className="text-white text-sm font-bold">{props.label}</label>
        <input className="bg-secondary-900 w-full px-2 py-1 rounded-md focus:border-none focus:outline-none text-white hover:bg-secondary-800 focus:bg-secondary-800 transition-all duration-200" type={props.type} />
    </div>
);

export default Input;