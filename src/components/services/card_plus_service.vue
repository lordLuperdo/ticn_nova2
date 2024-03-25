<script setup>
defineProps(['tcp', 'i'])
</script>

<template>
     
     <div class="card_plus_service_cont">
         <div class="icono_card_plus">
            <span :class="i"></span>
        </div>
        <h3 class="description_card_plus">
            {{tcp}}
        </h3>
        </div>
    
     
</template>

<style>
.card_plus_service_cont{
    justify-content: center;
    min-width: 60%;
    min-height: 100%;
    display: flex;
    background-color: var(--firts-color);
    padding: 10px;
    
    gap: 15px;
    box-sizing: content-box;
    border-radius: 6px;
    align-items: center;
}
.icono_card_plus ,.description_card_plus{
    color: white;
}


</style>