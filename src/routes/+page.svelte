<script lang="ts">
    import Cart from "$lib/svg/Cart.svelte";
    import { onMount } from "svelte";
    import { cart, products } from "./store";
    import Plus from "$lib/svg/Plus.svelte";
    import Minus from "$lib/svg/Minus.svelte";
    import { goto } from "$app/navigation";

    onMount(() => {
        const tgApp = window.Telegram.WebApp;
        tgApp.onEvent("mainButtonClicked", sendTelegramData);
        tgApp.onEvent("backButtonClicked", endSite);
    });
    function endSite() {
        const tgApp = window.Telegram.WebApp;
        goto("/");
        tgApp.BackButton.hide();
    }
    function sendTelegramData() {
        const tgApp = window.Telegram.WebApp;
        tgApp.BackButton.show();
        tgApp.expand();

        tgApp.MainButton.setParams({
            text: `Оформить`,
            color: "#0ea5e9",
        });
        goto("/cart");
        tgApp.offEvent("mainButtonClicked", sendTelegramData);
    }

    function toggleMainButton(product) {
        const tgApp = window.Telegram.WebApp;

        tgApp.HapticFeedback.impactOccurred("light");
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
                color: "#18aaf8",
            });
        }
    }

    function minusMainButton(product) {
        const tgApp = window.Telegram.WebApp;
        tgApp.HapticFeedback.impactOccurred("light");

        const existingItem = $cart.find((item) => item.id === product.id);
        if (existingItem) {
            existingItem.quantity -= 1;

            if (existingItem.quantity === 0) {
                $cart = $cart.filter((item) => item.id !== product.id);
            }
        } else {
            product.quantity = 1;
            $cart = [...$cart, product];
        }
        if (getTotalQuantity() > 0) {
            const tgApp = window.Telegram.WebApp;
            tgApp.MainButton.setParams({
                text: `В корзине (${getTotalQuantity()})`,
                color: "#18aaf8",
            });
        } else {
            const tgApp = window.Telegram.WebApp;
            tgApp.MainButton.hide();
        }
        $cart = $cart;
    }
    function getTotalQuantity() {
        return $cart.reduce((total, item) => total + item.quantity, 0);
    }
</script>

<div class="my-4 grid-cols-3 grid gap-4 body px-2">
    {#key $cart}
        {#each $products as product}
            {#if product.id}
                <div class=" rounded-xl">
                    <div class="flex flex-col relative items-center">
                        {#if product.quantity !== 0}
                            <h1
                                class=" absolute top-0 right-3 bg-[#18aaf8] w-6 flex justify-center items-center rounded-full"
                            >
                                {product.quantity}
                            </h1>
                        {/if}
                        <div class="w-28 h-28">
                            <img
                                class=" object-cover w-full h-full"
                                src={product.image}
                                alt=""
                            />
                        </div>
                        <div
                            class=" flex items-center justify-center flex-col w-full"
                        >
                            <h1 class=" font-medium text-sm">{product.name}</h1>
                            <div class="flex hint_color">
                                <p class="">{product.price}</p>
                            </div>
                            {#if product.quantity === 0}
                                <button
                                    on:click={() => toggleMainButton(product)}
                                    class="mt-3 bg-[#18aaf8] uppercase font-semibold h-9 w-3/4 rounded-lg text-sm"
                                    >Купить</button
                                >
                            {:else}
                                <div class="flex w-full gap-2 justify-center">
                                    <button
                                        on:click={() =>
                                            minusMainButton(product)}
                                        class="mt-3 bg-[#ee4943] flex items-center justify-center h-9 w-2/6 rounded-lg text-sm"
                                        ><Minus /></button
                                    >
                                    <button
                                        on:click={() =>
                                            toggleMainButton(product)}
                                        class="mt-3 bg-[#18aaf8] flex items-center justify-center h-9 w-2/6 rounded-lg text-sm"
                                        ><Plus /></button
                                    >
                                </div>
                            {/if}
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
    .body {
        background: var(--tg-theme-bg-color);
        color: var(--tg-theme-text-color);
    }
</style>
