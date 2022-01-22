import { FunctionComponent } from "react";
import {
    BrowserRouter, Route, Switch
} from "react-router-dom";

export interface AppMainProps {
    pages: {
        path: string;
        Component: FunctionComponent<any>;
        props: any;
    }[];
}

const AppMain: FunctionComponent<AppMainProps> = (props: AppMainProps) => (
    <main>
        <BrowserRouter>
            <Switch>
                {props.pages.map(page => (
                    <Route exact path={page.path}>
                        {<page.Component {...page.props} />}
                    </Route>
                ))}
            </Switch>
        </BrowserRouter>
    </main>
);

export default AppMain;