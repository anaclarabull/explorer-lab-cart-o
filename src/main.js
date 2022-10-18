import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg > g g:nth-child(1) path")
// querySelector = busque pelo seletor, ou seja, como  é chamado no css
// > g significa que quer o g "pai", ou seja, primeiro nível de g
// g:nth-child(1) significa que quer o primeiro g filho
const ccBgColor02 = document.querySelector(".cc-bg svg > g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")






function setCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    mastercard: ["#DF6F29", "#C69347"],
    default: ["black", "gray"],
  }

  ccBgColor01.setAttribute("fill", colors[type][0])
  // setAttribute funcionalidade que vai receber dois argumentos: primeiro arg -> nome do atributo que quer atualizar. Segundo arg -> colocar o que quer atualizar
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccLogo.setAttribute("src", `cc-${type}.svg`)

}

globalThis.setCardType = setCardType