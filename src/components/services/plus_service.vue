<script setup>
import card_plus_service from './card_plus_service.vue';
defineProps([ 'text' ,'cards','array_servicio'])


</script>

<template>
    <div class="plus_services">
     <h2 class="plus_services_title">Beneficios</h2>
     <p class="plus_service_text">{{ text }}</p>
     <div class="plus_services_container">
        <div class="card_plus" v-for="a in array_servicio" :key="a" >
          <card_plus_service
          :tcp = 'a.texto'
          :i = 'a.icon' 
          ></card_plus_service>
        </div>
     </div>
    </div>

</template>

<style>
.plus_services{
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  
  gap: 20px;
 
}

.plus_services_title{
  text-align: left;
}
.plus_services_container{
  box-sizing: border-box;
  width: 100%;
  
  display: flex;
  gap: 20px;
  
  width: 100%;
  flex-wrap: wrap;
}

.card_plus{
 
  
  display: flex;
  
  height: 80%;
  box-sizing: content-box;

}
</style>