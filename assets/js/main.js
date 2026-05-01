// Versão 1.0




const base = document.querySelector('.container');
/*
const elemento = [
  { tag : "h5", texto: "FRASE 1"},
  { tag : "h4", texto: "FRASE 2"},
  { tag : "h3", texto: "FRASE 3"},
  { tag : "h2", texto: "FRASE 4"}
];

console.log(elemento[0].texto);
for (let i = 0 ; i < elemento.length; i++ ) {
 
  function criarEstrutura() {
    
    const criaTag = document.createElement(elemento[i].tag);
    const criaTexto = document.createTextNode(elemento[i].texto)
    criaTag.appendChild(criaTexto);
    base.appendChild(criaTag);
  }
   if (i >= 3 ) {
    base.classList.add('active');
  }

criarEstrutura()
  
}
*/

// ------- Versão 2.0 


const elemento = [
  { tag : "h5", texto: "FRASE 1"},
  { tag : "h4", texto: "FRASE 2"},
  { tag : "h3", texto: "FRASE 3"},
  { tag : "h2", texto: "FRASE 4"}
];





function criarEstrutura(item) {
    
    const criaTag = document.createElement(item.tag);
    const criaTexto = document.createTextNode(item.texto)
    criaTag.appendChild(criaTexto);
    base.appendChild(criaTag);
  }

  elemento.forEach(function(item, index, copy){
    criarEstrutura(item);
  });