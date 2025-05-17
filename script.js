const games = [
    {
        title: "Cyber Adventure",
        description: "Game hành động phiêu lưu trong thế giới tương lai.",
        price: 599000,
        image: "https://via.placeholder.com/250x150?text=Cyber+Adventure"
    },
    {
        title: "Fantasy Quest",
        description: "Khám phá thế giới giả tưởng với những nhiệm vụ ly kỳ.",
        price: 799000,
        image: "https://via.placeholder.com/250x150?text=Fantasy+Quest"
    },
    {
        title: "Space Shooter",
        description: "Game bắn súng không gian đầy kịch tính.",
        price: 499000,
        image: "https://via.placeholder.com/250x150?text=Space+Shooter"
    },
    {
        title: "Racing Mania",
        description: "Trải nghiệm đua xe tốc độ cao.",
        price: 699000,
        image: "https://via.placeholder.com/250x150?text=Racing+Mania"
    }
];

let cartCount = 0;

function formatPrice(price) {
    return price.toLocaleString('vi-VN') + ' VNĐ';
}

function renderGames() {
    const gameGrid = document.getElementById('game-grid');
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
                <div class="price">${formatPrice(game.price)}</div>
                <button class="buy-btn" onclick="addToCart()">Thêm vào giỏ</button>
            </div>
        `;
        gameGrid.appendChild(gameCard);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert('Đã thêm game vào giỏ hàng!');
}

renderGames();