<script>
    import { cart } from "../store";
</script>

<div class="body h-screen w-full">
    <div>
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
</style>
