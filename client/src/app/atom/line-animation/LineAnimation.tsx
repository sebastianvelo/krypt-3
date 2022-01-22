import { FunctionComponent } from "react";

interface LineProps {
    color?: string;
}

interface LineAnimationProps extends LineProps {
    children?: React.ReactNode | React.ReactNode[];
    top?: boolean;
}

const Line = (props: LineProps) => <span className={`${props.color ?? "bg-primary-500"} w-0 group-hover:w-full transition-all duration-300 h-px`}></span>;

const LineAnimation: FunctionComponent<LineAnimationProps> = (props: LineAnimationProps) => (
    <div className="flex flex-col items-center group">
        {props.top && <Line {...props} />}
        {props.children}
        {!props.top && <Line {...props} />}
    </div>
);

export default LineAnimation;