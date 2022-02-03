
const bici = [
    {
        nome: "bici1",
        peso: 20
    },
    {
        nome: "bici2",
        peso: 30        
    },
    {
        nome: "bici3",
        peso: 5      
    }

];

 let pesomin = pesominore(bici);

/*
 const nome = bici[pesomin].nome;
 const peso = bici[pesomin].nome;
*/
const {nome,peso} = bici[pesomin];

console.log (`${nome} ${peso}`);

console.log (`${bici[pesomin].nome} ${bici[pesomin].peso}`)
 

console.log(nome,peso)

function pesominore(valore) {
   let i = 0;
    let pesoM = valore[i].peso;  
    for (let i = 0; i < valore.length; i++) {
       
        if (valore[i].peso < pesoM){

            pesoM = i;
         
        }          
    }
    return pesoM;
}

