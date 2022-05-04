
const expresiones = {
	nombres: /^[a-zA-ZÀ-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
	contraseña: /^.{8,12}$/, // 8 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.].{1,2}$/,
	telefono: /^\d{7,10}$/ // 7 a 10 numeros.
}
const form = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
console.log(inputs);

const validarInput = (e) => {

    switch (e.target.name) {
        case "nombre":
            
            validarCampos(expresiones.nombres, e.target, e.target.name);
            //  console.log(expresiones.e.target.name);
        break;
        case "apellido":
           
            validarCampos(expresiones.nombres, e.target, 'apellido');
            // console.log(expresiones.nombres);
            // console.log(e.target);
            // console.log('apellido');
            
        break;
        case "contraseña":
           
            validarCampos(expresiones.contraseña, e.target, e.target.name);
            // console.log(e.target.value);
            
        break;
        case "confirmar":
        
        
            
        break;
        case "correo":
           
            validarCampos(expresiones.correo, e.target, e.target.name);
            
        break;
        // case "cargo":
            
           
        //     if(e.target.value == "0"){
        //         document.getElementById(`input_${e.target.name}`).classList.remove('input_Validado');
        //         document.getElementById(`input_${e.target.name}`).classList.add('input_Erroneo');
        //         alert('Seleccione un cargo');
        //     }else{
        //         document.getElementById(`input_${e.target.name}`).classList.remove('input_Erroneo');
        //     }

        //     console.log(e.target.value);

            
        // break;
        case "telefono":
           
            validarCampos(expresiones.telefono, e.target, e.target.name);
            
        break;
        case "genero":
           
            
            
        break;
        case "fecha":
           

            
            // e.target.addEventListener('change', () => {
            //     console.log(fechaNacimiento.value);
            
        break;
        case "edad":
           
            
            
        break;
        case "terminos":
           
            
            
        break;
    
        default:
            break;
    } 


}

    function validarSelect(){
        

        var cargo = document.getElementById('cargo');
            if(cargo.value == "0"|| cargo.value == ""){

                cargo.classList.remove('input_Validado');
                cargo.classList.add('input_Erroneo');
                return;
                
            }else{
                cargo.classList.remove('input_Erroneo');
                cargo.classList.add('input_Validado');
                // alert('seleccion exitosa');
                
                

            }
            console.log(cargo.value);

            // const calcularEdad = () => {

                





        // if(document.getElementById('cargo').value == ""){
        //     document.getElementById('input_cargo').classList.remove('input_Validado');
        //     document.getElementById('input_cargo').classList.add('input_Erroneo');
        //     alert('Seleccione un cargo');
        // }else{
        //     document.getElementById('input_cargo').classList.remove('input_Erroneo');
        // }
        
        // console.log(validarSelect);
    
    }

const validarCampos = (expresion, input, campo) => {

    // console.log("sin errores");
    if (expresion.test(input.value)) {
        // console.log(e.target.value)
        
        document.getElementById(`input_${campo}`).classList.remove('input_Erroneo');
        document.getElementById(`input_${campo}`).classList.add('input_Validado');
    }else{
        document.getElementById(`input_${campo}`).classList.remove('input_Validado');
        document.getElementById(`input_${campo}`).classList.add('input_Erroneo');
    }


}



inputs.forEach((input)=>{ 
    input.addEventListener('keyup', validarInput);
    input.addEventListener('blur', validarInput);
});



form.addEventListener('submit', (e) => {

    e.preventDefault();
    // document.getElementsByName('cargo').forEach(element => {
    // element.addEventListener('blur', validarSelect());

    // });



   
    
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







