import TailwindStylesheet, { styleSheet } from "common/entities/tailwind/TailwindStylesheet";

const landingPageStyle: TailwindStylesheet = styleSheet("p-8 lg:py-16 space-y-6", {
    top: styleSheet("grid lg:grid-cols-2 lg:gap-32 gap-8", {
        info: styleSheet("space-y-8 flex flex-col justify-between", {
            welcome: styleSheet("space-y-2", {
                description: styleSheet("text-xl text-gray-300")
            }),
            keywords: styleSheet("flex flex-col divide-y divide-gray-700 rounded-lg bg-black bg-opacity-50 border border-gray-700 shadow-xl")
        })
    }),
    cards: styleSheet("space-y-4", {
        cardsWrapper: styleSheet("text-left grid lg:grid-cols-2 gap-4")
    })
});

export default landingPageStyle;