const { config } = require("dotenv");
const nodemailer = require("nodemailer");
config();

/**
 * Transporte del mensaje configurado con los datos para el envio
 */
const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
});

/**
 * Funcion para enviar el email
 * @param {
 *  from: string,
 *  to: string,
 *  subject: string,
 *  text: string,
 * } mail
 * @returns
 */
function sendEmail(mail) {

  // Creamos una promesa del envio
  return new Promise((resolve, reject) => {

    // Enviamos el email
    transport.sendMail(mail,
      (error, _) => {

        // evaluamos el resultado
        error

        // En caso de error retornamos el error
        ? reject({
            statusCode: 500,
            body: error,
          })

        // En caso de exito retornamos el exito
        : resolve({
            statusCode: 200,
            body: JSON.stringify("Email enviado con éxito a " + mail.to),
          });

      }
    );

  });
}

/**
 * Funcion para dar el formato correcto al mensaje
 * @param {
 *  from: string,
 *  to: string,
 *  subject: string,
 *  text: string,
 * } mail
 * @returns
 */
function formatMessage(mail) {
return `
Formulario de contacto enviado por ${mail.name} - ${mail.email}.

El mensaje es el siguiente:
${mail.message}
`;
}

exports.handler = async (event, context)=> {
  switch(event.httpMethod){
    // En caso de que sea un metodo post, que es el correcto
    case "POST":

      // Obtenemos los parametros de la petición
      const params = JSON.parse(event.body);

      // Enviamos el email y retornamos el resultado
      return await sendEmail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: "CONTACTO - " + params.affair,
          text: formatMessage(params),
      });

    // En caso de que sea un metodo no soportado
    default:

      // Retornamos el error
      return {
          statusCode: 405,
          message: "Método no soportado"
      }

  }
}
