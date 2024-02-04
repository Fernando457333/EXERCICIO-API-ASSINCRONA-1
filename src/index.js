const express = require('express');
const { getCityFromZipcode, getPackageDescriptionNpm } = require('utils-playground');

const app = express();

app.get('/', async (req, res) => {
    const cidade = getCityFromZipcode('41256250');
    const cidade2 = getCityFromZipcode('44380000');

    const promise = await Promise.all([cidade, cidade2]);

    const [res1, res2] = promise;

    res.send(`A cidade encontrada foi:${res1} e ${res2}`)
});

app.get('/pacote/:nomePacote', async (req, res) => {
    const { nomePacote } = req.params;

    const descricaoPacote = await getPackageDescriptionNpm(nomePacote);

    return res.send(descricaoPacote)
})

app.listen(3000)