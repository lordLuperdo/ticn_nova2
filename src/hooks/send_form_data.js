import emailjs from '@emailjs/browser'



const send_email_service = (formid,email,selectedService,text,phone,enviar_datos)=>{
    const form = document.getElementById(formid)
    enviar_datos.value = 'enviando'
    emailjs.sendForm("service_9bsx2ld","template_mjrkyh6",form,{
    texto_servicio: selectedService.value,
    texto_inquietud: text.value,
    texto_numero: phone.value,
    texto_correo: email.value,
    }).then((respnse) =>{
        console.log('correo electronico enviado:', response)
        enviar_datos.value('datos enviados')
    }).catch((error) => {
       enviar_datos.value
    })
}