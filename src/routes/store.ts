import { writable } from "svelte/store"

export const products = writable(
    [
        {
            id: 1,
            name: "🔴Marlboro Nano",
            price: "1200",
            quantity: 0,
            image: "/MarlbotoRed.png",
            availability: 10,
            hidden: false,
        },
        {
            id: 2,
            name: "🔵Winston Xs",
            price: "1300",
            quantity: 0,
            image: "/WinstonXsBlue.png",

            availability: 12,
            hidden: false,
        },
        {
            id: 3,
            name: "⚫Camel Prem.",
            price: "1300",
            quantity: 0,
            availability: 12,
            image: "/CamelPremiumBlack.png",

            hidden: false,
        },
        {
            id: 4,
            name: "Parlament Nano",
            price: "1300",
            quantity: 0,
            image: "/ParlamentNanoRes.png",
            availability: 12,
            hidden: false,
        },
        {
            id: 5,
            name: "Camel comp.",
            price: "1300",
            quantity: 0,
            image: "/CamelCompact.png",
            availability: 12,
            hidden: false,
        },
        {
            id: 6,
            name: "Bond Compact Pr.",
            price: "1300",
            quantity: 0,
            image: "/BondCompactPremium.png",
            availability: 12,
            hidden: false,
        },
        {
            id: 7,
            name: "🔴Bond",
            price: "1300",
            quantity: 0,
            image: "/BondRed.png",
            availability: 12,
            hidden: false,
        },
    ]
)
export const cart = writable([])