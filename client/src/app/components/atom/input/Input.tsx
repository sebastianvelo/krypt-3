import { styleSheet } from "common/entities/tailwind/TailwindStylesheet";
import { FunctionComponent } from "react";

const style = styleSheet("", {
    label: styleSheet("text-white text-sm font-bold"),
    input: styleSheet("bg-secondary-900 w-full px-2 py-1 rounded-md focus:border-none focus:outline-none text-white hover:bg-secondary-800 focus:bg-secondary-800 transition-all duration-200")
})

interface InputProps {
    label: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => (
    <div>
        <label className={style.children?.label.value}>{props.label}</label>
        <input className={style.children?.input.value} onChange={props.onChange} type={props.type} />
    </div >
);

export default Input;