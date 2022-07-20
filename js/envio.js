document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  let telefone = "5511972478627";

  let cliente = document.querySelector("#cliente").value;
  let data = document.querySelector("#data").value;
  let hora = document.querySelector("#periodo").value;
  let empregado = document.querySelector("#empregado").value;
  let servico = document.querySelector("#servico").value;
  let resp = document.querySelector("#resposta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefone}&text=
		*_Alumínio Costruindo*%0A
		*Reservas*%0A%0A
		*QUAL É O SEU NOME?*%0A
		${cliente}%0A
		*Informe o dia da sua preferencia para a entrega*%0A
		${data}%0A
		*Indique uma melhor hora*%0A
		${hora}%0A
		*Empregado de preferencia*%0A
		${empregado}%0A
		*Qual sera o serviço que voce quer adquirir?*%0A
		${servico}`;

  window.open(url);
});
