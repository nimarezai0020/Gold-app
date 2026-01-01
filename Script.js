function calculate() {
  const weight = parseFloat(document.getElementById("weight").value) || 0;
  const pricePerGram = parseFloat(document.getElementById("pricePerGram").value) || 0;
  const makingPercent = parseFloat(document.getElementById("makingPercent").value) || 0;
  const profitPercent = parseFloat(document.getElementById("profitPercent").value) || 0;
  const taxPercent = parseFloat(document.getElementById("taxPercent").value) || 0;

  const making = (pricePerGram * makingPercent) / 100;
  const profit = (pricePerGram * profitPercent) / 100;
  const tax = (pricePerGram * taxPercent) / 100;

  const finalPricePerGram = pricePerGram + making + profit + tax;
  const totalPrice = finalPricePerGram * weight;

  document.getElementById("result").innerHTML = `
    <table class="result-table">
      <tr><th>جزئیات</th><th>مقدار (تومان)</th></tr>
      <tr><td>قیمت پایه هر گرم</td><td>${pricePerGram.toLocaleString()}</td></tr>
      <tr><td>اجرت هر گرم</td><td>${making.toLocaleString()}</td></tr>
      <tr><td>سود هر گرم</td><td>${profit.toLocaleString()}</td></tr>
      <tr><td>مالیات هر گرم</td><td>${tax.toLocaleString()}</td></tr>
      <tr><td><strong>قیمت نهایی هر گرم</strong></td><td><strong>${finalPricePerGram.toLocaleString()}</strong></td></tr>
      <tr><td><strong>قیمت کل</strong></td><td><strong>${totalPrice.toLocaleString()}</strong></td></tr>
    </table>
  `;
}