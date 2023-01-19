const form = document.querySelector("#form-habits") // Recebendo o elemento form
const nlwSetup = new NLWSetup(form) // Instanciando a biblioteca
const button = document.querySelector("header button") // Recebendo o elemento button que está dentro do header

button.addEventListener("click", add) // Busca o clique no botão
form.addEventListener("change", save) // Busca alterações no form

function add() {
  // Pega o dia atual em formato DD/MM, verifica se ele existe, caso não ele adiciona ao form
  today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExist = nlwSetup.dayExists(today)
  if (dayExist) {
    alert("O dia já existe! 🔴")
  } else {
    nlwSetup.addDay(today)
    alert("O dia foi adicionado! ✅")
  }
}

function save() {
  // Função para salvar os dados no localStorage do navegador e converte para JSON
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))

}

// Converte de JSON para objeto
const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {} // Caso não exista nada, ele registra um objeto vazio
nlwSetup.setData(data) // Salva as informações
nlwSetup.load()