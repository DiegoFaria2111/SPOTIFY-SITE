async function salvarEndereco(){
    const url= "https://go-wash-api.onrender.com/api/auth/address";

    let titulo = document.getElementById("titulo").value;
    let cep = document.getElementById("cep").value;
    let endereco = document.getElementById("enderco").value;
    let numero = document.getElementById("numero").value;

    let user = localStorage.getItem('user');
    let token = JSON.parse(user).access_token;

    let apiEndereco = await fetch(url,{
        method:"POST",
        body:JSON.stringify({
            "title": titulo,
            "cep": cep,
            "address": endereco,
            "number": numero
        }),
        headers:{
            'Content-Type': 'application/json',
            "Authorization": "Bearer "+token
        }
    });

    let response = await apiEndereco.json();
    
    console.log(response);
    alert("Endereço cadastrado com sucesso");
    window.location.href = "home.html";
}
