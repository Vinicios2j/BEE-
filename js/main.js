// Função para selecionar a plataforma
function selectPlatform(type) {
    console.log(`Plataforma selecionada: ${type}`);
    
    // Efeito de feedback visual antes de redirecionar
    if(type === 'mobile') {
        window.location.href = '../pages/planos.html';
    } else {
        window.location.href = '../pages/planos.html';
    }
}

document.getElementById("btnEntrar").addEventListener("click", (event) => {
    const paginaAtual = window.location.pathname.split("/").pop();

    console.log(paginaAtual);

    if (paginaAtual === "plataformas.html") {
        window.location.href = 'login.html';
    }else if (paginaAtual === "planos.html") {
        window.location.href = 'login.html';
    }else if (paginaAtual === "index.html") {
        window.location.href = '/pages/login.html';
    }

});

// Animação suave ao scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 10, 10, 0.95)';
        nav.style.padding = '15px 8%';
    } else {
        nav.style.background = 'rgba(15, 15, 15, 0.8)';
        nav.style.padding = '20px 8%';
    }
});

function toggleMenu() {
    const menu = document.getElementById("menu-list");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.position = "absolute";
        menu.style.top = "70px";
        menu.style.left = "0";
        menu.style.width = "100%";
        menu.style.background = "rgba(15, 15, 15, 0.95)";
        menu.style.padding = "20px";
        menu.style.textAlign = "center";
    }
}