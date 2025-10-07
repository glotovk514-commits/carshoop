// Данные товаров
const products = [
    {
        id: 1,
        name: "Масляный фильтр Bosch",
        category: "filters",
        price: 850,
        originalPrice: 1050,
        image: "https://cdn1.ozone.ru/s3/multimedia-p/6019611925.jpg",
        description: "Высококачественный масляный фильтр для эффективной очистки моторного масла.",
        specifications: [
            "Резьба: 3/4-16 UNF",
            "Высота: 110 мм",
            "Диаметр: 80 мм",
            "Клапан противодренажный: есть"
        ],
        featured: false
    },
    {
        id: 2,
        name: "Тормозные колодки Brembo",
        category: "brakes",
        price: 4200,
        originalPrice: 5200,
        image: "https://www.access-honda.com/sitefiles/rawm/1000/Items/perednie-tormoznye-kolodki-brembo-22-eede4s.jpg",
        description: "Передние тормозные колодки с повышенной износостойкостью и отличными тормозными характеристиками.",
        specifications: [
            "Материал: керамический композит",
            "Толщина: 18 мм",
            "Совместимость: VW, Audi, Skoda",
            "Индикатор износа: есть"
        ],
        featured: true
    },
    {
        id: 3,
        name: "Амортизатор KYB",
        category: "suspension",
        price: 3200,
        image: "https://kyb.ru/gi/573c9c90f94a7c983f13160a.jpg",
        description: "Газонаполненный амортизатор для комфортной езды и улучшенной управляемости.",
        specifications: [
            "Тип: газовый",
            "Ход штока: 210 мм",
            "Резьба: M10x1.25",
            "Производитель: Япония"
        ],
        featured: false
    },
    {
        id: 4,
        name: "Свечи зажигания NGK",
        category: "engine",
        price: 1800,
        originalPrice: 2200,
        image: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-55/704/227/319/182/1/100022898180b0.jpg",
        description: "Иридиевые свечи зажигания для оптимального сгорания топлива и снижения расхода.",
        specifications: [
            "Калильное число: 7",
            "Зазор: 0.8 мм",
            "Резьба: M14x1.25",
            "Длина резьбы: 19 мм"
        ],
        featured: true
    },
    {
        id: 5,
        name: "Аккумулятор Varta",
        category: "electrical",
        price: 8900,
        image: "https://katod-tula.ru/upload/iblock/8ad/hkisjfmuay51u98gp5xx3ri58feijzq3.webp",
        description: "Необслуживаемый аккумулятор с технологией AGM для современных автомобилей.",
        specifications: [
            "Емкость: 70 Ач",
            "Пусковой ток: 680 А",
            "Полярность: обратная",
            "Габариты: 278x175x190 мм"
        ],
        featured: false
    },
    {
        id: 6,
        name: "Ремень ГРМ Gates",
        category: "engine",
        price: 2500,
        originalPrice: 3100,
        image: "https://sv-parts.ru/upload/iblock/996/vwbyi5dzbzn4ub8ren2u1etku004om4l/remen_grm_gates_vaz_2110_3.jpg",
        description: "Зубчатый ремень газораспределительного механизма с увеличенным сроком службы.",
        specifications: [
            "Количество зубьев: 147",
            "Ширина: 25 мм",
            "Материал: неопрен с кордом",
            "Срок службы: 120000 км"
        ],
        featured: false
    },
    {
        id: 7,
        name: "Стойка стабилизатора Lemforder",
        category: "suspension",
        price: 1200,
        image: "https://cdn1.ozone.ru/s3/multimedia-m/6588720562.jpg",
        description: "Стойка стабилизатора поперечной устойчивости для устранения стуков в подвеске.",
        specifications: [
            "Длина: 320 мм",
            "Резьба: M10x1.25",
            "Производитель: Германия",
            "Совместимость: BMW, Mercedes"
        ],
        featured: false
    },
    {
        id: 8,
        name: "Тормозной диск Zimmerman",
        category: "brakes",
        price: 5800,
        originalPrice: 7200,
        image: "https://img.tachka.ru/XwnfkFKXJfpZo5u38dJEKTQjxGY=/trim:top-left:50/fit-in/2000x0/filters:watermark(other/mask.png,0,0,0)/brand/zimmermann/zimmermann-200.2518.52-E7vtsC8.jpg",
        description: "Вентилируемый тормозной диск с защитным покрытием от коррозии.",
        specifications: [
            "Диаметр: 312 мм",
            "Толщина: 25 мм",
            "Материал: чугун GG20",
            "Вентилируемый: да"
        ],
        featured: true
    },
    {
        id: 9,
        name: "Генератор Valeo",
        category: "electrical",
        price: 12500,
        image: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/1539725107/600000560921b0.jpeg",
        description: "Новый генератор с улучшенными характеристиками для надежной работы электросистемы.",
        specifications: [
            "Мощность: 140 А",
            "Напряжение: 12 В",
            "Совместимость: Ford, Opel, Renault",
            "Вес: 4.8 кг"
        ],
        featured: false
    },
    {
        id: 10,
        name: "Радиатор охлаждения Nissens",
        category: "cooling",
        price: 7800,
        originalPrice: 9500,
        image: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/-2/32/35/03/23/49/600001359407b0.jpeg",
        description: "Алюминиевый радиатор системы охлаждения с пластиковыми бачками.",
        specifications: [
            "Материал трубок: алюминий",
            "Толщина: 32 мм",
            "Подключение: левое/правое",
            "Совместимость: Toyota, Honda"
        ],
        featured: false
    },
    {
        id: 11,
        name: "Сцепление LUK",
        category: "transmission",
        price: 15200,
        image: "https://f.nodacdn.net/420253",
        description: "Комплект сцепления с выжимным подшипником и направляющей втулкой.",
        specifications: [
            "Диаметр: 228 мм",
            "Количество зубьев: 22",
            "Тип: однодисковое",
            "Вес комплекта: 8.2 кг"
        ],
        featured: true
    },
    {
        id: 12,
        name: "Воздушный фильтр Mann",
        category: "filters",
        price: 650,
        image: "https://main-cdn.sbermegamarket.ru/big1/hlr-system/1605073/100022854047b0.jpeg",
        description: "Бумажный воздушный фильтр с увеличенной площадью фильтрующего элемента.",
        specifications: [
            "Высота: 60 мм",
            "Длина: 270 мм",
            "Ширина: 205 мм",
            "Тип: панельный"
        ],
        featured: false
    }
];

