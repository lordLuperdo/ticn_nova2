<script setup>
import { RouterLink } from 'vue-router';
 defineProps(['clase','icon', 'title' ,'to'])

</script>

<template>
    
      <div :class="clase">
                  <div class="icono">
                    <a :class="icon"></a>  
                  </div>
                  
                  <div class="texto_card_main">
                    <p>{{ title }}</p>
                  </div>

                  <RouterLink class="card_list_link" :to="to">
                     Saber más
                  </RouterLink>

              </div>
          
    
</template>