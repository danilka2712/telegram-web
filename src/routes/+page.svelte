<script lang="ts">
    import Cart from "$lib/svg/Cart.svelte";
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

<h1 class=" text-xl font-semibold">Выберите товар</h1>
<p class="hint_color text-sm">
    Нажмите на карточку товара чтобы добавить в корзину
</p>
<div class="grid grid-cols-3 gap-4 mt-12">
    <div class="flex flex-col items-center bg-slate-100">
        <img class=" " src="/cigarette_PNG4759.png" alt="" />
        <p class=" font-semibold">Bond Blue</p>
        <button class="bg-indigo-500 p-2 rounded-xl flex items-center w-20"
            ><Cart /></button
        >
    </div>
    <div class="flex flex-col items-center">
        <img class=" " src="/cigarette_PNG4759.png" alt="" />
        <p class=" font-semibold">Bond Blue</p>
        <button class="bg-indigo-500 p-2 rounded-xl flex items-center w-20"
            ><Cart /></button
        >
    </div>
    <div class="flex flex-col items-center">
        <img class=" " src="/cigarette_PNG4759.png" alt="" />
        <p class=" font-semibold">Bond Blue</p>
        <button class="bg-indigo-500 p-2 rounded-xl flex items-center w-20"
            ><Cart /></button
        >
    </div>
</div>

<style>
    .flex {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    button {
        background-color: var(--tg-theme-button-color);
    }
    .hint_color {
        color: var(--tg-theme-hint-color);
    }
</style>
