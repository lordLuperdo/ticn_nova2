<script setup>
import heads from '../../components/header.vue'
import foots from '../../components/footer.vue'
import { useservicesStore } from '@/stores/servicios';
import service from '@/components/services/service.vue';


const {servicios, servicio} = useservicesStore()
</script>
<template>
    <heads></heads>
     
    <service

    :foto = "servicio.ciber.info.fotoInfo"
    :titulo ="servicio.ciber.info.titulo_info"
    :text ="servicio.ciber.info.texto_info"
    :array_precios_card ="servicio.ciber.info.precios"
    :text_plus="servicio.ciber.plus.texto_plus"
    :array_card_plus ="servicio.ciber.plus.cards"
    :s = "servicios"
    :title_card_service="servicios"
    :icon_card_service="servicios"
    :class_card_service="servicios"
    :to_card_service = "servicios"
    >
    </service>

    <foots></foots>

</template>
