<script lang="ts">
    import { browser } from "$app/environment";
    import Cart from "$lib/components/Cart.svelte";
    import { onMount } from "svelte";

    interface TelegramWebApp {
        close: boolean;
        init(): void;
    }

    onMount(() => {
        if (browser) {
            const telegram: TelegramWebApp = window.Telegram.WebApp;
            tg = telegram;
            const userTg = tg.initDataUnsafe?.user?.username;
            user = userTg;
            telegram.MainButton;
        }
    });

    let user: any;
    let tg: any;

    function close() {
        tg.close();
    }
</script>

<div class="grid grid-cols-3 gap-5">
    <Cart />
    <Cart />
    <Cart />
    <Cart />
    <Cart />
    <Cart />
    <Cart />
</div>

<style>
    .cart {
        background: var(--tg-theme-secondary-bg-color);
    }
</style>
