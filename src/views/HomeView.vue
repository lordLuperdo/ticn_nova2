<script setup>
import { RouterLink } from 'vue-router';
import Heads from '../components/header.vue'
import Foot from '../components/footer.vue'
import VueScrollTo from 'vue-scrollto';
import { useservicesStore } from '@/stores/servicios';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { onMounted, ref } from 'vue';
import emailjs from '@emailjs/browser';


emailjs.init('HZJR_BmzqZWxZywyx')
const class_enviar_datos= ref('g_touch_submit')
const class_inscribir_blog=ref('g_touch_submit')
const enviar_peticion_blog =ref('Registrarme')
const enviar_datos= ref('Enviar datos')
const email = ref('');
const selectedService = ref('');
const text = ref('');
const phone = ref('');

const {servicios} = useservicesStore()

const smoothScroll = () => {
  VueScrollTo.scrollTo('#home_g_touch', 1000, { offset: -window.innerHeight/9});
}

//animaciones: 
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  
  

  gsap.to(".foto_plus1",{
  scrollTrigger :{
    trigger : '.foto_plus1',
    scrub:2

  },
  x: 0,
})

gsap.to(".foto_plus2",{
scrollTrigger:{
trigger : '.foto_plus2',
scrub:2
},  
x:0,
duration:3
})
})

//enviar formulario
const send_email = ()=>{
  const form = document.getElementById('myForm');
  enviar_datos.value = 'Enviando...'
  emailjs.sendForm("service_9bsx2ld","template_mjrkyh6",form,
  { texto_servicio: selectedService.value,
    texto_inquietud: text.value,
    texto_numero: phone.value,
    texto_correo: email.value,})
.then((response) => {
      console.log('Correo electrónico enviado:', response);
      class_enviar_datos.value = 'g_touch_submit succes'
      enviar_datos.value = 'Datos enviados'
    })
    .catch((error) => {
      console.error('Error al enviar el correo electrónico :(', error);
      enviar_datos.value = 'error, comunicate mejor por nuestras redes' 
      class_enviar_datos.value = 'g_touch_submit error'
    });
}

const inscribir_blog = ()=> {
  class_inscribir_blog.value = 'g_touch_submit error'
  enviar_peticion_blog.value = 'En este momento no contamos con este servicio'
}

</script>

<template>
  <Heads></Heads>
<main>
  <div class="inge">
    <img src="../assets/imagen_inge.png" alt="" class="img_inge">
  </div>
  <div class="container_main">
      <div class="container_logo_responsive">
        <img src="../assets/Favicon.png" alt="logo" class="imagen_logo_responsive">
      </div>
      <h1 class="main_title">
        SOMOS LA <br> 
        SOLUCIÓN TÉCNICA <br> 
        PARA TU EMPRESA 
      </h1>
      <h1 class="main_title_responsive">
        SOMOS LA 
        SOLUCIÓN TÉCNICA 
        PARA TU EMPRESA 
      </h1>
      <p class="main_parrafo">
       Con nosotros encontrarás lo que necesitas para fortalecer
       la seguridad, organizar tu data center y establecer un buen 
       cableado esctruturado para tu negocio
      </p>
      <a href="#home_g_touch" @click.prevent="smoothScroll" class="main_link">
        Contáctanos 
      </a>
      
  </div>
  <div class="main_servicios">
        <h2 class="servicios_title">
          NUESTROS SERVICIOS
        </h2>
        <div class="servicios_card">

          <ul class="card_content">
            <li class="card_list" v-for="carta in servicios"
            :key="carta">
                <div :class="carta.clase">
                  <div class="icono">
                    <a :class="carta.icon"></a>
                  </div>
                  
                  <div class="texto_card_main">
                    <p>{{ carta.name }}</p>
                  </div>
                  
                  <!-- poner la clase card_list_link  -->
                  <RouterLink class=" no_yet" :to="carta.to">
                     Solicitar
                  </RouterLink>
                  <a href="#home_g_touch" class="card_list_link" @click.prevent="smoothScroll">Solicitar</a>
              </div>
                
            </li>
          </ul>
        </div>
  </div>