// Корзина
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM элементы
const productsGrid = document.getElementById('productsGrid');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const cartBtn = document.getElementById('cartBtn');
const closeCart = document.getElementById('closeCart');
const checkoutBtn = document.getElementById('checkoutBtn');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCart();

    // Обработчики событий
    cartBtn.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartModal);
    checkoutBtn.addEventListener('click', checkout);
    categoryFilter.addEventListener('change', filterProducts);
    searchInput.addEventListener('input', filterProducts);

    // Закрытие корзины при клике вне её области
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCartModal();
        }
    });
});

// Рендер товаров
function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = `product-card ${product.featured ? 'featured' : ''}`;

        productCard.innerHTML = `
            ${product.featured ? '<div class="product-badge">Хит</div>' : ''}
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <div class="product-category">${getCategoryName(product.category)}</div>
            <div class="product-description">${product.description}</div>
            <div class="product-specs">
                <h4>Характеристики:</h4>
                <ul>
                    ${product.specifications.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
            </div>
            <div class="product-price">
                ${product.originalPrice ?
                    `<span class="original-price">${product.originalPrice} руб.</span>` :
                    ''}
                ${product.price} руб.
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Добавить в корзину
            </button>
        `;

        productsGrid.appendChild(productCard);
    });
}

// Получение названия категории
function getCategoryName(category) {
    const categories = {
        'engine': 'Двигатель',
        'brakes': 'Тормозная система',
        'suspension': 'Подвеска',
        'electrical': 'Электрика',
        'transmission': 'Трансмиссия',
        'cooling': 'Система охлаждения',
        'filters': 'Фильтры'
    };
    return categories[category] || category;
}

// Фильтрация товаров
function filterProducts() {
    const category = categoryFilter.value;
    const searchTerm = searchInput.value.toLowerCase();

    const filteredProducts = products.filter(product => {
        const categoryMatch = category === 'all' || product.category === category;
        const searchMatch = product.name.toLowerCase().includes(searchTerm) ||
                           product.description.toLowerCase().includes(searchTerm);
        return categoryMatch && searchMatch;
    });

    renderProducts(filteredProducts);
}

// Функции корзины
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
    showNotification(`Товар "${product.name}" добавлен в корзину`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

function updateCart() {
    // Сохраняем корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Обновляем счетчик
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;

    // Обновляем содержимое корзины
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #7f8c8d;">Корзина пуста</p>';
        cartTotal.textContent = '0';
        return;
    }

    let totalPrice = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-category">${getCategoryName(item.category)}</div>
                <div class="cart-item-price">${item.price} руб. × ${item.quantity} = ${itemTotal} руб.</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Удалить</button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = totalPrice;
}

function openCart() {
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Заказ оформлен! Сумма: ${total} руб.\n\nСпасибо за покупку!`);

    cart = [];
    updateCart();
    closeCartModal();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        z-index: 3000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Добавляем стили для анимации уведомлений
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);