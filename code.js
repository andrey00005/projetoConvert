const USD = 5.18
const EUR = 6.14
const GBP = 6.98

const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")

// Limitar o amount para receber apenas números
amount.addEventListener("input", () => {
  
  const regex = /\D+/g
  amount.value = amount.value.replace(regex, "")
  // console.log(amount.value)
})

form.onsubmit = (e) => {
  e.preventDefault()
  // console.log(currency.value)
  switch (currency.value) { //Se Dólar(USD), Euro(EUR) ou Libras(GBP)
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break;

    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break;

    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break;
    
    default:
      break;
  }
}

function convertCurrency(amount, price, symbol) {
  
  try {
    
    description.textContent = (`${symbol} 1 = ${formatCurrencyBRL(price)}`)//formatCurrencyBRL(price) está mandando para a função, algum dos 3 valores, 5.18, 6.14 ou 6.98

    let total = amount * price  
    result.textContent = `${formatCurrencyBRL(total.toFixed(2))}`
    //ja aqui dessa vez a função  vai receber o valor da variável total

    if (isNaN(total)) {
      return alert("Por favor, digite o valor corretamente para converter")
    }

    footer.classList.add("show-result")
    
  } catch (error) {
    console.log(error)
    footer.classList.remove("show-result")

    alert("Não foi possível converter, tente novamente mais tarde")
  }
}

function formatCurrencyBRL(value) {
  
  return Number(value).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL"
});
}