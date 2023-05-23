<script>
    import { cart } from "../store";
</script>

<div>
    {#each $cart as cart}
        <h1>{cart.name}</h1>
        <h1>{cart.quantity}</h1>
    {/each}
</div>
