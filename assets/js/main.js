function calculate() {
    const nettoBrutto = document.querySelector("#nettoBrutto").checked;
    const bruttoNetto = document.querySelector("#bruttoNetto").checked;
    const mwst7 = document.getElementById("mwst7").checked;
    const mwst19 = document.getElementById("mwst19").checked;
    const nettobetrag = document.getElementById("amount").value;
    
    let output = document.getElementById("result");
    let result;

    if (nettoBrutto) {
        if (mwst7) {
            result = nettobetrag * 1.07;
            output.innerHTML = "<p>Bruttobetrag: " + result.toFixed(2) + " €</p>" + "<p>Mehrwertsteuer: " + (result - nettobetrag).toFixed(2) + " €</p>"
        } 
        else if (mwst19) {
            result = nettobetrag * 1.19;
            output.innerHTML = "<p>Bruttobetrag: " + result.toFixed(2) + " €</p>" + "<p>Mehrwertsteuer: " + (result - nettobetrag).toFixed(2) + " €</p>"
        }
    }
    else if (bruttoNetto) {
        if (mwst7) {
            result = nettobetrag / 1.07;
            output.innerHTML = "<p>Nettobetrag: " + result.toFixed(2) + " €</p>" + "<p>Mehrwertsteuer: " + (result - nettobetrag).toFixed(2) + " €</p>"
        } 
        else if (mwst19) {
            result = nettobetrag / 1.19;
            output.innerHTML = "<p>Nettobetrag: " + result.toFixed(2) + " €</p>" + "<p>Mehrwertsteuer: " + (result - nettobetrag).toFixed(2) + " €</p>"
        }
    }
}
