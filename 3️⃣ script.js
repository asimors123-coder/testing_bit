let positions = [];
let totalCapital = 0;

function addPosition() {
  const coin = coinInput().value;
  const amount = +amountInput().value;
  const buyPrice = +buyPriceInput().value;
  const tp = tpInput().value;
  const sl = slInput().value;
  const note = noteInput().value;

  const investment = amount * buyPrice;

  positions.push({ coin, amount, buyPrice, investment, tp, sl, note });

  totalCapital += investment;

  render();
  clearForm();
}

function render() {
  const tbody = document.getElementById("positions");
  tbody.innerHTML = "";

  positions.forEach(p => {
    tbody.innerHTML += `
      <tr>
        <td>${p.coin}</td>
        <td>${p.amount}</td>
        <td>${p.buyPrice}</td>
        <td>${p.investment}</td>
        <td>${p.tp}</td>
        <td>${p.sl}</td>
        <td>${p.note}</td>
      </tr>
    `;
  });

  document.getElementById("invested").innerText = totalCapital;
  document.getElementById("totalCapital").innerText = totalCapital;
}

function clearForm() {
  document.querySelectorAll(".form input").forEach(i => i.value = "");
}

/* קיצורים */
const coinInput = () => document.getElementById("coin");
const amountInput = () => document.getElementById("amount");
const buyPriceInput = () => document.getElementById("buyPrice");
const tpInput = () => document.getElementById("tp");
const slInput = () => document.getElementById("sl");
const noteInput = () => document.getElementById("note");
``
