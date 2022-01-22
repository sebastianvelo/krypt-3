import TailwindStyle from "common/entities/tailwind/TailwindStyle";
import { FunctionComponent } from "react";

interface TitleProps {
    size?: "m" | "l" | "xl";
    children: React.ReactNode | React.ReactNode[];
}

const style = (props: TitleProps) => TailwindStyle.builder()
    .add("text-white font-black")
    .addIf("text-2xl sm:text-3xl 2xl:text-4xl", props.size === "m")
    .addIf("text-3xl sm:text-4xl 2xl:text-5xl", !props.size || props.size === "l")
    .addIf("text-4xl sm:text-5xl 2xl:text-6xl", props.size === "xl")
    .get();

const Title: FunctionComponent<TitleProps> = (props: TitleProps) => (
    <h1 className={style(props)}>{props.children}</h1>
);

export default Title;