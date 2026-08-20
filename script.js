//Botão curtidas
document.addEventListener("DOMContentLoaded", () =>{
    const likeBtn = document.querySelector(".left-actions .actions-bnt:first-child");
    if(!likeBtn)return;
    const likeSvg = likeBtn.querySelector("svg");


    //localiza o contador

    let textNode = array.from(likeBtn.childNodes).find(node) => mode.nodeType
    === Node.TEXT_NODE && node.textContent.trim() !== ""
);

//zero o contador
let cont = 0;

//atualiza
if(textNode);{
     textNode.textContent = '0';
}

//coração
function apllyLikeStyle(){
likeSvg.style.fill = "#ef4444";
likeSvg.style.stronk = "#ef4444";
likeSvg.style.color = "#ef4444";


//efeito cutida
likeSvg.style.transform = "scale(1.3)";
setTimeout(() => (likeSvg.style.transform = "scale(1)")150);


})
