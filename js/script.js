const container = document.querySelector(".container")

const start = document.querySelector(".start-match")

start.off = true;
console.log(container, start)

// BOTTONE
start.addEventListener("click" ,function(){
  
  for(let i = 1; i <= 100; i++){
    const quadrato = generateSquare();
    console.log(quadrato)
    container.append(quadrato)
    quadrato.Id = i;

    quadrato.addEventListener("click", function(){
      this.classList.toggle("click")
      console.log(this.Id)
      
    })
  }
  


  function generateSquare(){
    const generareQuadrato = document.createElement("div");
    generareQuadrato.className = "square";
    return generareQuadrato;
  }
})


