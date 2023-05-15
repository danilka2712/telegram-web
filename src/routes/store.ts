import { writable } from "svelte/store"

export const products = writable(
    [
        {
            id: 1,
            name: "Bond black",
            price: "1200",
            quantity: 0,
            availability: 10,
            hidden: false,
        },
        {
            id: 2,
            name: "Bond blue",
            price: "1300",
            quantity: 0,
            availability: 12,
            hidden: false,
        },
        {
            id: 3,
            name: "Bond blue",
            price: "1300",
            quantity: 0,
            availability: 12,
            hidden: false,
        },
        {
            id: 4,
            name: "Bond blue",
            price: "1300",
            quantity: 0,
            availability: 12,
            hidden: false,
        },
        {
            id: 5,
            name: "Bond blue",
            price: "1300",
            quantity: 0,
            availability: 12,
            hidden: false,
        },
    ]
)
export const cart = writable([])