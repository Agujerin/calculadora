// CALCULADORA

const visorElement = document.getElementById ("visor")
let numero=""
let numeros=[]
let cero =""

const clear =(()=>{
    numero= cero
    numeros.splice(0)
})

//FUNCIONES DE OPERACIONES

const suma =((a, b)=> parseFloat(a) + parseFloat(b))
const resta =((a, b)=> parseFloat(a) - parseFloat(b))
const multi =((a, b)=> parseFloat(a) * parseFloat(b))
const div =((a, b)=> parseFloat(a) / parseFloat(b))
const sqrt = ((a)=> Math.sqrt(parseFloat(a)))
const cbrt = ((a)=> Math.cbrt(parseFloat(a)))
const pow = ((a,b)=> Math.pow(parseFloat(a),b))
const fact =((a)=>{
    let res = 1
    for (i=a; i>=1; i--){
        res *= i
    }  return res
})
const result = ((a)=>{
    visor.textContent = a
    numero=a
    numeros.splice(0) 
})

//EVENTOS (suma, resta, multiplicación y división)

contenedor.addEventListener("click",(e)=>{
    let num = e.target.innerText
    numero += num
    visor.textContent = numero
    if (num == "+" ||num == "-" ||num == "*" ||num == "/"){
        numeros.push(numero)
        numero= cero
    }
    else if (num == "raíz²") {
        numeros.push(numero)
        numero = 0
        let resultado = sqrt(numeros[0])
        result(resultado)  
    }
    else if (num == "raíz³") {
        numeros.push(numero)
        numero = 0
        let resultado = cbrt(numeros[0])
        result(resultado)    
    }
    else if (num == "x²") {
        numeros.push(numero)
        numero = 0
        let resultado = pow(numeros[0],2)
        result(resultado)   
    }
    else if (num == "x³") {
        numeros.push(numero)
        numero = 0
        let resultado = pow(numeros[0],3)
        result(resultado)    
    }
    else if (num == "fact") {
        numeros.push(numero)
        numero = 0
        let resultado = fact(parseFloat(numeros[0]))
        result(resultado) 
    }

    if (num== "="){
        numeros.push(numero)
        
        if(numeros[0].includes("+")){
            let resultado= suma(numeros[0],numeros[1])
            result(resultado) 
        }
        else if(numeros[0].includes("-")){
            let resultado= resta(numeros[0],numeros[1])
            result(resultado) 
        }
        else if(numeros[0].includes("*")){
            let resultado= multi(numeros[0],numeros[1])
            result(resultado) 
        }
        else if(numeros[0].includes("/")){
            let resultado= div(numeros[0],numeros[1])
            result(resultado) 

        }else { visor.textContent = "error"}
    }

    if(num=="C") {
        clear()
        visor.textContent = numero
    }   
})


// MIAU
document.getElementById ("miau").addEventListener("click",()=>{
    document.getElementById ("background").classList.add("miau")
})





