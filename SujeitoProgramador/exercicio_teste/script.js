function calcular(event){
    event.preventDefault();

    let alcoolInput = document.getElementById ("alcool").value;
    let gasolinaInput = document.getElementById ("gasolina").value;
    let contentResult = document.getElementById ("content-result");
    let textResult = document.getElementById ("text-result");
    let alcoolSpan = document.getElementById ("açcool-result");
    let gasolinaSpan = document.getElementById ("gasolina-result");

    let calculo = (alcoolInput / gasolinaInput);
   
    if (calculo < 0.7) {
        textResult.innerHTML = "COMPENSA USAR ÁLCOOL"
    } else {
        textResult.innerHTML = "COMPENSA USAR GASOLINA"
    }

    alcoolSpan.innerHTML = "Álcool R$ " + alcoolInput;
    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput;
    contentResult.classList.remove ("hide")
}