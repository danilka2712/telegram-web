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

    const items = [
        { name: "1" },
        { name: "1" },
        { name: "1" },
        { name: "1" },
        { name: "1" },
        { name: "1" },
    ];
</script>

<div class="mt-10 grid-cols-2 grid gap-4">
    {#each items as item}
        <div class=" rounded-xl">
            <div class="flex flex-col items-center">
                <img class="" src="/cigarette_PNG4759.png" alt="" />
                <div class="p-3 flex items-center flex-col">
                    <h1 class=" font-medium">Bond Black</h1>
                    <button
                        class="mt-3 bg-blue-400 uppercase font-semibold p-2 w-full rounded-lg"
                        >Купить</button
                    >
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    .hint_color {
        color: var(--tg-theme-hint-color);
    }
</style>
