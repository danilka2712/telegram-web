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
            name: "🔴Bond Красный",
            price: "1300",
            quantity: 0,
            image: "/BondRed.png",
            availability: 12,
            hidden: false,
        },
        {
            id: 8,
            name: "🔵Bond синий",
            price: "1300",
            quantity: 0,
            image: "/BondBkue.png",
            availability: 12,
            hidden: false,
        },
        {
            id: 8,
            name: "Parliament aqua",
            price: "1300",
            quantity: 0,
            image: "/ParlamentAqua.png",
            availability: 12,
            hidden: false,
        },
        {
            id: 9,
            name: "🔵Parker&Simpson",
            price: "1300",
            quantity: 0,
            image: "/ParlamentAqua.png",
            availability: 12,
            hidden: false,
        },
        {
            id: 10,
            name: "🔵Sobranie",
            price: "1300",
            quantity: 0,
            image: "/SobranieBlue.png",
            availability: 12,
            hidden: false,
        },
        {
            id: 11,
            name: "Kent crystal",
            price: "1300",
            quantity: 0,
            image: "/KentKrystal.png",
            availability: 12,
            hidden: false,
        },
        {
            id: 12,
            name: "Kent Nano Silver",
            price: "1300",
            quantity: 0,
            image: "/KentSilver.png",
            availability: 12,
            hidden: false,
        },
        {
            id: 13,
            name: "Kent 8",
            price: "1300",
            quantity: 0,
            image: "/Kent8.png",
            availability: 12,
            hidden: false,
        },
        {
            id: 14,
            name: "Kent 4",
            price: "1300",
            quantity: 0,
            image: "/Kent4.png",
            availability: 12,
            hidden: false,
        },
        {
            id: 15,
            name: "LM синий",
            price: "1300",
            quantity: 0,
            image: "/LMBLUE.png",
            availability: 12,
            hidden: false,
        },
        {
            id: 16,
            name: "LM красный",
            price: "1300",
            quantity: 0,
            image: "/LMRED.png",
            availability: 12,
            hidden: false,
        },
        {
            id: 17,
            name: "🔵Петр Эталон",
            price: "1300",
            quantity: 0,
            image: "/Petr1Blue.png",
            availability: 12,
            hidden: false,
        },
        {
            id: 18,
            name: "LD синий",
            price: "1300",
            quantity: 0,
            image: "/LdBlue.png",
            availability: 12,
            hidden: false,
        },
        {
            id: 19,
            name: "LD красный",
            price: "1300",
            quantity: 0,
            image: "/ldred.png",
            availability: 12,
            hidden: false,
        },
    ]
)
export const cart = writable([])