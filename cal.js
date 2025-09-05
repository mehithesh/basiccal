const display=document.getElementById("display");
let current="";

document.querySelectorAll("button").forEach(button=>{
    button.addEventListener("click",()=>{
        const value=button.textContent;

        if(button.classList.contains("clear")){
            current="";
        }else if(button.classList.contains("equals")){
            try{
                current=eval(current.replace("%","/100"));
            }catch{
                current="error";
            }
        }else if(button.classList.contains("sqrt")){
            try{
                current=Math.sqrt(eval(current));
            }catch{
                current="error";
            }
        }else if(button.classList.contains("backspace")){
            current=current.slice(0,-1);
        }else{
            current+=value;
        }
        display.value=current;
    });
});


document.addEventListener("keydown", (e) => {
    const key = e.key;
  
    if ("0123456789+-*/.%".includes(key)) {
      current += key;
    } else if (key === "Enter") {
      try {
        current = eval(current.replace("%", "/100"));
      } catch {
        current = "Error";
      }
    } else if (key === "Backspace") {
      current = current.slice(0, -1);
    } else if (key === "Escape") {
      current = "";
    }
  
    display.value = current;
  });