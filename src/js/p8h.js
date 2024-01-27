document.getElementById('calculate').addEventListener('click', function () {
    const os = document.getElementById('os').value * 0.960714;
    const apt = (document.getElementById('apt').value) * 0.116923;
    const itens = document.getElementById('itens').value * 0.01375;

    const total = os + apt + itens;

    document.getElementById('total').innerHTML = (total.toFixed(2).replace('.', ',') + "%");
});