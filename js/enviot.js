document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  let telefone = "5511972478627";

  let cliente = document.querySelector("#cliente").value;
  let data = document.querySelector("#data").value;
  let servico = document.querySelector("#servico").value;
  let duvida= document.querySelector("#duvida").value;
  let resp = document.querySelector("#resposta");
  
  resp.classList.remove("fail");
  resp.classList.remove("send");


let url = `https://api.whatsapp.com/send?phone=${telefone}&text=
		*_Alumínio Costruindo *Reservas*%0A%0A
		*Reservas*%0A%0A
		*QUAL É O SEU NOME?*%0A
		${cliente}%0A
		*Indique a data de Hoje*%0A
		${data}%0A
		*Qual sera o serviço que voce quer adquirir?*%0A
    ${servico}
    *QUAL É O SUA DUVIDA?*%0A
		${duvida}%0A`;


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
