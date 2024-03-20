<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
    <RouterLink to="/" class="logo">
     <img src="../assets/logo_tic.png" alt="no se encuentra">
    </RouterLink>
    <nav class="header_nav">
        <ul class="app_nav">
      <li class="nav_app">
        <RouterLink to="/blog" class="router_link link_normalito">Blog</RouterLink>
      </li>
      <li class="nav_app">
        <RouterLink to="/Nosotros" class="router_link link_normalito">nosotros</RouterLink>
      </li>
      <li class="nav_app" id="link_especial">
        <RouterLink to="" class="router_link">servicios</RouterLink>
        <ul>
          <li class="especial_servicios">
            <RouterLink to="Ciberseguridad" class="router_link cs">Ciberseguridad</RouterLink>
          </li>
          <li class="especial_servicios">
            <RouterLink to="RedesWifi&CableadoEstructurado" class="router_link cs">Redes, Wi-fi y cableado estructurado</RouterLink>
          </li>
          <li class="especial_servicios">
            <RouterLink to="DataCenter&Cloud" class="router_link cs">Data center y Cloud</RouterLink>
          </li>
          <li class="especial_servicios">
            <RouterLink to="SeguridadElectronica" class="router_link cs">Seguridad electrónica</RouterLink>
          </li>
        </ul>
      </li>
    </ul>
    </nav>
  </header>
</template>

<style scoped>
 
.router_link{
   color : rgb(255, 255, 255);
   text-decoration: none;
}
ul{
  margin: 0%;
}

header{
  background-color: var(--firts-color);
  display : flex;
  min-height: 9vh;
  justify-content:space-between;
  box-sizing : border-box;
  padding-left: 3%;
  max-width: 100%;
}
.header_nav{
  max-width:30%;
  min-width: 30%;
  
}

.logo{

max-width: 8%;
}
.logo img{
max-width: 100%;
}



.app_nav{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  
 
  padding: 0%;
  
}

#link_especial ul {
  z-index: 1;
  display: flex;
  top: -200%;
  position: absolute;
  right: 0%;
  transition: all 0.3s ease;
  flex-direction: column;
  transform: scaleY(30%);
  opacity: 0%;

 
}

.nav_app{
  
  width: 100%;

  height: 100%;
}
.router_link{
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 100%;
}

#link_especial{
  background-color: var(--second-color);
  width: 160%;
  border-radius: 43px 0 0;
  transition: all 0.5s ease;
  position: relative;
  
}


.especial_servicios{
  display: flex;

  
  
}


/*funcionalidad */
#link_especial:hover {
width: 260%;
border-radius: 0%;
}

#link_especial:hover ul {
  position: absolute;
  top:100%;
  background-color: var(--second-color);
  transform: scaleY(100%);
  opacity: 100%;
  padding: 0;

 
}

.cs{
  text-align: center;
  padding: 2rem;
  margin: 0%;
  width: 100%;
  
}

.cs:hover{
  background-color: rgb(230, 113, 4);
}

.link_normalito{
  position: relative;
position: relative;
display: flex;
flex-direction: column;
}

.link_normalito::after{
  content: "";
  
  position: absolute;
  top:70%;
  left: 15%;

  width: 0%;
  height: 3px;
  
  background-color: var(--second-color);
  
  transition: all 0.3s;
  
}
.link_normalito:hover::after{
  width: 70%;
}

#link_especial::after{
  content: "";
  
  position: absolute;
  top:70%;
  left: 15%;

  width: 0%;
  height: 3px;
  
  background-color: white;
  
  transition: all 0.3s;
}

#link_especial:hover::after{
  width: 70%;
}

</style>