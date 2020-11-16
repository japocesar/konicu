import { faChild, faComments, faEnvelopeOpenText, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
export const cards = [
    { 
        titulo: 'Expresarte',
        descripcion: 'Para participar en la galería de Expresarte sólo envía tus materiales a nuestro correo o Messenger. Puedes participar con un tema divertido, bonito, asombroso, y que sea algo artístico y original, es decir una idea tuya.',
        clase: 'card mx-auto mt-2',
        icono: faComments,
        subiconos: [
            { icono: faFacebookMessenger, link:'http://m.me/clubkonicu', nombre: 'Messenger' },
            { icono: faEnvelopeOpenText, link:'mailto:expresate@clubkonicu.com', nombre: 'Email' }
        ],
    },
    { 
        titulo: 'Soy su fan',
        descripcion: 'Para participar en "Soy su Fan" ve al siguiente link:',
        clase: 'card mx-auto mt-2',
        icono: faChild,
        subiconos: [
            { icono: faPaperPlane, link:'https://bit.ly/34P1Tby', nombre: 'Soy su Fan' },
        ]
    },
]