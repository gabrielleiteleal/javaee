/**
 * Confirmacao de exclusao de um contato
 * 
 * @author Gabriel Leal
 * @param idcon
 */

function confirmar(id) {
	let resposta = confirm("Confirmar a exclusão deste contato?");
	if (resposta === true) {
		window.location.href = "delete?id=" + id;
	}
}