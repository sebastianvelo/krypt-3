import Title from "app/atom/title/Title";
import Card, { CardProps } from "app/components/card/Card";
import { FunctionComponent } from "react";

export interface CardsProps {
    title: string
    items: CardProps[];
}

const Cards: FunctionComponent<CardsProps> = (props: CardsProps) => (
    <>
        <Title>{props.title}</Title>
        <div className="text-left grid lg:grid-cols-2 gap-4">
            {props.items.map(card => <Card {...card} />)}
        </div>
    </>
);

export default Cards;