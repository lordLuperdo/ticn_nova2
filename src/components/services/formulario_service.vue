<script setup>
defineProps(['m'])

</script>

<template> 
    <section class="home_g_touch" id="home_g_touch">
<form action="" class="form_touch">  
  <h2 class="touch_form">
    Contáctanos con los 
    datos de tu negocio
  </h2>
  <div class="form_container">
    <div class="form_spread">
       <p class="tags_get_touch">cuentanos tu inquietud</p>
       <textarea>
        
       </textarea>
      </div>
    
      <div class="form_spread">
       
      <p class="tags_get_touch">cuentanos tu inquietud</p>
    <input type="text" class="touch_input">
    <p class="tags_get_touch">cuentanos tu inquietud</p>
  <input type="text" class="touch_input">
</div>
  
</div>
<button class="g_touch_submit" :@click="m">Enviar datos</button>
<p class="text_form">
  Recuerda que después de llenar el formulario un asesor se contactará contigo lo más pronto posible para solucionar cualquier inquietud que tengas.
</p>
</form>
</section>
</template>