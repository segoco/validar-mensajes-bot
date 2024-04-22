const mensaje = `Este es un mensaje de prueba con caracteres de escape:
\n Salto de línea
\r Retorno de carro
*Texto en negrita*
_Texto en cursiva_`;

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