<script>
    import { onMount } from "svelte";
    import { cart } from "../store";

    onMount(() => {
        const tgApp = window.Telegram.WebApp;
        tgApp.onEvent("mainButtonClicked", sendTelegramData);
    });
    function sendTelegramData() {
        const tgApp = window.Telegram.WebApp;
        tgApp.sendData($cart);
    }
</script>

<div class="body h-screen w-full">
    <div class="box px-2 pr-4">
        {#each $cart as cart}
            <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                    <img class="w-20 h-20" src="cigarette_PNG4759.png" alt="" />
                    <div>
                        <p class=" font-semibold">{cart.name}</p>
                        <p class=" text-sm hint_color">
                            количество: {cart.quantity}
                        </p>
                    </div>
                </div>
                <div class=" font-medium text-sm">2300₽</div>
            </div>
        {/each}
    </div>
</div>

<style>
    .body {
        background: var(--tg-theme-secondary-bg-color);
        color: var(--tg-theme-text-color);
    }
    .box {
        background: var(--tg-theme-bg-color);

        color: var(--tg-theme-text-color);
    }
    .hint_color {
        color: var(--tg-theme-hint-color);
    }
</style>
