document.addEventListener('DOMContentLoaded', () => {
    const johtoPokedex = [
        { id: 152, name: "Chikorita", types: ["Grass"] },
        { id: 153, name: "Bayleef", types: ["Grass"] },
        { id: 154, name: "Meganium", types: ["Grass"] },
        { id: 155, name: "Cyndaquil", types: ["Fire"] },
        { id: 156, name: "Quilava", types: ["Fire"] },
        { id: 157, name: "Typhlosion", types: ["Fire"] },
        { id: 158, name: "Totodile", types: ["Water"] },
        { id: 159, name: "Croconaw", types: ["Water"] },
        { id: 160, name: "Feraligatr", types: ["Water"] },
        { id: 161, name: "Sentret", types: ["Normal"] },
        { id: 162, name: "Furret", types: ["Normal"] },
        { id: 163, name: "Hoothoot", types: ["Normal", "Flying"] },
        { id: 164, name: "Noctowl", types: ["Normal", "Flying"] },
        { id: 165, name: "Ledyba", types: ["Bug", "Flying"] },
        { id: 166, name: "Ledian", types: ["Bug", "Flying"] },
        { id: 167, name: "Spinarak", types: ["Bug", "Poison"] },
        { id: 168, name: "Ariados", types: ["Bug", "Poison"] },
        { id: 169, name: "Crobat", types: ["Poison", "Flying"] },
        { id: 170, name: "Chinchou", types: ["Water", "Electric"] },
        { id: 171, name: "Lanturn", types: ["Water", "Electric"] },
        { id: 172, name: "Pichu", types: ["Electric"] },
        { id: 173, name: "Cleffa", types: ["Fairy"] },
        { id: 174, name: "Igglybuff", types: ["Normal", "Fairy"] },
        { id: 175, name: "Togepi", types: ["Fairy"] },
        { id: 176, name: "Togetic", types: ["Fairy", "Flying"] },
        { id: 177, name: "Natu", types: ["Psychic", "Flying"] },
        { id: 178, name: "Xatu", types: ["Psychic", "Flying"] },
        { id: 179, name: "Mareep", types: ["Electric"] },
        { id: 180, name: "Flaaffy", types: ["Electric"] },
        { id: 181, name: "Ampharos", types: ["Electric"] },
        { id: 182, name: "Bellossom", types: ["Grass"] },
        { id: 183, name: "Marill", types: ["Water", "Fairy"] },
        { id: 184, name: "Azumarill", types: ["Water", "Fairy"] },
        { id: 185, name: "Sudowoodo", types: ["Rock"] },
        { id: 186, name: "Politoed", types: ["Water"] },
        { id: 187, name: "Hoppip", types: ["Grass", "Flying"] },
        { id: 188, name: "Skiploom", types: ["Grass", "Flying"] },
        { id: 189, name: "Jumpluff", types: ["Grass", "Flying"] },
        { id: 190, name: "Aipom", types: ["Normal"] },
        { id: 191, name: "Sunkern", types: ["Grass"] },
        { id: 192, name: "Sunflora", types: ["Grass"] },
        { id: 193, name: "Yanma", types: ["Bug", "Flying"] },
        { id: 194, name: "Wooper", types: ["Water", "Ground"] },
        { id: 195, name: "Quagsire", types: ["Water", "Ground"] },
        { id: 196, name: "Espeon", types: ["Psychic"] },
        { id: 197, name: "Umbreon", types: ["Dark"] },
        { id: 198, name: "Murkrow", types: ["Dark", "Flying"] },
        { id: 199, name: "Slowking", types: ["Water", "Psychic"] },
        { id: 200, name: "Misdreavus", types: ["Ghost"] },
        { id: 201, name: "Unown", types: ["Psychic"] },
        { id: 202, name: "Wobbuffet", types: ["Psychic"] },
        { id: 203, name: "Girafarig", types: ["Normal", "Psychic"] },
        { id: 204, name: "Pineco", types: ["Bug"] },
        { id: 205, name: "Forretress", types: ["Bug", "Steel"] },
        { id: 206, name: "Dunsparce", types: ["Normal"] },
        { id: 207, name: "Gligar", types: ["Ground", "Flying"] },
        { id: 208, name: "Steelix", types: ["Steel", "Ground"] },
        { id: 209, name: "Snubbull", types: ["Fairy"] },
        { id: 210, name: "Granbull", types: ["Fairy"] },
        { id: 211, name: "Qwilfish", types: ["Water", "Poison"] },
        { id: 212, name: "Scizor", types: ["Bug", "Steel"] },
        { id: 213, name: "Shuckle", types: ["Bug", "Rock"] },
        { id: 214, name: "Heracross", types: ["Bug", "Fighting"] },
        { id: 215, name: "Sneasel", types: ["Dark", "Ice"] },
        { id: 216, name: "Teddiursa", types: ["Normal"] },
        { id: 217, name: "Ursaring", types: ["Normal"] },
        { id: 218, name: "Slugma", types: ["Fire"] },
        { id: 219, name: "Magcargo", types: ["Fire", "Rock"] },
        { id: 220, name: "Swinub", types: ["Ice", "Ground"] },
        { id: 221, name: "Piloswine", types: ["Ice", "Ground"] },
        { id: 222, name: "Corsola", types: ["Water", "Rock"] },
        { id: 223, name: "Remoraid", types: ["Water"] },
        { id: 224, name: "Octillery", types: ["Water"] },
        { id: 225, name: "Delibird", types: ["Ice", "Flying"] },
        { id: 226, name: "Mantine", types: ["Water", "Flying"] },
        { id: 227, name: "Skarmory", types: ["Steel", "Flying"] },
        { id: 228, name: "Houndour", types: ["Dark", "Fire"] },
        { id: 229, name: "Houndoom", types: ["Dark", "Fire"] },
        { id: 230, name: "Kingdra", types: ["Water", "Dragon"] },
        { id: 231, name: "Phanpy", types: ["Ground"] },
        { id: 232, name: "Donphan", types: ["Ground"] },
        { id: 233, name: "Porygon2", types: ["Normal"] },
        { id: 234, name: "Stantler", types: ["Normal"] },
        { id: 235, name: "Smeargle", types: ["Normal"] },
        { id: 236, name: "Tyrogue", types: ["Fighting"] },
        { id: 237, name: "Hitmontop", types: ["Fighting"] },
        { id: 238, name: "Smoochum", types: ["Ice", "Psychic"] },
        { id: 239, name: "Elekid", types: ["Electric"] },
        { id: 240, name: "Magby", types: ["Fire"] },
        { id: 241, name: "Miltank", types: ["Normal"] },
        { id: 242, name: "Blissey", types: ["Normal"] },
        { id: 243, name: "Raikou", types: ["Electric"] },
        { id: 244, name: "Entei", types: ["Fire"] },
        { id: 245, name: "Suicune", types: ["Water"] },
        { id: 246, name: "Larvitar", types: ["Rock", "Ground"] },
        { id: 247, name: "Pupitar", types: ["Rock", "Ground"] },
        { id: 248, name: "Tyranitar", types: ["Rock", "Dark"] },
        { id: 249, name: "Lugia", types: ["Psychic", "Flying"] },
        { id: 250, name: "Ho-Oh", types: ["Fire", "Flying"] },
        { id: 251, name: "Celebi", types: ["Psychic", "Grass"] }
    ];

    const pokemonGrid = document.getElementById('pokemon-grid');
    
    function createPokemonCard(pokemon, index) {
        const formattedId = String(pokemon.id).padStart(3, '0');
        
        const typeTags = pokemon.types.map(type => 
            `<span class="type-tag type-${type.toLowerCase()}">${type}</span>`
        ).join('');

        const card = document.createElement('div');
        card.classList.add('pokemon-card', 'animated-card');
        
        card.style.animationDelay = `${index * 0.03}s`;

        card.innerHTML = `
            <p class="number">#${formattedId}</p>
            <div class="image" aria-label="Pokébola de ${pokemon.name}"></div>
            <h2 class="name">${pokemon.name}</h2>
            <div class="types">${typeTags}</div>
        `;
        
        return card;
    }

    function renderPokedex() {
        johtoPokedex.forEach((pokemon, index) => {
            const card = createPokemonCard(pokemon, index);
            pokemonGrid.appendChild(card);
        });
    }

    renderPokedex();


    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });


    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        const isExpanded = navLinks.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
        menuToggle.textContent = isExpanded ? '✕' : '☰';
    });

    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        const menu = dropdown.querySelector('.dropdown-menu');

        if (toggle && menu) {
            toggle.addEventListener('click', (event) => {
                event.stopPropagation();
                
                document.querySelectorAll('.dropdown-menu.active').forEach(openMenu => {
                    if (openMenu !== menu) {
                        openMenu.classList.remove('active');
                    }
                });
                menu.classList.toggle('active');
            });

            menu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        navLinks.classList.remove('active');
                        menuToggle.textContent = '☰';
                    }
                });
            });
        }
    });

    window.addEventListener('click', () => {
        document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
            menu.classList.remove('active');
        });
    });
});