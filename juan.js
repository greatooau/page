for(let i = 0; i < 5; ++i) {
    document
    .getElementsByClassName("container")[0]
    .innerHTML += `
    <div class="counter">
        <h3>Contador Taquilla ${i + 1}</h3>
        <button onClick="eo(${i + 1})">Iniciar</button>
        <button onClick="ania(${i + 1})">Parar</button>
        <div class="juanito"></div>
        <div class="john"></div>
    </div>` 
}

const eo = (index) => {
    document.getElementsByClassName("juanito")[index-1].innerHTML = `Hora de inicio: ${new Date().toLocaleTimeString()}`
    // setInterval(() => {
    //     document.getElementsByClassName("john")[index-1].innerHTML = `${new Date().toLocaleTimeString()}`
    // }, 1000)
    document.getElementsByClassName("john")[index-1].innerHTML = ``
};

const ania = (index) => {
    document.getElementsByClassName("john")[index-1].innerHTML = `Hora final: ${new Date().toLocaleTimeString()}`    
};