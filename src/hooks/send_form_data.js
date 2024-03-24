
import emailjs from '@emailjs/browser'

function send_email_service(formid, email, selectedService, text, phone, enviarDatos, classEnv) {
    const form = document.getElementById(formid);
    form ?  console.log('existe') : console.log('no existe')
   
    enviarDatos.value = 'enviando';
    
    emailjs.sendForm("service_9bsx2ld", "template_mjrkyh6", form, {
        texto_servicio: selectedService,
        texto_inquietud: text,
        texto_numero: phone,
        texto_correo: email,
    }).then((response) => {
        console.log('correo electrónico enviado:', response);
        enviarDatos.value = 'datos enviados';
        classEnv.value = 'g_touch_submit succes';
        console.log('ok', enviarDatos.value);
        console.log('ok2', classEnv.value);
    }).catch((error) => {
        console.error('Error al enviar el correo electrónico :(', error);
        enviarDatos.value = 'error, comunícate mejor por nuestras redes';
        classEnv.value = 'g_touch_submit error';
        
    });

    console.log(classEnv);
}

export { send_email_service };