function cancelOrder() {
  const name = document.getElementById('d_name').textContent;
  const location = document.getElementById('d_location').textContent;
  const type = document.getElementById('d_type').textContent;

  if (!name && !location && !type) {
    alert("Herhangi bir sipariş bulunamadı.");
    return;
  }

  const confirmCancel = confirm("Siparişi iptal etmek istediğinizden emin misiniz?");
  if (confirmCancel) {
    document.getElementById('d_name').textContent = '';
    document.getElementById('d_location').textContent = '';
    document.getElementById('d_type').textContent = '';
    showScreen('home');
  }
} 
