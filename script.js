// ثبت سرویس‌ورکر برای PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(reg => console.log('Service Worker ثبت شد:', reg))
      .catch(err => console.error('خطا در ثبت Service Worker:', err));
  });
}

// دکمه نصب PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const installBtn = document.getElementById('installBtn');
  if (installBtn) installBtn.style.display = 'block';
});

async function installPWA() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  console.log('نتیجه نصب:', outcome);
  deferredPrompt = null;
  document.getElementById('installBtn').style.display = 'none';
}

// تابع محاسبه
function calculate() {
  const weight = parseFloat(document.getElementById('weight').value) || 0;
  const pricePerGram = parseFloat(document.getElementById('pricePerGram').value) || 0;
  const makingPercent = parseFloat(document.getElementById('makingPercent').value) || 0;
  const profitPercent = parseFloat(document.getElementById('profitPercent').value) || 0;
  const taxPercent = parseFloat(document.getElementById('taxPercent').value) || 0;

  const base = weight * pricePerGram;
  const making = base * (makingPercent / 100);
  const profit = (base + making) * (profitPercent / 100);
  const tax = (base + making + profit) * (taxPercent / 100);
  const total = base + making + profit + tax;

  document.getElementById('result').innerText = `قیمت نهایی: ${total.toLocaleString('fa-IR')} تومان`;
}