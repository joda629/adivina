let submit= document.getElementById("submit")
let random=Math.ceil(Math.random() *20 )
let info=document.getElementById("info")
let num = document.getElementById("number")
let int=6;
let show=document.getElementById("show")
let img=document.querySelector("img")
let form=document.getElementById("form")


submit.addEventListener("click", function(e)
{
    if(num.value == "")
    {
        alert("Debes ingresar un número");
        window.location.reload()
    }
    else 
    {
        if(int > 0)
        {
            if(num.value < random)
            {
                info.innerHTML="El número es mas grande";
                int--;
                show.removeChild(show.children[0])
            }
            else if(num.value > random)
            {
                
                info.innerHTML="El número es mas pequeño";
                int--;

                show.removeChild(show.children[0])
            }
            else if(num.value == random)
            {
                if(int == 1)
                {
                    alert("Felicidades adivinaste el número " + random + " y te quedó " + int + " vida");
                    window.location.reload()
                    form.reset()
                   num.value=""
                }
                else 
                {
                    alert("Felicidades adivinaste el número " + random + " y te quedaron " + int + " vidas");
                    window.location.reload()
                    form.reset()
                   num.value=""
                }
            }
        }
        else 
        {
            alert("Lo sentimos no tienes mas vidas")
            window.location.reload()
                    form.reset()
            num.value=""
        }


        
    }
    
    
})


num.addEventListener("click", () =>
{
        let label=document.getElementById("label")

        label.classList.add("up")
})

//document.write(random)