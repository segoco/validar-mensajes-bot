const mensaje = "*Dirección* \nCalle 5 # 3-85 Esquina, Barrio El Centro | Código Postal: 763030 \n\n*Horario de atención* \nDe Lunes a Viernes, de 7:30 a.m. a 12:00 p.m. y de 1:30 p.m. a 6:00 p.m. \n\n*Ventanilla Única* \nSolo hasta las 04:00 p.m. \n\n*Teléfono Conmutador* \n(2) 223 83 56 \n\n*Línea de atención a PQRS* \n(2) 223 83 56 ext. 24 \n\n*Línea de atención gratuita* \n(2) 223 83 56 ext. 24 \n\n*Línea anticorrupción* \n(2) 223 83 56 ext. 24 \n\n*Correo institucional* \nalcaldia@sanpedro-valle.gov.co \n\n*Correo de notificaciones judiciales* \nalcaldia@sanpedro-valle.gov.co.";

// Función para convertir caracteres de escape a formato WhatsApp
function convertirEscapeWhatsApp(texto) {
  return texto
    .replace('\\n', '\n') // Reemplazar escape de salto de línea por salto de línea real
    .replace('\\r', '\r') // Reemplazar escape de retorno de carro por retorno de carro real
    .replace('*', '**') // Agregar asteriscos para negrita
    .replace('_', '_') // Agregar guiones bajos para cursiva
}

// Imprimir el mensaje convertido
const mensajeConvertido = convertirEscapeWhatsApp(mensaje);
console.log(mensajeConvertido);