</main>

<section class="home_plus"> 
  
  <div class="foto_plus">
      <img src="../assets/plus_izquierdo.png" class="foto_plus1" alt="">
  </div>
  <div class="plus_info">
   <h2 class="title_plus">
      ¿Por qué escoger nuestros servicios?
    </h2>

  <div class="container_plus_info">
    <p class="parrafo_plus">
      Contamos con una excelencia inigualable en nuestros servicios tecnológicos respaldados por un equipo de profesionales altamente experimentados, cada uno con más de 10 años de dedicación en el campo. En nuestro compromiso por ofrecer resultados sobresalientes, nos destacamos por fusionar la riqueza de la experiencia con un enfoque innovador. A lo largo de los años, hemos demostrado una capacidad probada para superar las expectativas, estableciendo relaciones sólidas basadas en la confianza mutua con nuestros clientes.
      <br><br>
Con un enfoque pionero, nos esforzamos por mantenernos a la cabeza de las tendencias tecnológicas, adaptándonos ágilmente a los avances del mercado. Nuestra firma se distingue por proporcionar soluciones personalizadas que responden a las necesidades específicas de cada cliente, garantizando así un servicio que va más allá de lo convencional. 
    </p>
    <div class="container_card_plus">
      <div class="plus_card">
        <p class="card_plus">

        </p>
      </div>
      <div class="plus_card">
        <p class="card_plus">

        </p>
      </div>
      <div class="plus_card">
        <p class="card_plus">

        </p>
      </div>
      <div class="plus_card">
        <p class="card_plus">

        </p>
      </div>
    </div>
  </div>

  
  </div>
  <div class="foto_plus ">
     <img src="../assets/plus_derecho.png" class="foto_plus2"alt="">
  </div>
  
</section>

<article class="home_blog">
<div class="blog_info">
  <h2 class="blog_title">
    ¿Ya conoces nuestro Blog?
  </h2>
  <p class="blog_text">
    En nuestro Blog público puedes encontrar información
     útil sobre nuestros servicios y sobre la comunidad.
  </p>
  <div class="blog_cards">
    <div class="card_blog">Consejos</div>
    <div class="card_blog">Equipos</div>
    <div class="card_blog">comunidad</div>
    
  </div>
</div>

<form class="blog_submit"  @submit.prevent="inscribir_blog">
  <h2 class="blog_title">Registrate con tu correro</h2>
  <input class="blog_input" type="text" placeholder="Ingresa tu correo" required>
  <button :class="class_inscribir_blog" type="submit">{{ enviar_peticion_blog }}</button>
</form>
</article>

<section class="tecnologias">
  <h2 class="title_tecs">
    Nuestras técnologias
  </h2>
  <div class="cola_tecs">
    <div class="content_img_tecs">
      <img src="../assets//aliados/Hillstone.png" alt="" class="img_tecs">
    </div>
    
    <div class="content_img_tecs">
      <img src="../assets//aliados/Leviton.png" alt="" class="img_tecs">
    </div>
    
    <div class="content_img_tecs">  
      <img src="../assets//aliados/peplink.png" alt="" class="img_tecs">
    </div>
  
    <div class="content_img_tecs"> 
      <img src="../assets//aliados/ruckus.png" alt="" class="img_tecs">
    </div>
   
  </div>
</section>


