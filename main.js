document.getElementById('container').onchange = function() {
    let bill = Number(document.getElementById('billTotal').value);
    let tipPercent = document.getElementById('tipInput').value;
    let split = document.getElementById('splitInput').value;
    let tipValue = bill * (tipPercent / 100);
    let newBillEach = (bill + tipValue) / split;
    let tipEach = tipValue / split;
    let valueOFItbis = bill * 0.18;


    document.getElementById('tipsOutput').innerHTML = tipPercent + "%";
    document.getElementById('splitsOutput').innerHTML = split;
    document.getElementById('newBill').innerHTML = "$ " + newBillEach.toFixed(2);
    document.getElementById('tipEach').innerHTML = "$ " + tipEach.toFixed(2);
    document.getElementById('itbis18').innerHTML = "$ " + valueOFItbis.toFixed(2);

    /*document.getElementById('newBill').innerHTML = newBillEach.toFixed(2);
    document.getElementById('tipEach').innerHTML = tipEach.toFixed(2); 

    let newBillEach = "$" + Math.floor((bill + tipValue) / split);
    let tipEach = "$" + Math.floor(tipValue / split);
    */
}