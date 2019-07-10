// declaro rutas

const rInicio = {template:'<div class="col-md-9">Inicio</div>'}


const router = new VueRouter({
    rutas:[
      {
        path:"/",
        name:"Inicio",
        component:"<div class='col-md-9'>Inicio</div>"
      }
    ]
});



//------------------------------> INICIALIZO VUE

const app = new Vue({
  router, //SIEMPRE -------------- DEBE SER router:loquesea
  data(){
    return{
      trabajos:[
        {
          id:'sistemaBursatil',
          titulo:'Consultas Online',
          subtitulo:'Sistema de consultas online para Empresa Bursatil',
          caracteristicas:'Login para el usuario; Recuperación de clave mediante e-mail; Cambio de clave; Consulta completa de cuenta; Filtro por fechas, especie y cantidad de resultados; Sistema administrativo; Registro de movimientos en la web tanto de los usuarios como de los administradores',
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
          media:[
            {

            }
          ],
          tecnologias:
          [
            "HTML",
            "CSS(Bootstrap, Semantic ui)",
            "JS(VueJS)",
            "PHP",
            "MYSQL",
            "WS(VB.NET/MSSQL)"
          ]
        }
      ]
    }
  }
}).$mount('#app');