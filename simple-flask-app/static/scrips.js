async function showMessage() {
    const response = await fetch('/click', { method: 'POST' });
    const data = await response.json();
    document.getElementById('message').innerText = data.message;
}