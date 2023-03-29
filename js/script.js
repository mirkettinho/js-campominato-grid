const container = document.querySelector(".container")

const start = document.querySelector(".start-match")

console.log(container, start)


start.addEventListener("click" ,function(){

  for(let i = 0; i < 100; i++){
    const quadrato = generateSquare();
    console.log(quadrato)
    container.append(quadrato)
  }
  


  function generateSquare(){
    const generareQuadrato = document.createElement("div");
    generareQuadrato.className = "square";
    return generareQuadrato;
  }
})


