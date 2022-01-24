import { FunctionComponent } from "react";

export interface CardProps {
    image: string;
    title: string;
    description: string;
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => (
    <div className="bg-black text-white bg-opacity-50 p-4 border border-gray-700 rounded-2xl flex flex-col space-y-2 items-center shadow-lg lg:flex-row lg:space-x-4">
        <img className="h-20 w-20 lg:h-24 lg:w-24 rounded-full ring-2 ring-offset-4 ring-offset-black ring-opacity-50" src={props.image} alt={props.title} />
        <div className="space-y-2 flex flex-col justify-between">
            <h2 className="text-3xl font-black">{props.title}</h2>
            <p>{props.description}</p>
        </div>
    </div>
);

export default Card;