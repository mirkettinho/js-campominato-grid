const container = document.querySelector(".container")

const start = document.querySelector(".start-match")

const difficolta = document.getElementById("difficolta")


console.log(container, start)

// BOTTONE
start.addEventListener("click" ,play);
  
  function play(){
    reset();

  
  for(let i = 1; i <= difficolta.value; i++){
    const quadrato = generateSquare();
    console.log(quadrato)
    container.append(quadrato)
    quadrato.Id = i;


    if(difficolta.value == 81){
      quadrato.classList.add("square-nine")
    }else if(difficolta.value == 49){
      quadrato.classList.add("square-seven")
    }else{
      quadrato.classList.add("square-ten")
    }

    quadrato.addEventListener("click", function(){
      this.classList.toggle("click")
      console.log(this.Id)
      
    })
  }
}
    
  

  function generateSquare(){
    const generareQuadrato = document.createElement("div");
    generareQuadrato.className = "square";
    return generareQuadrato;
  }

  function reset(){
    container.innerHTML = "";
  }


