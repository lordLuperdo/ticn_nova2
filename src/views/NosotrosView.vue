<script setup>
import heads from '../components/header.vue'
import foot from '../components/footer.vue'
import pagina from '../components/services/service.vue'

</script>

<template>
  
 
  <heads></heads>
  <div class="nosotros_main">
     <h1 class="nosotros_title">¿Quienes somos?</h1>
     <p class="nosotros_text">
      En Ticnova SAS, nos especializamos en brindar soluciones para todos los requerimeintos a nivel de networking, conectividad y  seguridad de la informacion. 
      Es por eso que nuestro enfoque es proporcionar soluciones integrales que para desarrollar redes seguras, eficientes y de alta calidad que impulsen el éxito de su negocio.  
     </p>
  </div>

 <div class="nosotros_myv">
   <div class="mision">
    <div class="mision_title">
      <h2 id="mision_title">Misión</h2>
    </div>
    <div class="mision_text">
      <p>
        En Ticnova SAS, nuestra misión es proporcionar soluciones integrales de conectividad y seguridad de la información para clientes de mediana y alta densidad de dispositivos. Nos comprometemos a ofrecer conexiones rápidas, seguras y confiables, impulsando así las oportunidades y el éxito de nuestros clientes en el mundo digital actual.
      </p>
    </div>
  </div>
 
 
  <div class="vision">
    <div class="vision_title">
      <h2 id="vision_title">Visión</h2>
    </div>
    <div class="vision_text">
      <p>
        Nuestra visión en Ticnova SAS es ser reconocidos como líderes en la implementación de redes alámbricas e inalámbricas, destacándonos por nuestra excelencia en la garantía de conectividad ininterrumpida y de alta velocidad, incluso en entornos con un gran número de dispositivos conectados. Aspiramos a ser el socio de confianza de nuestros clientes en la era digital, brindando soluciones innovadoras y servicios de ciberseguridad de vanguardia.
      </p>
    </div>
  </div>
  <div class="valores">

  </div>
 </div>
 
 
  
  <foot></foot>
</template>

<style>
.nosotros_main{
  margin-top: 4%;
  margin-bottom: 4%;
  padding-left: 8%;
  padding-right: 8%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  
}

.nosotros_myv{
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}

.nosotros_title, .nosotros_text{
  text-align: center;
}

.mision, .vision{
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 3%;
 
  
}
.mision{
  background-color: var(--firts-color);
  margin-bottom: 5%;
  
}
.vision{
  background-color: var(--second-color);
  margin-bottom: 5%;
}

.mision_title, .mision_text, .vision_title, .vision_text{
  display: flex;
  justify-content: center;
  align-items: center;
  color:white ;
}

.mision_text, .vision_text{
  max-width:65%;
  color: aliceblue;
}

.mision_title, .vision_title{
  min-width: 30%;
  color: white;
}


</style>
