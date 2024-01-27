document.getElementById('calculate').addEventListener('click', function () {
    const os = document.getElementById('os').value * 0.684286;
    const apt = (document.getElementById('apt').value) * 0.213571;
    const itens = document.getElementById('itens').value * 0.002708;

    const total = os + apt + itens;

    document.getElementById('total').innerHTML = (total.toFixed(2).replace('.', ',') + "%");
});