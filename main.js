const call = document.querySelector("button")
const call2 = document.querySelector(".asy")
const joke = document.getElementById("joke")
const products = document.getElementById("products")
call.addEventListener('click',()=>{
    callAPI()
})
const user_name= "mario"

call2.addEventListener('click',()=>{
    betterCallToApi()
})
const callAPI = () =>{
    fetch(`https://api.chucknorris.io/jokes/random?name=${user_name}`).then(response => response.json()).then(data =>  joke.innerHTML= data.value).catch(err => console.log(err.message))
    
}
const betterCallToApi = async() =>{
    const req = await fetch("https://api.chucknorris.io/jokes/random")
    const data = await req.json()
    joke.innerHTML = data.value;
}

(async function(){
    const req = await fetch("https://fakestoreapi.com/products")
    const data = await req.json()
    await data.forEach(element => {
        const produt = document.createElement("div");
        
        const productTitle = document.createElement("h1");
        const productImage = document.createElement("img");
        productTitle.innerHTML = element.title;
        productImage.src = element.image;
        productImage.style.maxWidth =150;
        produt.append(productImage,productTitle)
        products.append(produt);
        produt.classList.add("container__product")

    });
})()