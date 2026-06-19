// Centraliza la construcción de enlaces de WhatsApp y los mensajes precargados.

/**
 * Genera un enlace wa.me con el mensaje codificado.
 * @param {string} message - Texto que se precargará en el chat.
 * @returns {string}
 */
export function createWhatsAppLink(message) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const encodedMessage = encodeURIComponent(message || "");
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

// Mensajes precargados reutilizables en CTAs de todo el sitio.
export const waMessages = {
  general:
    "Hola Persianas Maperco, quiero cotizar persianas para mi casa/oficina. ¿Me pueden ayudar?",
  blackout:
    "Hola Persianas Maperco, quiero cotizar persianas blackout. Tengo medidas aproximadas y fotos del área.",
  screen:
    "Hola Persianas Maperco, quiero cotizar persianas screen para control solar y privacidad.",
  diaYNoche:
    "Hola Persianas Maperco, quiero cotizar persianas día y noche. ¿Me pueden asesorar?",
  enrollables:
    "Hola Persianas Maperco, quiero cotizar persianas enrollables a la medida.",
  romanas:
    "Hola Persianas Maperco, quiero cotizar cortinas romanas para mi espacio.",
  puertasPlegables:
    "Hola Persianas Maperco, quiero cotizar puertas plegables a la medida.",
  mosquiteros:
    "Hola Persianas Maperco, quiero cotizar mosquiteros a la medida.",
  reparacion:
    "Hola Persianas Maperco, necesito reparación o mantenimiento de persianas. ¿Les puedo enviar fotos?",
  mantenimiento:
    "Hola Persianas Maperco, quiero agendar el mantenimiento de mis persianas.",
  instalacion:
    "Hola Persianas Maperco, quiero agendar la instalación de persianas.",
  medicion:
    "Hola Persianas Maperco, quiero agendar una medición para instalar persianas.",
  foto:
    "Hola Persianas Maperco, les comparto una foto de mi ventana para cotizar.",
};

/**
 * Devuelve el enlace de WhatsApp para una clave conocida de waMessages.
 * @param {keyof typeof waMessages} key
 */
export function waLink(key = "general") {
  return createWhatsAppLink(waMessages[key] || waMessages.general);
}
