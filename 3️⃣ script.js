async function loadData() {
  const res = await fetch("https://YOUR_URL.ngrok-free.app/data");
  const data = await res.json();

  // Reports
  document.querySelectorAll(".report-card strong")[0].innerText =
    data.reports.open_positions;

  document.querySelectorAll(".report-card strong")[1].innerText =
    `+${data.reports.total_pnl} ₪`;

  document.querySelectorAll(".report-card strong")[2].innerText =
    data.reports.profit_count;

  document.querySelectorAll(".report-card strong")[3].innerText =
    data.reports.loss_count;

  // Open positions
  const table = document.querySelector("#home table");
  table.innerHTML = `
    <tr>
      <th>נכס</th><th>קנייה</th><th>מחיר</th><th>PnL</th>
    </tr>
  `;

  data.open_positions.forEach(p => {
    const cls = p.pnl >= 0 ? "green" : "red";
    table.innerHTML += `
      <tr>
        <td>${p.coin}</td>
        <td>${p.buy}</td>
        <td>${p.price}</td>
        <td class="${cls}">${p.pnl}%</td>
      </tr>
    `;
  });
}

// טוען אוטומטית כשהדף נפתח
loadData();
``
