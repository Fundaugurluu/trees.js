const express = require('express');
const bodyParser = require('body-parser');
const AramaAgaci = require('./AramaAgaci'); 
const PORT = 3000;
const tree = new AramaAgaci();
const app = express();
app.use(bodyParser.json());



//req istemciden gelen isteği res yanıt
//nodes/leaves...endpoint
//(req.body) value alanını alır. eklenecek dugumun degerini temsil eder.
app.post('/nodes',(req,res) =>{
    const value=req.body.value
    tree.insert(value)
    res.send(dugum ${value} eklendi);

}
)


app.get('/nodes/search/:value', (req, res) => {
    const value = parseInt(req.params.value, 10);
     res.send(tree.search(tree.root, value));
});

app.get('/nodes/max',(req,res)=>{
res.send(tree.findMax(tree.root))

});

  app.get('/nodes/min', (req, res) => {
    res.send(tree.findMin(tree.root));
});

app.delete('/nodes/leaves/',(req,res)=>
{
    tree.deleteLeaves(tree.root)
    res.send('yapraklar silindi')
}

);


app.delete('/nodes', (req, res) => {
 tree.root = tree.deleteTree(tree.root);
    res.send('Agac silindi.');
});

app.put('/nodes/:value', (req, res) => {
    const oldValue = parseInt(req.params.value, 10);
    const newValue = req.body.value;
    const updated = tree.updateNode(oldValue, newValue);

    if (updated) {
        res.send(`Düğüm ${oldValue} güncellendi ve yeni değer ${newValue} oldu.`);
    } else {
        res.status(404).send(`Düğüm ${oldValue} bulunamadı.`);
    }
});



