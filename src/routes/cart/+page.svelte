<!-- src/routes/contact/+page.svelte -->

<script>
    import { onMount, tick } from "svelte";
    import { cart } from "../store";

    function sendTelegramData() {
        const tgApp = window.Telegram.WebApp;
        const address = "Лукашевича 25";
        const dataToSend = [
            {
                address: address,
                cart: $cart,
            },
        ];

        tgApp.sendData(dataToSend);
    }
    let cartTotal = 1;
    onMount(() => {
        const tgApp = window.Telegram.WebApp;
        tgApp.onEvent("mainButtonClicked", sendTelegramData);
        cartTotal = $cart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    });
</script>

<div class="container">
    <div class="cart-items py-4">
        <h1 class="title">Корзина</h1>
        {#each $cart as item}
            <div class="cart-item">
                <div class="flex items-center">
                    <div class=" w-24 h-24">
                        <img
                            class="item-image object-cover w-full h-full"
                            src={item.image}
                            alt=""
                        />
                    </div>
                    <div class="item-details">
                        <p class="item-name">{item.name}</p>
                        <p class="item-quantity">количество: {item.quantity}</p>
                    </div>
                </div>
                <div class="item-price pr-6">{item.price * item.quantity}</div>
            </div>
        {/each}
    </div>
    <div class="mt-6 flex cart-items justify-between pr-6 py-4 pl-4">
        <p class=" font-medium">Итого:</p>
        <p class=" font-medium">
            {cartTotal}₽
        </p>
    </div>
</div>

<style>
    /* src/routes/contact/+page.styles.css */

    .container {
        background: var(--tg-theme-secondary-bg-color);
        color: var(--tg-theme-text-color);
        height: 100vh;
        width: 100%;
    }

    .title {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 1rem;
        padding-left: 1rem;
        text-transform: uppercase;
    }

    .cart-items {
        background: var(--tg-theme-bg-color);
        color: var(--tg-theme-text-color);
    }

    .cart-item {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }

    .item-details {
        display: flex;
        flex-direction: column;
    }

    .item-name {
        font-weight: 600;
    }

    .item-quantity {
        color: var(--tg-theme-hint-color);
        font-size: 0.875rem;
    }

    .item-price {
        font-size: 0.875rem;
        font-weight: 500;
    }
</style>
