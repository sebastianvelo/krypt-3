import Title from "app/components/atom/title/Title";
import Card, { CardProps } from "app/components/shared/card/Card";
import StyleProps from "common/entities/tailwind/StyleProps";
import { FunctionComponent } from "react";

export interface CardsProps extends StyleProps {
    title: string
    items: CardProps[];
}

const Cards: FunctionComponent<CardsProps> = (props: CardsProps) => (
    <div className={props.style?.value}>
        <Title>{props.title}</Title>
        <div className={props.style?.children?.cardsWrapper.value}>
            {props.items.map(card => <Card {...card} />)}
        </div>
    </div>
);

export default Cards;