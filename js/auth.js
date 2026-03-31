document.querySelector('.login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nomeUser').value;
    const senha = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/api/login-site', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include', // 🔥 ESSENCIAL
            body: JSON.stringify({ nome, senha })
        });

        const data = await response.json();

        if (response.ok) {
            // 🔥 REDIRECIONA PRO DASHBOARD
            window.location.href = "../pages/perfil.html";

        } else {
            alert("❌ " + data.message);
        }

    } catch (error) {
        console.error(error);
        alert("Erro ao conectar com o servidor");
    }
});

