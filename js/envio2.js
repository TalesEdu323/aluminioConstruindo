document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    let telefone = "5511972478627";
    let cliente = document.querySelector("#cliente").value;
    let resp = document.querySelector("#resposta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=${telefone}&text=
          *_Alumínio Costruindo*%0A
          *Duvidas Gerais*%0A%0A
          *QUAL É O SEU NOME?*%0A
          ${cliente}`;    
  
    if (cliente === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Sera enviado sua reserva, ${cliente}`;
  
    window.open(url);
  });

  
