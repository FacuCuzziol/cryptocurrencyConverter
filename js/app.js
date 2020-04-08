
const cotizador = new API('58d77032c6ab23b386d05ba4be243a979ad730187a1c5c0464237a2bceaa247c');
const ui = new Interfaz();
cotizador.obtenerMonedasAPI();



//leo formulario 

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    //leer moneda
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    console.log(monedaSeleccionada);

    //leer criptomnoeda

    const criptomonedaSelect = document.querySelector('#criptomoneda');
    const criptomonedaSeleccionada = criptomonedaSelect.options[criptomonedaSelect.selectedIndex].value;

    console.log(criptomonedaSeleccionada);

    if(monedaSeleccionada === '' || criptomonedaSeleccionada === ''){
        ui.mostrarMensaje('Ambos campos son obligatorios','alert bg-danger text-center');
    } else{
        cotizador.obtenerValores(monedaSeleccionada,criptomonedaSeleccionada)
            .then(data =>{
                ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada,criptomonedaSeleccionada);
            })
    }
})