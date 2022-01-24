interface TailwindStylesheetChildren {
    [key: string]: TailwindStylesheet;
}

interface TailwindStylesheet {
    value?: string;
    children?: TailwindStylesheetChildren;
}

export const styleSheet = (value?: string, children?: TailwindStylesheetChildren): TailwindStylesheet => ({
    value,
    children
})

export default TailwindStylesheet;