
const expresiones = {
	// usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const form = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


const validarInput = (e) => {

    switch (e.target.name) {
        case "nombre":
            // console.log("sin errores");
            if (expresiones.nombre.test(e.target.value)) {
                // console.log(e.target.value)
                document.getElementById('input_nombre').classList.remove('input_Erroneo');
                document.getElementById('input_nombre').classList.add('input_Validado');
            }else{
                document.getElementById('input_nombre').classList.add('input_Erroneo');
            }
            
            
        break;
        case "apellido":
           
            
            
        break;
        case "contraseña":
           
            
            
        break;
        case "confirmar":
           
            
            
        break;
        case "correo":
           
            
            
        break;
        case "cargo":
           
            
            
        break;
        case "telefono":
           
            
            
        break;
        case "genero":
           
            
            
        break;
        case "fecha":
           
            
            
        break;
        case "edad":
           
            
            
        break;
        case "terminos":
           
            
            
        break;
    
        default:
            break;
    } 


}


inputs.forEach((input)=>{ 
    input.addEventListener('keyup', validarInput);
    input.addEventListener('blur', validarInput);
});



form.addEventListener('submit', (e) => {

    e.preventDefault();





   
    
});




























// (function ()
// {

//     let bandera = false;
//     const validarNombre=()=>{
        
//         let expRegNombre = /^[A-Z]+$/i;
//         if (expRegNombre.test(nombre.value))
//         {   
//             bandera = true;
//         }
            
//         }
    
    
    





        
//         let validar = function(e){
//             e.preventDefault();
//             validarNombre();
//             validarApellido();
//             validarEmail();
//             validarPassword();
//             validarConfirmarPassword();
//             validarCheckbox();
//             validarRadio();
//             validarSelect();
//             validarTextArea();
//             validarFecha();
//             validarTelefono();

//             if (bandera=true) {
//                 alert('Compruebe los datos ingresados');
//             }




        
//         }

//         // const nombre = document.getElementById("nombre"),
//         //         form = document.getElementById("formulario"),
//         //         apellido = document.getElementById("apellido"),
//         //         contraseña = document.getElementById("contraseña"),
//         //         confirmar = document.getElementById("confirmar"),
//         //         correo = document.getElementById("correo"),
//         //         cargo = document.getElementById("cargo"),
//         //         telefono = document.getElementById("telefono"),
//         //         genero = document.getElementById("genero"),
//         //         nacimiento = document.getElementById("nacimiento"),
//         //         edad = document.getElementById("edad"),
//         //         terminos = document.getElementById("terminos");
                
                
                
//                 form.addEventListener("submit", validar);
            
//             }())







