<script lang="ts">
    import Cart from "$lib/svg/Cart.svelte";
    import { onMount } from "svelte";
    import { cart, products } from "./store";
    let firstName: string = "";
    let quantity = 1;

    onMount(() => {
        const tgApp = window.Telegram.WebApp;

        tgApp.onEvent("mainButtonClicked", sendTelegramData);
    });
    const dataToSend = [
        {
            name: "John",
            age: 30,
            email: "john@example.com",
        },
    ];

    function sendTelegramData() {
        const tgApp = window.Telegram.WebApp;
        tgApp.sendData(JSON.stringify(dataToSend));
        setTimeout(() => {
            tgApp.expand();
        }, 2000);
    }
    function toggleMainButton(product) {
        const existingItem = $cart.find((item) => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
            $cart = $cart;
        } else {
            product.quantity = 1;
            $cart = [...$cart, product];
        }

        if ($cart.length > 0) {
            const tgApp = window.Telegram.WebApp;
            tgApp.MainButton.show();
            tgApp.MainButton.setParams({
                text: `В корзине (${getTotalQuantity()})`,
                color: "#0ea5e9",
            });
        }
    }

    function getTotalQuantity() {
        return $cart.reduce((total, item) => total + item.quantity, 0);
    }

    function expand() {
        window.Telegram.WebApp.expand();
    }
</script>

<div class="mt-4 grid-cols-2 grid gap-4">
    {#key $cart}
        {#each $products as product}
            {#if product.id}
                <div class=" rounded-xl">
                    <div class="flex flex-col relative items-center">
                        {#if product.quantity !== 0}
                            <h1
                                class=" absolute top-0 right-3 bg-blue-500 w-6 flex justify-center items-center rounded-full"
                            >
                                {product.quantity}
                            </h1>
                        {/if}
                        <img class="" src="/cigarette_PNG4759.png" alt="" />
                        <div class=" flex items-center flex-col w-full">
                            <h1 class=" font-medium">
                                Bond Black {product.quantity}
                            </h1>
                            <div class="flex hint_color">
                                <p class="">1200₽</p>
                            </div>
                            <button
                                on:click={() => toggleMainButton(product)}
                                class="mt-3 bg-[#0ea5e9] uppercase font-semibold p-3 w-3/4 rounded-lg text-sm"
                                >Купить</button
                            >
                        </div>
                    </div>
                </div>
            {/if}
        {/each}
    {/key}
</div>

<style>
    .hint_color {
        color: var(--tg-theme-hint-color);
    }
</style>
