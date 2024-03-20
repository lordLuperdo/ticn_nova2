<script setup>
   import plus_service from './plus_service.vue';
   import footer from '../footer.vue'
   import formulario_service from './formulario_service.vue';
   import card_service from './card_service.vue';
   import card_precio from './card_precio.vue';
   import VueScrollTo from 'vue-scrollto';
  
   

   defineProps([ 'foto','titulo','text' ,'array_precios_card','precio_titulo','precio_precio', 'titulo_plus', 'text_plus',
    'array_card_plus','text_card_plus','icono_plus','metodo',
    'icon_card_service', 'title_card_service', 'to_card_service','class_card_service','s','array_precios_card'])

    const smoothScroll = () => {
  VueScrollTo.scrollTo('#touch_service', 1000, { offset: -window.innerHeight/9});
}
</script>

<template>
    <div class="info_service">
      <div class="service_info">
        
        <h1 class="service_title">{{ titulo }}</h1>
        <p class="service_text">
            {{ text }}
        </p>
        <ul class="container_card_precio">
          <li class="card_card_precio"v-for="a in array_precios_card">
            <card_precio
            :card_precio_titulo = "a.campo"
            :card_precio_precio ="a.precio"
            ></card_precio>
          </li>
        </ul>
        <a href="#touch_service" @click.prevent="smoothScroll" class="solicitar_servicio">Solicitar servicio</a>
      </div>
      <div class="service_photo">
        <img :src="foto" alt="no se encontro la foto">
      </div>
      
    </div>

    <plus_service
    :text="text_plus"
    :array_servicio="array_card_plus"
    ></plus_service>
    
    
    <formulario_service id="touch_service"
    :m="metodo"
    ></formulario_service>

    <section class="service_cards">
        <h2 class="our_services">
           Nuestros servicios
        </h2>
        <div class="servicios_service"> 
          <ul class="card_content_s">  
          <li class="card_list_S" v-for="a in s" :key="service">
            <card_service 
            :clase = 'a.clase'
            :icon = 'a.icon'
            :title =  'a.name'
            :to = 'a.to'
            ></card_service>
        </li>
      </ul>
    </div>
       
      
    </section>

    <footer></footer>
    
</template>
<style>
.info_service{
  display: flex;
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;
  gap: 40px;
  max-height: 80vh;
  justify-content: center;
  
}
.service_info {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 3%;
  padding-left: 0%;
  padding-right: 0%;
}
.container_card_precio{
 padding: 0%;
  justify-content: center;
  display: flex;
  gap : 20px;
 
  flex-wrap: wrap;
}
.card_card_precio{
  padding: 1%;
  flex-grow: 1;
  display: flex;
  gap: 3px;
  flex-direction: column;
  justify-content: center;
  background-color:var(--firts-color);
  border-radius: 5px;
}
.solicitar_servicio{
  background-color: var(--second-color);
  text-decoration: none;
  padding: 2%;
  border-radius: 0 0 0 25px ;
  text-align: center;
  color: white;
  font-size: large;
  transition: all 0.5s ease-out;
}
.service_photo{
  display: flex;
  overflow: hidden;
  min-width: 40%;
  justify-content: center;
  border-radius: 0 0 25px 0;
  max-height: 50vh;
  margin-top: 8%;
}
.service_photo img{
  object-fit: cover;
  scale: 250%;
}
.solicitar_servicio:hover{
  background-color: var(--firts-color);
  border-radius: 0 0 25px 0 ;
}
.plus_services_container{
  display: flex;
}
.info_service{
  display: flex;
}
.service_cards{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  
  margin-bottom: 9%;
  height: 40vh;
}
.servicios_service{
  
  width: 100%;
  justify-content: center;
  margin-top: 2%;
  display: flex;
  height: 65%;
  
}

.card_content_s{
 
  
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  height: 100%;
  display: flex;
  padding: 0%;
  gap:2%;
  
}
.card_list_S{
  display: flex;
  justify-content: center;
  width: 23%;
  min-height: 100%;
  height: 100%;
}
</style>