<script lang="ts">
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import { toggle_class } from "svelte/internal";

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
        }
    });

    let user: any;
    let tg: any;

    function close() {
        tg.close();
    }
</script>

<div class="container">
    <h1>{user}</h1>
    <button on:click={close}>Закрыть</button>
</div>

<style>
    .container {
        text-align: center;
        padding: 20px;
    }

    h1 {
        font-size: 2em;
        margin-bottom: 20px;
    }
</style>
