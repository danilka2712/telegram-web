import { writable } from "svelte/store"

export const products = writable(
    [
        {
            id: 1,
            name: "Marlboro red Nano",
            price: "1200",
            quantity: 0,
            image: "/MarlbotoRed.png",
            availability: 10,
            hidden: false,
        },
        {
            id: 2,
            name: "Winston Xs Blue",
            price: "1300",
            quantity: 0,
            image: "/WinstonXsBlue.png",

            availability: 12,
            hidden: false,
        },
        {
            id: 3,
            name: "Camel Black P.",
            price: "1300",
            quantity: 0,
            availability: 12,
            image: "/CamelPremiumBlack.png",

            hidden: false,
        },
        {
            id: 4,
            name: "Mond premium",
            price: "1300",
            quantity: 0,
            image: "/MarlbotoRed.png",

            availability: 12,
            hidden: false,
        },
        {
            id: 5,
            name: "Bond blue",
            price: "1300",
            quantity: 0,
            image: "/Parlament.png",

            availability: 12,
            hidden: false,
        },
    ]
)
export const cart = writable([])