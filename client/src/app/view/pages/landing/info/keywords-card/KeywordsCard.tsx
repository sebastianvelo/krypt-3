import StyleProps from "common/entities/tailwind/StyleProps";
import { FunctionComponent } from "react";
import KeywordCardRow, { KeywordCardRowProps } from "./row/KeywordCardRow";

export interface KeywordCardProps extends StyleProps {
    rows: KeywordCardRowProps[];
}

const KeywordCard: FunctionComponent<KeywordCardProps> = (props: KeywordCardProps) => (
    <div className={props.style?.value}>
        {props.rows.map(row => <KeywordCardRow {...row} />)}
    </div>
);

export default KeywordCard;