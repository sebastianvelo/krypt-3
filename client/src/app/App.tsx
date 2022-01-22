import { FunctionComponent } from "react";
import AppFooter, { AppFooterProps } from "./layout/footer/AppFooter";
import AppHeader, { AppHeaderProps } from "./layout/header/AppHeader";
import AppMain, { AppMainProps } from "./layout/main/AppMain";
import LandingPage from "./pages/landing/LandingPage";

interface AppModel {
    header: AppHeaderProps;
    main: AppMainProps;
    footer: AppFooterProps;
}

const appModel: AppModel = {
    header: {
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
            {
                path: "/",
                Component: LandingPage,
                props: {
                    info: {
                        welcome: {
                            title: "Send Crypto across the world",
                            description: "Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto."
                        },
                        keywords: {
                            rows: [
                                {
                                    items: ["Relability", "Security", "Ethereum"],
                                },
                                {
                                    items: ["Web 3.0", "Low fees", "Blockchain"],
                                }
                            ]
                        }
                    },
                    transfer: {
                        title: "Transfer now"
                    },
                    cards: {
                        title: "Services that we continue to improve",
                        items: [
                            {
                                image: "https://picsum.photos/200",
                                title: "Title",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            },
                            {
                                image: "https://picsum.photos/200",
                                title: "Title",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            },
                            {
                                image: "https://picsum.photos/200",
                                title: "Title",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            },
                            {
                                image: "https://picsum.photos/200",
                                title: "Title",
                                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                            },
                        ]
                    }
                }
            }
        ]
    },
    footer: {

    }
}

const App: FunctionComponent = () => (
    <div className="bg-gradient-to-tl from-primary-900 via-secondary-900 to-black min-h-screen flex justify-center">
        <div className="md:1/2 2xl:w-3/4">
            <AppHeader {...appModel.header} />
            <AppMain {...appModel.main} />
            <AppFooter {...appModel.footer} />
        </div>
    </div>
);

export default App;
