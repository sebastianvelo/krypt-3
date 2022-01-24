import { FunctionComponent } from "react";

interface KeywordCardRowItemProps {
    children: React.ReactNode | React.ReactNode[];
}

const KeywordCardRowItem: FunctionComponent<KeywordCardRowItemProps> = (props: KeywordCardRowItemProps) => (
    <p className="p-4 w-full">{props.children}</p>
);

export default KeywordCardRowItem;