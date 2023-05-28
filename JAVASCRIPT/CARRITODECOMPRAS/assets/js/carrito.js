console.log(document);
const carrito = document.getElementById('carrito'); /* llamando al elemento del html */
const bodyCarrito = document.querySelector('tbody');
const footerCarrito = document.querySelector('tfoot');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.getElementById('lista-cursos');
let arregloCarrito = [];

//llamando al metodo para que se ejecute
cargarEventos();

//Metodo para cargar todos los eventos
function cargarEventos(){
    //addEvenlistener
    listaCursos.addEventListener('click', agregarCurso);
    carrito.addEventListener('click', eliminarItem);

    vaciarCarrito.addEventListener('click', () => {
        Swal.fire({
            title: '¿Estas seguro de vaciar el carrito?',
            text: "Se eliminaran los cursos seleccionados!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Vaciar!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Se vacio el carrito!',
                'Se eliminaron los cursos.',
                'success'
              ).then(function(){
                arregloCarrito = [];
                limpiarHTML(bodyCarrito);
                limpiarHTML(footerCarrito);
              })
            }
        })
    })
}

/** agregando un curso */
function agregarCurso(e){
    //evitar que el hiperviculo siga a una url
    e.preventDefault();
    //condicionamos si la persona dio click al boton
    if(e.target.classList.contains('agregar-carrito')){
        /** verificando si esto me trae la informacion */
        console.log(e.target);
        /** devolviendo los elementos padre del boton agregar */
        const cursoseleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoseleccionado); //argumento es el valor que se le asigna al parametro
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Curso Agregado',
            showConfirmButton: false,
            timer: 1500
        })
    }
}

//metodo para almacenar un curso al arreglo
function leerDatosCurso(curso){ //parametro hace referencia a lo que el usuario me va a mandar
    console.log(curso);
    //creando un objeto de los valores que trae el curso
    const informacionCurso = {
        imagen: curso.querySelector('img').src, //capturando la ruta de la imagen
        titulo: curso.querySelector('h5').textContent,//sacando el texto del h5
        precio: curso.querySelector('.precio').textContent,//sacando el texto del parrafo del precio
        id: curso.querySelector('a').getAttribute('data-id'), //sacando el valor del data id del hipervinculo agregar
        cantidad: 1
    }
    //console.log(informacionCurso);
    //agregando los objetos del curso al arreglo
    //... nos ayuda hacer copias de los arreglos
    //guardamos en una copia el curso que habia seleccionado mas el actual
    //arregloCarrito = [...arregloCarrito, informacionCurso];

    //verificando si el curso existe en el arreglo
    //some, every => true o false
    const existe_curso = arregloCarrito.some( curso => curso.id === informacionCurso.id); //true o false
    if(existe_curso){ //true
        //console.log("El curso ya existe");
        //iterar el arreglo para verificar el curso que vamos a actualizar
       arregloCarrito.map(curso => {
            if(curso.id === informacionCurso.id){
                curso.cantidad +=1;//incrementamos en 1 la cantidad
                return curso;// retornamos toda la informacion del curso
            }else{
                return curso;//retornamos toda la informacion de cada curso
            }
        });      
    }else{
        arregloCarrito.push(informacionCurso);
    }
    console.table(arregloCarrito);
    //llamamos a la funcion para poner los cursos
    carritoHTML();   
}

/** metodo donde se va a mostrar la informacion del arreglo en la tabla */
function carritoHTML(){
    limpiarHTML(bodyCarrito);
    let total = 0; 
    arregloCarrito.map(curso => {
        //creando el elemento tr
        const fila = document.createElement('tr'); //<tr> <td></td></tr>
        
        let act_precio = curso.precio.slice(1, -1) //eliminamos el primer caracter
        //Number () => convierte el tipo de dato a int o double
        const subTotal = Number(act_precio * curso.cantidad);
        /**
         * mathRound() => aproxima decimales
         * toFixed() => cuantos decimales queremos que se viusalicen
         */
        fila.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td>$${subTotal.toFixed(2)}</td>
            <td>
                <a href="#" class="borrar-item" data-id="${curso.id}">X</a>
            </td>
        `;
        total += subTotal;
        //agregando el elemento tr al html (tbody)
        bodyCarrito.appendChild(fila); //appendChild()= agregamos hijos al contenedor que le indiquemos
    })
    limpiarHTML(footerCarrito);
    //asignacion de fila para el tfoot
    const fila_foot = document.createElement('tr');
    fila_foot.innerHTML = `
    <td colspan="4">Total del Pedido:</td>
    <td>$${total}</td>
    `;
    footerCarrito.appendChild(fila_foot);
}
/** metodo para eliminar hijos repetitivos */
function limpiarHTML(contenedorPadre){
    while(contenedorPadre.firstChild){
        contenedorPadre.removeChild(contenedorPadre.firstChild);
    }
}

/** metodo para confirmar el pedido */
function guardarPedido(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success ms-2',
          cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estas Seguro de Guardar el Pedido?',
        text: "El pedido se cargara a tu tarjeta!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Guardar Pedido',
        cancelButtonText: 'Cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Ha sido un exito!',
            'Pedido se ha guardado correctamente',
            'success'
          ).then(function(){
            //redirecciona a una pagina
            window.location = "index.html";
          })
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Puedes seguir agregando mas productos :)',
            'error'
          )
        }
    })
}


/** metodo para eliminar un item del pedido */
function eliminarItem(e){
    if(e.target.classList.contains('borrar-item')){
        //obtenemos el id del curso seleccionado
        const cursoId = e.target.getAttribute('data-id');

        //filtrando los cursos que sean diferentes al id seleccionado

        //map(), filter()
        arregloCarrito = arregloCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML();
    }
}

/*arregloCarrito = [
    {
        id: "1",
        titulo: "ghbjk",
        precio: "$15.00"
    },
    {
        id: "2",
        titulo: "ghbjk",
        precio: "$17.00"
    },
]*/
