document.querySelector('.login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nomeUser').value;
    const senha = document.getElementById('password').value;

    try {
        const response = await fetch(`${API_URL}/api/login-site`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ nome, senha })
        });

        const data = await response.json();

        if (response.ok) {
            window.location.href = "../pages/perfil.html";
        } else {
            alert("❌ " + data.message);
        }
    } catch (error) {
        console.error(error);
        alert("Erro ao conectar com o servidor");
    }
});
