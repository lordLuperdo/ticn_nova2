<script setup>
defineProps(['metodo','inquietud_form_service_service','telefono_service_service','value_form_service_service','email_service_service','enviar_datos','class_env'])

</script>

<template> 
    <section class="home_g_touch">
<form @submit.prevent="metodo" class="form_touch" id="myForm">  
  <h2 class="touch_form">
    Contáctanos con los 
    datos de tu negocio
  </h2>
  <div class="form_container">
    <div class="form_spread">
       <p class="tags_get_touch">cuentanos tu inquietud</p>
       <textarea name="texto_inquietud" :v-model="inquietud_form_service_service">
        
       </textarea>

      </div>
    
      <div class="form_spread">
        
    <input type="text" :value="value_form_service_service" class="touch_input servicio_service" name="texto_servicio">
      <p class="tags_get_touch">Telefono</p>
    <input type="number" class="touch_input" name="texto_numero" required :v-model="telefono_service_service">
    <p class="tags_get_touch">correo</p>
  <input type="text" class="touch_input"  name ="texto_correo" required :v-model="email_service_service">
</div>
  
</div>
<button type="submit" :class="class_env" >{{ enviar_datos }}</button>
<p class="text_form">
  Recuerda que después de llenar el formulario un asesor se contactará contigo lo más pronto posible para solucionar cualquier inquietud que tengas.
</p>
</form>
</section>
</template>

<style>
.servicio_service{
  display: none;
}
</style>