<section class="home_g_touch" id="home_g_touch">
<form @submit.prevent="send_email" class="form_touch" id="myForm">  
  <h2 class="touch_form">
    Contáctanos con los 
    datos de tu negocio
  </h2>
  <div class="form_container">
    <div class="form_spread">
       <p class="tags_get_touch">cuentanos tu inquietud</p>
       <textarea v-model="text" name="texto_inquietud" id="texto_inquietud">
        
       </textarea>
      </div>
    
      <div class="form_spread">
        <p class="tags_get_touch">Escoge el servicio</p>
      <select  id="texto_servicio" name="texto_servicio" class="touch_select" v-model="selectedService">
        <option disabled value="">Selecciona un servicio</option>
        <option value="Civerseguridad" class="touch_select">ciberseguridad</option>
        <option value="Redes y cableado" class="touch_select">Redes y cableado</option>
        <option value="Seguridad Electrónica" class="touch_select">Seguridad Electrónica</option>
        <option value="Data y cloud" class="touch_select">Data y cloud</option>
      </select>
      <p class="tags_get_touch">telefono</p>
      <input type="number" id="texto_numero" name="texto_numero" class="touch_input" v-model="phone" required>
      <p class="tags_get_touch">correro</p>
    <input type="email" class="touch_input" id="texto_correo"  name="texto_correo" v-model="email" required>
</div>
  
</div>
<button type="submit" :class=" class_enviar_datos">{{ enviar_datos }}</button>
<p class="text_form">
  Recuerda que después de llenar el formulario un asesor se contactará contigo lo más pronto posible para solucionar cualquier inquietud que tengas.
</p>
</form>
</section>


<foot></foot>
</template>

<style>

.logo{
  scale: 140%;
  margin-left: 9%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
}

.logo:hover{
  scale: 160%;
}

main{
  background-color: rgb(2, 2, 54);
 /* background-image: url(../assets/banner.png);*/ 
  background-repeat: no-repeat;
  background-size:100% 95%;
  padding: 3%;
  
  height:60vh ;
  display: flex;
  flex-direction: column;
  position:relative;
  
}

.container_main{
  flex-direction: column;
  display: flex;
  width: 50%;
  height: 70%;
  gap: 1%;
  margin-top: 3%;
  margin-left: 8%;
  z-index: 1;
}
.container_logo_responsive{
  display: none;
}

.main_title{
  color: aliceblue;
  font-size: 310%;
  
}
.main_title_responsive{
    display: none;
   }

.main_parrafo{
  color: white;
  max-width: 75%;
  
}

.main_link{
  position: relative;
  border-radius: 0 0 20px 0;
  margin-top: 2%;
  background-color: var(--second-color);
  width: 50%;
  min-height: 15%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight:600;
  font-size: larger;
  
  transition: all 0.5s ease;
}
.inge{
position: absolute;
bottom: 0%;
right: 0%;
box-sizing: content-box;
height: 100%;
width: 70%;
display: flex;
justify-content: end;
overflow: hidden;



}
.inge img{
  height: 100% ;
  align-items: start;
  right: 0%;
  scale: 100%;
}

.main_link:hover{
border-radius: 0%;
width: 80%;
}

.main_servicios{
  position: absolute;
  background-color: rgb(7, 23, 80);
  background-color: var(--firts-color);
  position: absolute;
  width: 80%;
  right:10%;
  top: 90%;
  padding: 1.5rem;
  box-sizing: border-box;
  justify-content: center;
  min-height: 27vh;
  margin: 0%;
  border-radius: 0 0 0 70px;
}

.servicios_title{
  justify-content: center;
  color: white;
}

.servicios_card{
  position: absolute;
  width: 80%;
  height: 45%;
  display: flex;
  flex-direction: row-reverse;

  z-index: 1;
  top: 30%;
  right: 10%;
  
}
.card_content{
  margin-top: 3%;
  
  justify-content: center;
  width: 100%;
  height: 150%;
  display: flex;
  padding: 0%;
  row-gap:12%;
  column-gap: 2%;
  flex-grow: 1;
  flex-wrap: wrap;
}
.card_list{
  display: flex;
  justify-content: center;
  width: 23%;

  min-height: 150%;
}
 .round, .normal{
  
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--second-color);
  
 }
 
.round{
  border-radius: 0px 16% 0px 0px;
}

