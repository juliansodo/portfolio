// declaro rutas

const rInicio = {template:``}


const router = new VueRouter({
    rutas:[
      {
        path:"/",
        name:"Inicio",
        component:rInicio
      }
    ]
});

//------------------------------> INICIALIZO VUE

const app = new Vue({
  router, //SIEMPRE -------------- DEBE SER router:loquesea
  data(){
    return{
      deck:
      [
        [
          {
            id:'sistemaBursatil',
            titulo:'Consultas Online',
            subtitulo:'Sistema de consultas online para Empresa Bursatil',
            caracteristicas:
            [
            ' Login para el usuario',
            ' Recuperación de clave mediante e-mail',
            ' Cambio de clave',
            ' Consulta completa de cuenta',
            ' Filtro por fechas, especie y cantidad de resultados',
            ' Sistema administrativo',
            ' Registro de movimientos en la web tanto de los usuarios como de los administradores',
            ],
            responsivo:true,
            tareasUsuario:[
              'El usuario podrá consultar el estado de su cuenta, el saldo, tanto en pesos como en dólares',
              'El usuario podrá ver el estado de sus inversiones en tablas y gráficos',
              'También podrá ver los precios de las especies en cualquier día (sin API);',
              'Posibilidad de exportar tablas en CSV',
              'CUENTA CORRIENTE - TENENCIA - HISTÓRICO - RESULTADO - OPERACIONES - PRECIOS '
            ],
            admin: true,
            tareasAdministrador:
            [
            'Alta, baja y modificación de los usuarios, posibilidad de deshabilitar o bloquear cuenta temporalmente.',
            'Creación de cuenta con contraseña aleatoria, el nuevo usuario recibirá un e-mail con la contraseña.',
            'El ceo de la empresa posee una query, la cual sirve para realizar ciertas cosas dentro de la web.',
            'El administrador tiene un registro de todo lo que sucede en la web, tanto para los usuarios como los administradores.',
            'Personalización del sitio.',
            'El administrador puede recibir consultas y leerlas dentro del panel, pudiendo responderlas en el lugar. '
            ],
            tieneVideo:false,
            media:[
              {id:0,tipo:"img",path:"media/sistemaBursatil1.jpg"},
              {id:1,tipo:"img",path:"media/sistemaBursatil2.jpg"},
              {id:2,tipo:"img",path:"media/sistemaBursatil3.jpg"},
              {id:3,tipo:"img",path:"media/sistemaBursatil4.jpg"},
              {id:4,tipo:"img",path:"media/sistemaBursatil5.jpg"},
              {id:5,tipo:"img",path:"media/sistemaBursatil6.jpg"},
              {id:6,tipo:"img",path:"media/sistemaBursatil7.jpg"},
              {id:7,tipo:"img",path:"media/sistemaBursatil8.jpg"},
              {id:8,tipo:"img",path:"media/sistemaBursatil9.jpg"},
              {id:9,tipo:"img",path:"media/sistemaBursatil10.jpg"}
            ],
            tecnologias:
            [
              "HTML",
              "CSS(Bootstrap, Semantic ui)",
              "JS(vanilla)",
              "PHP(+SMTP)",
              "MYSQL",
              "Web services(VB.NET/MSSQL)"
            ],
            tieneDemo:true,
            demostracion:
            {
              url:"http://rembursatil.jvsdigital.com/micuenta.php",
              credenciales:[
                {tipo:"Número de comitente", dato: "15500"},
                {tipo:"Contraseña", dato:"test"}
              ],
              aclaracion:"Se recomienda filtrar por una fecha desde 2018 en adelante."
            }
          },
          {
            id:'perfilInversor',
            titulo:'Perfil del Inversor',
            subtitulo:'Formulario para conocer el perfil de los inversores de X empresa.',
            caracteristicas:[
              'Login para el usuario mediante número de comitente y documento.',
              'Información del comitente a la vista.',
              'Declaración jurada del formulario.',
              'Creación de imagen de la pantalla al enviar el formulario y guardado en formato BLOB dentro de la BD.'
            ],
            responsivo:true,
            tareasUsuario:[
              'El usuario podrá loguearse y completar el formulario',
              'Podrá refrescar la información colocada siempre que lo necesite',
              'Podrá ver su puntaje y perfil en el momento.'
            ],
            admin: false,
            tareasAdministrador:[],
            tieneVideo:false,
            media:[
              {id:0,tipo:"img",path:"media/perfilinversor/perfilInversor1.jpg"},
              {id:1,tipo:"img",path:"media/perfilinversor/perfilInversor2.jpg"},
              {id:2,tipo:"img",path:"media/perfilinversor/perfilInversor3.jpg"},
              {id:3,tipo:"img",path:"media/perfilinversor/perfilInversor4.jpg"},

            ],
            tecnologias:
            [
              "HTML",
              "CSS(Bootstrap, Semantic ui)",
              "JS(+librerias)",
              "PHP",
              "MYSQL",
              "WS(VB.NET/MSSQL) para extracción de datos."
            ],
            tieneDemo:true,
            demostracion:
            {
              url:"https://jvsdigital.com/perfilinversor/",
              credenciales:[
                {tipo:"Usuario", dato: "805"},
                {tipo:"Tipo de documento", dato: "CUIT"},
                {tipo:"Número de CUIT", dato:"20123456781"}
              ],
              aclaracion:"El login puede fallar por problemas ajenos en la base de datos. Reintentar."
            }
          },
          {
            id:'ruletaBar',
            titulo:'Ruleta',
            subtitulo:'Ruleta con premios para bares',
            caracteristicas:[
              'Login mediante código.',
              'Información del Bar en la vista.',
              'Generación de boletos arbitrariamente',
              'Bloqueo de boleto al usarlo.',
              'Fecha de generación de boleto',
              'Al usar un boleto se guarda el premio, las condiciones y la mesa que usó el boleto.',
              'Se puede generar infinitos premios y la ruleta se adaptará a la cantidad que haya.',
              'Log de los boletos creados y utilizados con fecha incluida.'
            ],
            responsivo:true,
            tareasUsuario:[
              'El usuario puede loguearse con el código del boleto las veces que quiera hasta que éste sea utilizado',
              'El usuario tira de la ruleta y gana un premio.'
            ],
            admin: true,
            tareasAdministrador:[
              'El administrador puede generar boletos para las mesas',
              'El administrador puede crear y modificar premios.',
              'El administrador puede dar de baja boletos que no se hayan usado.'
            ],
            tieneVideo:false,
            media:[
              {id:0,tipo:"img",path:"media/ruletabar/ruletaBar1.jpg"},
              {id:1,tipo:"img",path:"media/ruletabar/ruletaBar2.jpg"},
              {id:2,tipo:"img",path:"media/ruletabar/ruletaBar3.jpg"},
              {id:3,tipo:"img",path:"media/ruletabar/ruletaBar4.jpg"},
            ],
            tecnologias:
            [
              "HTML",
              "CSS(Bootstrap)",
              "JS(vueJS + librerías)",
              "PHP(Laravel 5.8)",
              "MYSQL"
            ],
            tieneDemo:true,
            demostracion:
            {
              url:"http://ruleta.jvsdigital.com",
              credenciales:[
                {tipo:"Código de boleto", dato: "0805"}
              ],
              aclaracion:"La ruleta puede fallar por problemas ajenos en la base de datos. Reintentar."
            }
          }
        ],
        [
          {
              id:'pcuSAMP',
              titulo:'Panel de control de usuario',
              subtitulo:'Panel de control de usuario para servidores de juegos de tipo RolePlay',
              caracteristicas:[
                'Registro de cuenta con selección de imagen y firma',
                'Generación de documento virtual al finalizar registro, éste funciona como firma en el foro',
                'Login mediante usuario y contraseña',
                'Notificaciones, eventos.',
                'Foro incluído (SMF)',
                'Estadisticas, Vehículos, Propiedades, Negocios, Mercado',
                'Vista de las estadísticas del usuario',
                'Vista de los vehículos del usuario.',
                'Vista de las propiedades del usuario.'
              ],
              responsivo:true,
              tareasUsuario:[
                'El usuario puede registrarse e iniciar sesión, recuperar clave si le hace falta.',
                'El usuario puede ver sus estadísticas',
                'El usuario puede reportar a otro mediante el panel',
                'El usuario puede publicar a la venta cosas de su propiedad',
                'El usuario puede leer notificaciones, eventos y posts de su agrado (conexión con el foro)'
              ],
              admin: true,
              tareasAdministrador:[
                'El administrador puede sancionar cuentas',
                'Puede bloquear y desbloquear cuentas',
                'Puede modificar cuentas',
                'Puede generar notificaciones generales o a un usuario en particular',
                'Puede crear eventos.',
                'Puede eliminar o modificar publicaciones de productos en venta.'
              ],
              tieneVideo:true,
              video:{tipo:"video/mp4", path:"media/pcusamp/registro.mp4"},
              media:[
                {id:0,tipo:"img",path:"media/pcusamp/pcu7.jpg"},
                {id:1,tipo:"img",path:"media/pcusamp/pcu2.jpg"},
                {id:2,tipo:"img",path:"media/pcusamp/pcu3.jpg"},
                {id:3,tipo:"img",path:"media/pcusamp/pcu4.jpg"},
                {id:4,tipo:"img",path:"media/pcusamp/pcu5.jpg"},
                {id:5,tipo:"img",path:"media/pcusamp/pcu6.jpg"},
                {id:6,tipo:"img",path:"media/pcusamp/pcu1.jpg"},
              ],
              tecnologias:
              [
                "HTML",
                "CSS(Bootstrap)",
                "JS(vueJS + librerías)",
                "PHP(Laravel 5.8)",
                "MYSQL - MSSQL"
              ],
              tieneDemo:false,
              demostracion:
              {
                url:"",
                credenciales:[
                  {tipo:"", dato: ""}
                ],
                aclaracion:""
              }
            },
            {
              id:'mercadoWeb',
              titulo:'Simple Compra-Venta',
              subtitulo:'Mercado de compra-venta de bienes para servidor de juego de tipo roleplay',
              caracteristicas:[
                'Publicación productos a la venta.',
                'Orden por tipo de producto para organizar una venta y tener más repercusión.',
                'Filtro de productos para una mejor ubicación del interés del usuario.',
              ],
              responsivo:true,
              tareasUsuario:[
                'El usuario puede crear publicaciones para vender sus productos.'
              ],
              admin: true,
              tareasAdministrador:[
                'El administrador puede modificar y eliminar publicaciones.'
              ],
              tieneVideo:true,
              video:{tipo:"video/mp4", path:"media/mercadoweb/mercado4.mp4"},
              media:[
                {id:0,tipo:"img",path:"media/mercadoweb/mercado1.jpg"},
                {id:1,tipo:"img",path:"media/mercadoweb/mercado2.jpg"},
                {id:2,tipo:"img",path:"media/mercadoweb/mercado3.jpg"},
                {id:3,tipo:"img",path:"media/mercadoweb/mercado4.jpg"},
              ],
              tecnologias:
              [
                "HTML",
                "CSS(Bootstrap)",
                "JS(vueJS + librerías)",
                "PHP(Laravel 5.8)",
                "MYSQL - MSSQL"
              ],
              tieneDemo:false,
              demostracion:
              {
                url:"",
                credenciales:[
                  {tipo:"", dato: ""}
                ],
                aclaracion:""
              }
            },
            {
              id:'ecommerceEstatico',
              titulo:'Plantilla Ecommerce',
              subtitulo:'Sitio Ecommerce estático',
              caracteristicas:[
                'Generación del sitio mediante archivo JSON',
                'Carrusel de imágenes de ofertas',
                'Vista de productos',
                'Filtro de productos por Marca y Categoría'
              ],
              responsivo:true,
              tareasUsuario:[
                'El usuario puede interactuar con el sitio para encontrar ofertas y productos de su interés.'
              ],
              admin: false,
              tareasAdministrador:[],
              tieneVideo:false,
              video:{tipo:"", path:""},
              media:[
                {id:0,tipo:"img",path:"media/fizzmod/1.jpg"},
                {id:1,tipo:"img",path:"media/fizzmod/2.jpg"},
                {id:2,tipo:"img",path:"media/fizzmod/3.jpg"},
                {id:3,tipo:"img",path:"media/fizzmod/4.jpg"},
                {id:4,tipo:"img",path:"media/fizzmod/5.jpg"}
              ],
              tecnologias:
              [
                "HTML",
                "CSS",
                "JS(vanilla)"
              ],
              tieneDemo:true,
              demostracion:
              {
                url:"http://fizzmod.jvsdigital.com",
                credenciales:[
                  {tipo:"", dato: ""}
                ],
                aclaracion:""
              }
            }   
        ]
      ]
    }
  }
}).$mount('#app');