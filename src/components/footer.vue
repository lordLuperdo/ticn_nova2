<script>
const { RouterLink } = 'vue-router';

</script>
<template>
    <footer>
        <div class="footer_logo">
            <img src="../assets/logo_tic.png" alt="">
        </div>
      

        <div class="container_footer_lista">
            <h3 class="titulos_footer">Servicios</h3>
            <ul class="footer_lista">
                <li class="f_link">
                    <div class="f_link_container">
                        <div class="link_icon fa-solid fa-shield-halved"></div>
                        <div class="link_footer">
                            <RouterLink  class="footer_link" to="/Ciberseguridad">Ciberseguridad</RouterLink>
                        </div>
                    </div>
                </li>
                <li class="f_link">
                    <div class="f_link_container">
                        <div class="link_icon fa-solid fa-wifi"></div>
                        <div class="link_footer">
                            <RouterLink  class="footer_link" to="/RedesWifi&CableadoEstructurado">Redes, Wi-fi y cableado estructurado</RouterLink>
                        </div>
                    </div>
                </li>
                <li class="f_link">
                    <div class=" f_link_container">
                        <div class="link_icon fa-solid fa-lock"></div>
                        <div class="link_footer">
                            <RouterLink to="/SeguridadElectronica"  class="footer_link">Seguridad electrónica</RouterLink>
                        </div>
                    </div>
                </li>
                <li class="f_link">
                    <div class="f_link_container">
                        <div class="link_icon fa-solid fa-database"></div>
                        <div class="link_footer">
                           <RouterLink to="/DataCenter&Cloud" class="footer_link">Data center y Cloud</RouterLink> 
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="container_footer_lista">
            <h3 class="titulos_footer">Redes de contacto</h3>
            <ul class="footer_lista">
                <li class="f_link">
                    <div class="f_link_container">
                        <div class="link_icon fa-brands fa-instagram"></div>
                        <div class="link_footer">
                            <a href="" class="footer_link">Instagram</a>
                        </div>
                    </div>
                </li>
                <li class="f_link">
                    <div class="f_link_container">
                        <div class="link_icon fa-brands fa-facebook"></div>
                        <div class="link_footer">
                            <a href="" class="footer_link">Facebook</a>
                        </div>
                    </div>
                </li>
                <li class="f_link">
                    <div class="f_link_container">
                        <div class="link_icon fa-regular fa-envelope"></div>
                        <div class="link_footer">
                            <a href="" class="footer_link">Correo</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <div class="container_footer_lista">
            <h3 class="titulos_footer">Sitios de interes</h3>
            <ul class="footer_lista">
                <li class="f_link">
                    <div class="f_link_container">
                        <div class="link_icon fa-solid fa-book"></div>
                        <div class="link_footer">
                           <RouterLink to="/DataCenter&Cloud" class="footer_link">Blog</RouterLink> 
                        </div>
                    </div>
                </li>
                <li class="f_link">
                    <div class="f_link_container">
                        <div class="link_icon fa-solid fa-user"></div>
                        <div class="link_footer">
                           <RouterLink to="/Nosotros" class="footer_link">Nosotros</RouterLink> 
                        </div>
                    </div>
                </li>
            </ul>
        </div>

    </footer>
</template>
<style>

footer{
    padding: 2%;
    align-items:start;
    background-color: var(--firts-color);
    display: flex;
    gap: 4%;
    max-height: 27vh;
   
}
.footer_logo{
    margin-top: 4%;
    max-width: 28%;
}
.footer_logo img{
    max-width: 100%;
    
}
.container_footer_lista{
    
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 20%;
}

.footer_link{
    color: white;
    text-decoration: none;
}

.f_link_container{
    display: flex;
    gap: 5%;
    align-items: center;
  
}

.footer_lista{
display: flex;
flex-direction: column;
gap: 1rem;

justify-content: left;
padding: 0%;
}



.link_icon{
    color: white;
    
}

.titulos_footer{
    text-align: left;
    
    margin-bottom: 7%;
    color: var(--second-color);
}

.f_link{
    position: relative;
}

/**hover */
.f_link::after{
content: "";

position: absolute;
top: 120%;
left: 10%;

width: 0%;
height: 3px;

background-color: var(--second-color);

transition: all 0.5s;
}

.f_link:hover::after{
    width: 70%;
}
/* responsive */
@media (width <= 763px) {
  footer{
    flex-direction: column;
    align-content: center;
    max-height: none;
    padding: 10px;
    align-items: center;
    padding-top: 10%;
    padding-bottom: 10%;
  }
  .footer_logo{
    max-width: 80%;
  }
  .container_footer_lista{
    width: 80%;
    margin-top: 8%;
  }
  
   }
</style>