import TailwindStylesheet, { styleSheet } from "common/entities/tailwind/TailwindStylesheet";

const appStyle: TailwindStylesheet = styleSheet("bg-gradient-to-tr from-primary-900 via-secondary-900 to-black min-h-screen flex justify-center", {
    layout: styleSheet("md:1/2 2xl:w-3/4", {
        header: styleSheet("flex flex-col md:flex-row justify-between items-center px-4 text-white md:py-2", {
            brand: styleSheet("text-4xl font-black tracking-widest")
        })
    })
});

export default appStyle;