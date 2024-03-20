import { defineStore } from 'pinia'
import { servicio_ciber } from './servicio/ciberStore'

const ciber = servicio_ciber


export const useservicesStore = defineStore('servicios', () => {
  
  const servicios =[
    {
      icon : "fa-solid fa-shield-halved",
      name: "Ciberseguridad",
      clase: 'normal',
      to:'Ciberseguridad'
    },
    {
      icon : "fa-solid fa-wifi",
      name: "Redes, Wi-fi y cableado estructurado",
      clase: 'normal',
      to:'RedesWifi&CableadoEstructurado'
    },
    {
      icon : "fa-solid fa-database",
      name: "Data center y Cloud",
      clase: 'normal',
      to:'DataCenter&Cloud'
    },
    {
      icon : "fa-solid fa-lock",
      name: "Seguridad electrónica",
      clase: 'round',
      to:'SeguridadElectronica'
    },
  ]
   
  const servicio = {
    
    ciber : {
      
      info: {
        fotoInfo : ciber.info.fotoInfo,
        titulo_info: ciber.info.titulo_info,
        texto_info : ciber.info.texto_info,
        precios : ciber.info.precios
      },

      plus : {
        texto_plus : ciber.plus.texto_plus,
        cards : ciber.plus.cards
      }

    },


    nosotros : {},
    data : {},
    rwc : {},
    segu : {},
  }
   
  return {servicios, servicio}
})

