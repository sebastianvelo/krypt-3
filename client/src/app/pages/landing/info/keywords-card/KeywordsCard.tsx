import { FunctionComponent } from "react";
import KeywordCardRow, { KeywordCardRowProps } from "./row/KeywordCardRow";

export interface KeywordCardProps {
    rows: KeywordCardRowProps[];
}

const KeywordCard: FunctionComponent<KeywordCardProps> = (props: KeywordCardProps) => (
    <div className="flex flex-col divide-y divide-gray-700 rounded-lg bg-black bg-opacity-50 border border-gray-700 shadow-xl">
        {props.rows.map(row => <KeywordCardRow {...row} />)}
    </div>
);

export default KeywordCard;