import appStyle from "app/style/AppStyle";
import { AppFooterProps } from "app/view/layout/footer/AppFooter";
import { AppHeaderProps } from "app/view/layout/header/AppHeader";
import { AppMainProps } from "app/view/layout/main/AppMain";
import landingPageModel from "./pages/landing/LandingPageModel";

interface AppModel {
    header: AppHeaderProps;
    main: AppMainProps;
    footer: AppFooterProps;
}

const model: AppModel = {
    header: {
        style: appStyle.children?.layout.children?.header,
        brand: "KRYPT",
        navigation: {
            actions: [
                {
                    children: "Home",
                    path: ""
                },
                {
                    children: "Exchange",
                    path: ""
                },
                {
                    children: "Tutorials",
                    path: ""
                },
            ]
        }
    },
    main: {
        pages: [
            landingPageModel,
        ]
    },
    footer: {

    }
}

export default model;