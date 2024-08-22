const URL = "https://dog.ceo/api/breeds/image/random";
const img = document.getElementById("cao-img");

async function gerar(){
    try {
        const resposta = await fetch(URL);
        const data = await resposta.json();

        if(data.status != "success"){
            throw new Error();
        }

        img.src = data.message;
    } catch {
        alert("Houve um erro de processamento")
    }
    

}

gerar()