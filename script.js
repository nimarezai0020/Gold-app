// تابع محاسبه قیمت طلا
function calculate() {
  const weight = parseFloat(document.getElementById("weight").value) || 0;
  const pricePerGram = parseFloat(document.getElementById("pricePerGram").value) || 0;
  const makingPercent = parseFloat(document.getElementById("makingPercent").value) || 0;
  const profitPercent = parseFloat(document.getElementById("profitPercent").value) || 0;
  const taxPercent = parseFloat(document.getElementById("taxPercent").value) || 0;

  // محاسبه اجرت، سود و مالیات
  const making = (pricePerGram * makingPercent) / 100;
  const profit = (pricePerGram * profitPercent) / 100;
  const tax = (pricePerGram * taxPercent) / 100;

  // قیمت نهایی هر گرم
  const finalPricePerGram = pricePerGram + making + profit + tax;
  // قیمت کل
  const totalPrice = finalPricePerGram * weight;

  // نمایش همه جزئیات در جدول
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

// باز و بسته کردن منوی سه‌نقطه‌ای
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.getElementById("menuContent");

  menuBtn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });
});

// گزینه خروج
function exitApp() {
  alert("خروج از برنامه");
}

// نمایش پنجره (Modal)
function showModal(id) {
  document.getElementById(id).style.display = "block";
}

// بستن پنجره (Modal)
function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// بستن پنجره با کلیک روی پس‌زمینه
window.onclick = function(event) {
  const aboutModal = document.getElementById("aboutModal");
  const devModal = document.getElementById("devModal");

  if (event.target === aboutModal) {
    aboutModal.style.display = "none";
  }
  if (event.target === devModal) {
    devModal.style.display = "none";
  }
};
