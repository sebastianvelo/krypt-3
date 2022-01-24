import landingPageStyle from "app/style/pages/landing/LandingPageStyle";
import LandingPage, { LandingPageProps } from "app/view/pages/landing/LandingPage";
import PageModel from "common/entities/page/PageModel";

const model: PageModel<LandingPageProps> = {
    path: "/",
    Component: LandingPage,
    props: {
        style: landingPageStyle,
        info: {
            style: landingPageStyle.children?.top.children?.info,
            welcome: {
                style: landingPageStyle.children?.top.children?.info.children?.welcome,
                title: "Send Crypto across the world",
                description: "Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto."
            },
            keywords: {
                style: landingPageStyle.children?.top.children?.info.children?.keywords,
                rows: [
                    {
                        items: ["Relability", "Security", "Ethereum"],
                    },
                    {
                        items: ["Web 3.0", "Low fees", "Blockchain"],
                    }
                ]
            },
        },
        transfer: {
            title: "Transfer now"
        },
        cards: {
            style: landingPageStyle.children?.cards,
            title: "Services that we continue to improve",
            items: [
                {
                    image: "https://picsum.photos/200",
                    title: "Title",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    image: "https://picsum.photos/210",
                    title: "Title",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    image: "https://picsum.photos/220",
                    title: "Title",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    image: "https://picsum.photos/230",
                    title: "Title",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
            ]
        }
    }
}

export default model;