.icono{
 
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.icono a{
  padding: 0%;
  margin-top: 5%;
  font-size: 300%;
  
}

.texto_card_main{
  color: white;
  font-weight:650;
  width: 100%;
  height: 30%;
}
.texto_card_main ,.texto_card_main p{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.texto_card_main p{
  text-align: center;
}



.card_list_link{
 
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration:none ;
  bottom: 0%;
  height: 25%;
  background-color: var(--firts-color);
  width: 100%;
  color: white;
  transition: all 0.5s ease;
}

.card_list_link:hover{
 height: 50%;
 font-weight: 700;
}

/* segunda seccion************************************ */

.home_plus{
  margin-top:35vh;
  display: flex;
  justify-content: center;
  align-items: center;

}

.title_plus{
  text-align: center;
  padding: 2%;
}

.plus_info{
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  
}

.foto_plus img{
max-width: 100%;
scale: 100%;

}



.foto_plus{
  min-height: 100%;
  overflow: hidden;
}

.foto_plus1{
  translate: -300px 0px;
}

.foto_plus2{
  translate: 300px 0px;
}

 p{
  text-align: justify;
  
 
  
}

.home_blog{
  margin-top: 7%;
  display: flex;
  background-color: var(--firts-color);
  flex-direction: column;
  justify-content: center;
  padding: 4%;

 
}

.blog_text, .blog_title{
  color: white;
  text-align: center;
}
.blog_text{
  margin-top: 0.5%;
}
.blog_cards{
  margin-top: 1%;
  display: flex;
  gap:1%;
  
  justify-content: center;
}
.card_blog{
  
  background-color: var(--second-color);
  padding: 0.7%;
  color: white;
  border-radius: 50px;

}
.blog_submit{
  margin-top: 3%;
  margin-left: 25%;
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  height: 20%;
 
  
}

.blog_input{
  margin-top: 2%;
}
.blog_submit input{
  padding-left: 4%;
  max-width: 100%;
  border: none;
  height: 2rem;
  margin-bottom: 2%;
  border-radius: 3px;
}

button{
  border: none;
  padding: 3%;
  color: aliceblue;
  background-color: var(--second-color);
  transition: all ;
  border-radius: 3px;
  transition: all 0.5s ease;
}

button:hover{
border-radius: 0 0 16px 0;

}


.tecnologias{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5%;
  


  view-timeline: --space;
  animation-timeline: --space;
  animation-name: show;
  animation-range: entry 0% cover 30%;
}

.title_tecs{

  text-align: center;
}


.cola_tecs{
  display: flex;
  gap: 1%;
  margin-top: 3%;
  row-gap: 2rem;
  justify-content: center;
  margin-bottom: 3%;
  flex-wrap: wrap;
}

.content_img_tecs{
  display: flex;
  justify-content: center;
  align-items: center;
 
  width: 20rem;
}

.img_tecs{
max-width: 60%;
}


.home_g_touch{
  display: flex;
  background-color: var(--firts-color);
  margin: 5%;
  border-radius: 3px;
  padding: 3%;
  justify-content: center;
}

.touch_form{
  text-align: center;
  margin-bottom: 2%;
  color: white;
}

.form_touch{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form_container{
  width: 100%;
  justify-content: center;
  display:flex;
  gap: 1.5%;
  margin-bottom: 2%;
}

.form_spread{
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 0.7em;;
}

.tags_get_touch{
  color: white;
}

.touch_select{
  height: 2rem;
  border-radius: 3px;
}

.touch_input{
border-radius: 3px;
height: 2rem;
outline: none;
}

textarea{
  height: 100%;
  border-radius: 3px;
  resize: none;
}
textarea:focus , input:focus{
  outline: none;
  border: 2px solid;
  border-color: var(--second-color);
  color:var(--firts-color);
}
.g_touch_submit{
  max-height: 10%;
  font-size: medium;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
}

.succes{
  background-color: green;
}

.error{
  background-color: red;
}

.text_form{
  margin-top: 2%;
  color: white;
  text-align: center;
}

/* mdeia qrys */
@media (width <= 1200px) {
  .main_title{
  font-size: 200%; 
  }
  .texto_card_main{
    font-size: 75%;
    
  }
 .container_main{
  justify-content: center;
  max-width: 80%;
 }
}
@media (width <= 1019px) {
.card_list{
  min-width: 17.5rem;
}  

@media (width <= 1018px) {
  .round{
  border-radius: 0px;
}
.home_plus{
  margin-top:70vh;
  display: flex;
  justify-content: center;
  align-items: center;

}

.main_servicios{
    width: 90%;
    right: 5%;
    border-radius: 0 0 10px 10px;
   }
   
}
}
@media (width <= 827px) {
  .home_plus{
  margin-top:55vh;
  display: flex;
  flex-direction: column-reverse;
  padding: 4rem;
  justify-content: center;
  align-items: center;
  
}
.foto_plus{
  display: none;
}

}
@media (width <= 896px) {
  .inge{
    display: none;
  }
  main{
    height: 70vh;
    align-items: center;
    justify-content: center
   }
   .main_title{
    display: none;
   }

   .main_title_responsive, .main_parrafo{
    text-align: center;
    min-width: 100%;
   }
   .main_title_responsive{
    color: white;
    display: block;
    font-size: 150%;
   }
   .main_link{
    width: 100%;
    border-radius: 3px;
   }
   .container_main{
    width: 100%;
    gap: 5%;
    margin: 0%;
   }
  .servicios_card{
    width : 85%;
    right: 8.5%;
  }
    
  

  }
  @media (width <= 789px){
  .servicios_card{
   
    width: 100%;
    right: 0
  }
  
  }
  @media (width <= 635px) {
    .home_g_touch{
     padding: 7%;
     margin: 7%;
    }
    .card_list{
     min-width: 13.5rem;
    }
    .home_g_touch p{
     
     text-align: center;
    }
    textarea{
      height: 7rem;
    }
    .form_spread{
  
     width: 100%;
     gap: 0;
    }
    
    .form_container{
      flex-direction: column;
    }

    .home_g_touch button{
      margin-top: 7%;
      height: 3rem;
    }
    .home_g_touch p{
      margin-top:18px;
    }
   
    .home_g_touch input, .home_g_touch textarea, .home_g_touch select{
      margin-top:5px;
      
    }
    .tecnologias{
      margin-top: 10%;
    }
    .cola_tecs{
      margin-top: 8%;
    }
  }
  @media (width < 490px) {
    .home_plus{
  margin-top:115vh;
  display: flex;

  justify-content: center;
  align-items: center;
  
}
  }
 @media (width <= 426px) {
  p, .title_plus{
    text-align:left;
    
 
  }
   main{
    height: 100vh;
    justify-content: center;
    align-items: center;
    width: 100;
   }

   .main_servicios{
    width: 100%;
    right: 0%;
    border-radius: 0 0 0 10px;
   }
   
   .main_title, .main_parrafo{
    text-align: center;
    min-width: 100%;
   
   }

      
   .home_plus{
  margin-top:115vh;
  display: flex;

  justify-content: center;
  align-items: center;
  
}

 
  .home_blog{
    padding: 2rem;
    row-gap: 1rem;
  }
  .blog_info{
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }
  .blog_cards{
    gap: 0.7rem;
  }
  .card_blog{
    padding: 2%;
  }

  .blog_submit{
    
    width: 100%;
    margin: 0%;
    gap: 0.7rem;
  }

  .blog_title{
    min-width: none;
    width: 100%;
    
  } 

   .tecnologias{
    margin-bottom: 20%;
   }
   .cola_tecs{
    margin-top: 6%;
   }
   
  .img_tecs{
  max-width: 50%;
  }  


  @media (width <= 376px) {

    .container_logo_responsive{
      display: flex;
      margin-bottom: 1rem;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
    .imagen_logo_responsive{
      max-width:22%
    }
    .home_g_touch h2{
      font-size: 140%;
    }
    .content_img_tecs{
  width: 10rem;
}
.img_tecs{
min-width:80%;
}
.tecnologias{
    margin-bottom: 5%;
   }
   .home_g_touch{
     padding: 7%;
     margin: 7%;
    }
  }
 
  .home_plus{
  
  margin-top:115vh;
  display: flex;
   padding: 2.5rem;
  justify-content: center;
  align-items: center;
  
}
  
  
}
</style>