
const url = 'http://localhost:8089/api/hurto'

const listarHurtos = async() => {
    let body = document.getElementById('contenido')
    if(body){
        let mensaje = ''

        fetch(url)
        .then(res => res.json())
        .then(function (data){
            let listarHurtos = data.hurtos
            listarHurtos.map((hurto) =>{
                mensaje += 
                `<tr>
                    <td>${hurto.direccion}</td>
                    <td>${hurto.latitud}</td> 
                    <td>${hurto.longitud}</td>
                    <td>${hurto.descripcion}</td>
                    <td>${hurto.fecha}</td>
                    <td><button type="button" class="btn btn-primary" href="#modal1" onclick='editar(${JSON.stringify(hurto)})'>Editar</button>
                   <a type="button" class="btn btn-danger" href="#" onclick='eliminar("${hurto._id}")'>Eliminar</a>
                   </td>
                </tr>`
                body.innerHTML = mensaje
            })
        })
    }
}

listarHurtos()

const registrarHurto = async() =>{
    let direccion = document.getElementById('direccion').value 
    let latitud = document.getElementById('latitud').value
    let longitud = document.getElementById('longitud').value
    let descripcion = document.getElementById('descripcion').value

    let hurto = {
        direccion: direccion,
        latitud: latitud,
        longitud: longitud,
        descripcion: descripcion
    }

    fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(hurto),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })

    .then(response => response.json())
    .then(json => {
        alert(json.mensaje)
    })
}

const eliminar = (_id) => {
    if(confirm('Esta seguro de realizar la elimicaion') == true){
        let hurto = {
            _id: _id,
        }

        fetch(url,{
            method: 'DELETE',
            mode:  'cors',
            body: JSON.stringify(hurto),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(json => {
            alert(json.mensaje)
        })
    }
}


if(document.querySelector('#registrar')){
    document.querySelector('#registrar')
    .addEventListener('click', registrarHurto)
}
