import { FunctionComponent } from "react";
import AppFooter from "./view/layout/footer/AppFooter";
import AppHeader from "./view/layout/header/AppHeader";
import AppMain from "./view/layout/main/AppMain";
import model from "./model/AppModel";
import appStyle from "./style/AppStyle";

const App: FunctionComponent = () => (
    <div className={appStyle.value}>
        <div className={appStyle.children?.layout.value}>
            <AppHeader {...model.header} />
            <AppMain {...model.main} />
            <AppFooter {...model.footer} />
        </div>
    </div>
);

export default App;
