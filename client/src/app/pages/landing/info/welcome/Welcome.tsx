import Title from "app/atom/title/Title";
import { FunctionComponent } from "react";

export interface WelcomeProps {
    title: string;
    description: string;
}

const Welcome: FunctionComponent<WelcomeProps> = (props: WelcomeProps) => (
    <div className="space-y-2">
        <Title size="xl">{props.title}</Title>
        <p className="text-xl text-gray-300">{props.description}</p>
    </div>
);

export default Welcome;