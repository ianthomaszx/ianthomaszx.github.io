document.getElementById('calculate').addEventListener('click', function () {
    const os = document.getElementById('os').value * 0.815152;
    const apt = (document.getElementById('apt').value) * 0.098488;
    const itens = document.getElementById('itens').value * 0.011579;

    const total = os + apt + itens;

    document.getElementById('total').innerHTML = (total.toFixed(2).replace('.', ',') + "%");
});