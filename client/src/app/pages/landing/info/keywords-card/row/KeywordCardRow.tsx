import { FunctionComponent } from "react";
import KeywordCardRowItem from "./item/KeywordCardRowItem";

export interface KeywordCardRowProps {
    items: (React.ReactNode | React.ReactNode[])[];
}

const KeywordCardRow: FunctionComponent<KeywordCardRowProps> = (props: KeywordCardRowProps) => (
    <div className="flex text-white text-center w-full justify-evenly divide-x divide-gray-700">
        {props.items.map(item => <KeywordCardRowItem>{item}</KeywordCardRowItem>)}
    </div>
);

export default KeywordCardRow;