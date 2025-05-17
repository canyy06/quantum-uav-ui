function showScreen(id) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function submitOrder() {
  const name = document.getElementById('name').value;
  const location = document.getElementById('location').value;
  const type = document.getElementById('type').value;

  if (!name || !location) {
    alert("Lütfen tüm bilgileri doldurun.");
    return;
  }

  document.getElementById('d_name').textContent = name;
  document.getElementById('d_location').textContent = location;
  document.getElementById('d_type').textContent = type;

  showScreen('details');
}
