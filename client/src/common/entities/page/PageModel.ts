import { FunctionComponent } from "react";

interface PageModel<T> {
    props: T;
    path: string;
    Component: FunctionComponent<any>;
}

export default PageModel;