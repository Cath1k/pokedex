// Mapa de colores para cada tipo
const typeColorMap = {
    'normal': '#A8A878',
    'fire': '#F08030',
    'water': '#6890F0',
    'electric': '#F8D030',
    'grass': '#78C850',
    'ice': '#98D8D8',
    'fighting': '#C03028',
    'poison': '#A040A0',
    'ground': '#E0C068',
    'flying': '#A890F0',
    'psychic': '#F85888',
    'bug': '#A8B820',
    'rock': '#B8A038',
    'ghost': '#705898',
    'dark': '#705848',
    'dragon': '#7038F8',
    'steel': '#B8B8D0',
    'fairy': '#EE99AC'
};

document.addEventListener('DOMContentLoaded', () => {
    let pokedexData = [];
    let currentGeneration = getGenerationFromURL();

    // Obtener la generación del archivo HTML actual
    function getGenerationFromURL() {
        const pathname = window.location.pathname;
        if (pathname.includes('index.html') || pathname.endsWith('/pokedex/')) return 1;
        if (pathname.includes('Gen2.html')) return 2;
        if (pathname.includes('Gen3.html')) return 3;
        if (pathname.includes('Gen4.html')) return 4;
        if (pathname.includes('Gen5.html')) return 5;
        if (pathname.includes('Gen6.html')) return 6;
        if (pathname.includes('Gen7.html')) return 7;
        if (pathname.includes('Gen8.html')) return 8;
        if (pathname.includes('Gen9.html')) return 9;
        return 1; // Por defecto Gen 1
    }

    // Cargar datos del JSON
    fetch('./pokedex.json')
        .then(response => response.json())
        .then(data => {
            pokedexData = data.pokedex.filter(pokemon => pokemon.generation === currentGeneration);
            renderPokedex();
        })
        .catch(error => console.error('Error cargando el JSON:', error));

    const pokemonGrid = document.getElementById('pokemon-grid');
    
    function createPokemonCard(pokemon, index) {
        const formattedId = String(pokemon.id).padStart(3, '0');
        
        const typeTags = pokemon.types.map(type => 
            `<span class="type-tag type-${type.toLowerCase()}">${type}</span>`
        ).join('');

        const card = document.createElement('div');
        card.classList.add('pokemon-card', 'animated-card');
        card.style.animationDelay = `${index * 0.03}s`;
        
        // Establecer variables CSS para los colores de los tipos
        const primaryType = pokemon.types[0].toLowerCase();
        const secondaryType = pokemon.types[1]?.toLowerCase() || '';
        
        const primaryColor = typeColorMap[primaryType] || '#A8A878';
        const secondaryColor = secondaryType ? (typeColorMap[secondaryType] || '#A8A878') : primaryColor;
        
        card.style.setProperty('--type-primary-color-glow', primaryColor);
        card.style.setProperty('--type-secondary-color-glow', secondaryColor);

        card.innerHTML = `
            <p class="number">#${formattedId}</p>
            <div class="image" aria-label="Pokébola de ${pokemon.name}"></div>
            <h2 class="name">${pokemon.name}</h2>
            <div class="types">${typeTags}</div>
        `;
        
        return card;
    }

    function renderPokedex() {
        pokemonGrid.innerHTML = ''; // Limpiar grid
        pokedexData.forEach((pokemon, index) => {
            const card = createPokemonCard(pokemon, index);
            pokemonGrid.appendChild(card);
        });
    }

    // --- LÓGICA DE TEMAS ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Cargar tema guardado
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }

    // Toggle de tema
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // --- LÓGICA DE MENÚ HAMBURGUESA ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        const isExpanded = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
        menuToggle.textContent = isExpanded ? '✕' : '☰'; 
    });

    // --- LÓGICA DE DROPDOWN DE GENERACIONES ---
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        if (toggle && menu) {
            toggle.addEventListener('click', (event) => {
                event.stopPropagation();
                // Cierra otros dropdowns abiertos
                document.querySelectorAll('.dropdown-menu.active').forEach(openMenu => {
                    if (openMenu !== menu) {
                        openMenu.classList.remove('active');
                    }
                });
                menu.classList.toggle('active');
            });

            // Lógica para cerrar el menú en móvil al hacer click en un enlace
            menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    // Cierra el menú desplegable móvil después de hacer click
                    if (window.innerWidth <= 768) {
                        navLinks.classList.remove('active');
                        menuToggle.textContent = '☰'; 
                    }
                });
            });
        }
    });

    // Cierra el menú desplegable al hacer clic fuera
    window.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
            menu.classList.remove('active');
        });
    });
});