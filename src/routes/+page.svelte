<script lang="ts">
    import { onMount } from "svelte";
    let firstName: string = "";
    onMount(() => {
        firstName = window.Telegram.WebApp.initDataUnsafe.user.first_name || "";

        const tgApp = window.Telegram.WebApp;
        tgApp.MainButton.setParams({ text: "Оформить", color: "#ffffff" });
        tgApp.MainButton.onClick(() => tgApp.close);
    });

    function toggleMainButton() {
        const mainButton = window.Telegram.WebApp.MainButton;
        if (mainButton.isVisible) mainButton.hide();
        else mainButton.show();
    }

    function expand() {
        window.Telegram.WebApp.expand();
    }
</script>

<h1 class=" text-xl font-medium">Выберите товар</h1>
<p class=" text-gray-400">
    Нажмите на карточку товара чтобы добавить в корзину
</p>
<div class="flex">
    <button on:click={toggleMainButton}> Show/Hide Main Button </button>
    <button on:click={expand}>Expand</button>
</div>

<style>
    .flex {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    button {
        padding: 1rem;
    }
</style>
