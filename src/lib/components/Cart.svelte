<script>
    import Cart from "$lib/svg/Cart.svelte";
    export let name = "";
    export let price = "1200";
    export let hidden = true;
    import { createEventDispatcher } from "svelte";
    import { cart, products } from "../../routes/store";
    const dispatch = createEventDispatcher();

    function productMinus() {
        dispatch("minus");
    }
    function productAdd() {
        dispatch("plus");
    }
</script>

<div class="flex flex-col items-center">
    <div class="flex flex-col items-center mb-2">
        <img src="/cigarette_PNG4759.png" alt="" />
        <p class=" font-bold text-center text-sm">{name}</p>
    </div>
    <div class="">
        <button
            on:click
            class="  bg-[#3478f7] text-white flex items-center justify-center gap-2 p-2 px-5 font-semibold uppercase text-sm rounded-lg"
            ><Cart />{price}₽</button
        >
        {#if hidden}
            <button
                on:click={productMinus}
                class="  bg-[#3478f7] text-white flex items-center justify-center gap-2 p-2 px-2 font-semibold uppercase rounded-lg"
                >-</button
            >
            <button
                on:click={productAdd}
                class="  bg-[#3478f7] text-white flex items-center justify-center gap-2 p-2 px-2 font-semibold uppercase rounded-lg"
                >-</button
            >
        {/if}
    </div>
</div>

<style>
</style>
