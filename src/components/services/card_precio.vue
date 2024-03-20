<script setup>
 defineProps(
    [ 'card_precio_precio','card_precio_titulo']
   )
</script>
<template>
    <p class="titulo_card_precio">
        {{ card_precio_titulo }}
    </p>
    <h4 class="precio_card_precio">
        {{ card_precio_precio }}
    </h4>

</template>
<style>
.titulo_card_precio, .precio_card_precio {
    text-align: center;
    color:white;
}
</style>