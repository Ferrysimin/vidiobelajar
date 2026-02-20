/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                'navbar': '4px 8px 12px 0px #3E434A26'
            },
            fontFamily: {
                lato: ["Lato", "sans-serif"],
                sans: ["DM Sans", "sans-serif"],
            },
            colors: {
                primary: {
                    DEFAULT: "#3ECF4C",
                    400: "#6BE26B",
                    300: "#94F08B",
                    200: "#C0FAB4",
                    100: "rgba(226, 252, 217, 0.8)"
                },
                secondary: {
                    DEFAULT: "#FFBD3A",
                    400: "#FFD26B",
                    300: "#FFDF88",
                    200: "#FFECB0",
                    100: "rgba(255, 247, 215, 0.8)"
                },
                tertiary: {
                    DEFAULT: "#F64920",
                    400: "#F98256",
                    300: "#FCA578",
                    200: "#FECAA5",
                    100: "rgba(254, 232, 210, 0.8)"
                },
                text: {
                    dark: {
                        primary: "#222325",
                        secondary: "rgba(51, 51, 51, 0.68)",
                        disabled: "rgba(58, 53, 65, 0.38)"
                    },
                    light: {
                        primary: "#FFFFFF",
                        secondary: "#C1C2C4",
                        disabled: "#9D9EA1"
                    }
                },
                other: {
                    background: {
                        primary: "#FFFFFF",
                        base: "#F4F5FA",
                        secondary: "#F9FAFC"
                    },
                    border: "rgba(58, 53, 65, 0.12)"
                },
                info: {
                    DEFAULT: "#0980E2",
                    pressed: "#044AA2",
                    hover: "#0663C2",
                    background: "#EBF9FE"
                },
                success: {
                    DEFAULT: "#38D189",
                    pressed: "#1C9675",
                    hover: "#28B380",
                    background: "#E0FDDF"
                },
                warning: {
                    DEFAULT: "#FCE91B",
                    pressed: "#B5A40D",
                    hover: "#D8C613",
                    background: "#FCF8CA"
                },
                error: {
                    DEFAULT: "#FF5C2B",
                    pressed: "#B72315",
                    hover: "#DB3D1F",
                    background: "#FCE3D1"
                },
                card: "rgba(0, 0, 0, 0.8)"
            }
        },
    },
    plugins: [],
};
