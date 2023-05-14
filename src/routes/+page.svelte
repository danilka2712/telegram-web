<script lang="ts">
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import { toggle_class } from "svelte/internal";

    interface TelegramWebApp {
        close: string;
        init(): void;
    }

    onMount(() => {
        if (browser) {
            const telegram: TelegramWebApp = window.Telegram.WebApp;
            tg = telegram;
            const userTg = tg.initDataUnsafe?.user;
            user = userTg;
        }
    });
    let user: any;
    let tg: any;
    function close() {
        tg.close();
    }
</script>

<div>
    <h1>{user}</h1>
    <button on:click={close}>Закрыть</button>
</div>
