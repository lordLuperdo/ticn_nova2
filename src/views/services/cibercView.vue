<script setup>
  import { ref } from 'vue';
  import heads from '../../components/header.vue';
  import foots from '../../components/footer.vue';
  import { useservicesStore } from '@/stores/servicios';
  import service from '@/components/services/service.vue';
  import { send_email_service } from '../../hooks/send_form_data';
  import emailjs from '@emailjs/browser';


  const class_enviar_datos = ref('g_touch_submit');
  const enviar_datos = ref('Enviar datos');
  const email = ref('');
  const selected_Service = 'ciberseguridad';
  const text = ref('');
  const phone = ref('');

  const { servicios, servicio } = useservicesStore();

  emailjs.init('HZJR_BmzqZWxZywyx')


  const handleSubmit = () => {
    send_email_service(
      'myForm',
      email.value,
      selected_Service,
      text.value,
      phone.value,
      enviar_datos,
      class_enviar_datos
    );
  };
</script>

<template>
  <heads></heads>

  <service
    :foto="servicio.ciber.info.fotoInfo"
    :titulo="servicio.ciber.info.titulo_info"
    :text="servicio.ciber.info.texto_info"
    :array_precios_card="servicio.ciber.info.precios"
    :text_plus="servicio.ciber.plus.texto_plus"
    :array_card_plus="servicio.ciber.plus.cards"
    :s="servicios"
    :title_card_service="servicios"
    :icon_card_service="servicios"
    :class_card_service="servicios"
    :to_card_service="servicios"
    :valor_servicio="selected_Service"
    :inquietud_service="text"
    :telefono_service="phone"
    :email_service="email"
    :metodo="handleSubmit"
    :enviar_datos="enviar_datos"
    :class_env="class_enviar_datos"
  ></service>
  
  <foots></foots>
</template>
