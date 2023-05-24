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

<button on:click={sendTelegramData}>asd</button>
<div class="body h-screen w-full">
    <div class="box">
        {#each $cart as cart}
            <h1>{cart.name}</h1>
            <h1>{cart.quantity}</h1>
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
</style>
