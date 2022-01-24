import Title from "app/components/atom/title/Title";
import StyleProps from "common/entities/tailwind/StyleProps";
import { FunctionComponent } from "react";

export interface WelcomeProps extends StyleProps {
    title: string;
    description: string;
}

const Welcome: FunctionComponent<WelcomeProps> = (props: WelcomeProps) => (
    <div className={props.style?.value}>
        <Title size="xl">{props.title}</Title>
        <p className={props.style?.children?.description.value}>{props.description}</p>
    </div>
);

export default Welcome;