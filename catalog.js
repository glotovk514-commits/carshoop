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
    },
    {
        id: 13,
        name: "Стартер Denso",
        category: "electrical",
        price: 9400,
        originalPrice: 11200,
        image: "https://iskramotor.market/upload/iblock/2e6/2e6cccd8957996a76098bfe8f67d0294.webp",
        description: "Высокомоментный стартер для быстрого и надежного запуска двигателя.",
        specifications: [
            "Мощность: 1.4 кВт",
            "Напряжение: 12 В",
            "Количество зубьев: 9",
            "Вес: 3.2 кг"
        ],
        featured: false
    },
    {
        id: 14,
        name: "Сайлентблок переднего рычага Febi",
        category: "suspension",
        price: 850,
        image: "https://vw-parts.ru/image/cache/catalog/Parts/10814-450x450.jpg",
        description: "Резинометаллический шарнир для подвески, обеспечивающий плавность хода.",
        specifications: [
            "Диаметр внешний: 45 мм",
            "Диаметр внутренний: 14 мм",
            "Материал: резина+сталь",
            "Совместимость: VW, Audi"
        ],
        featured: false
    },
    {
        id: 15,
        name: "Топливный фильтр Mahle",
        category: "filters",
        price: 1200,
        originalPrice: 1500,
        image: "https://cdn.vseinstrumenti.ru/images/goods/rashodnye-materialy-i-osnastka/rashodnye-materialy-dlya-avtomobilej-i-avtoservisnogo-oborudovaniya/9805106/560x504/134761700.jpg",
        description: "Топливный фильтр тонкой очистки для защиты системы впрыска.",
        specifications: [
            "Тип: картридж",
            "Рабочее давление: 6 бар",
            "Совместимость: дизель/бензин",
            "Степень очистки: 10 мкм"
        ],
        featured: false
    },
    {
        id: 16,
        name: "Сальник коленвала Corteco",
        category: "engine",
        price: 450,
        image: "https://tuningprosto.ru/upload/iblock/502/50235c049d37d99be6eff9de9132c0fb.jpg",
        description: "Маслосъемный сальник передний/задний коленчатого вала.",
        specifications: [
            "Диаметр внешний: 85 мм",
            "Диаметр внутренний: 55 мм",
            "Толщина: 10 мм",
            "Материал: фторкаучук"
        ],
        featured: false
    },
    {
        id: 17,
        name: "Ступичный подшипник SKF",
        category: "suspension",
        price: 2800,
        originalPrice: 3500,
        image: "https://ir.ozone.ru/s3/multimedia-4/6742193368.jpg",
        description: "Сдвоенный ступичный подшипник с интегрированным датчиком ABS.",
        specifications: [
            "Тип: двухрядный",
            "Посадочный диаметр: 75 мм",
            "Вес: 1.8 кг",
            "Совместимость с ABS: да"
        ],
        featured: true
    },
    {
        id: 18,
        name: "Термостат Wahler",
        category: "cooling",
        price: 1900,
        image: "https://a.d-cd.net/d80ce04s-960.jpg",
        description: "Термостат с восковым элементом для поддержания оптимальной температуры двигателя.",
        specifications: [
            "Температура открытия: 87°C",
            "Диаметр: 65 мм",
            "Материал корпуса: латунь",
            "Тип: механический"
        ],
        featured: false
    },
    {
        id: 19,
        name: "ШРУС GKN",
        category: "transmission",
        price: 5200,
        originalPrice: 6500,
        image: "https://ir.ozone.ru/s3/multimedia-6/c1000/6410621694.jpg",
        description: "Шарнир равных угловых скоростей для привода передних колес.",
        specifications: [
            "Количество шариков: 6",
            "Диаметр шлицов: 26 мм",
            "Длина: 280 мм",
            "Тип: внешний"
        ],
        featured: false
    },
    {
        id: 20,
        name: "Лампа ксеноновая Osram",
        category: "electrical",
        price: 3200,
        image: "https://www.xenonshop.ru/media/cache/97/ed/97edd6c6652d73d121eea5647ff4408a.jpg",
        description: "Ксеноновая газоразрядная лампа с цветовой температурой 4300K.",
        specifications: [
            "Мощность: 35 Вт",
            "Цоколь: D2S",
            "Цветовая температура: 4300K",
            "Срок службы: 2000 часов"
        ],
        featured: true
    },
    {
        id: 21,
        name: "Помпа водяная Hepu",
        category: "cooling",
        price: 3800,
        originalPrice: 4800,
        image: "https://ir.ozone.ru/s3/multimedia-p/c1000/6535412653.jpg",
        description: "Водяная помпа системы охлаждения с металлической крыльчаткой.",
        specifications: [
            "Диаметр патрубка: 32 мм",
            "Материал крыльчатки: металл",
            "Количество лопастей: 8",
            "Совместимость: BMW, Mercedes"
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


// Существующий код остается без изменений до этого момента...

// Новые DOM элементы для оформления заказа
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutForm = document.getElementById('checkoutForm');
const backToCart = document.getElementById('backToCart');
const confirmationModal = document.getElementById('confirmationModal');
const continueShopping = document.getElementById('continueShopping');
const orderNumber = document.getElementById('orderNumber');

// Элементы итоговой суммы
const summaryItems = document.getElementById('summaryItems');
const summaryDelivery = document.getElementById('summaryDelivery');
const summaryTotal = document.getElementById('summaryTotal');

// Стоимость доставки
const deliveryCost = 300;

// Инициализация (дополненная)
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCart();

    // Обработчики событий
    cartBtn.addEventListener('click', openCart);
    closeCart.addEventListener('click', closeCartModal);
    checkoutBtn.addEventListener('click', startCheckout);
    categoryFilter.addEventListener('change', filterProducts);
    searchInput.addEventListener('input', filterProducts);

    // Обработчики для оформления заказа
    closeCheckout.addEventListener('click', closeCheckoutModal);
    backToCart.addEventListener('click', backToCartFromCheckout);
    checkoutForm.addEventListener('submit', confirmOrder);
    continueShopping.addEventListener('click', closeConfirmationModal);

    // Обновление стоимости доставки при изменении способа доставки
    document.querySelectorAll('input[name="delivery"]').forEach(radio => {
        radio.addEventListener('change', updateOrderSummary);
    });

    // Закрытие модальных окон при клике вне их области
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCartModal();
        }
    });

    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) {
            closeCheckoutModal();
        }
    });

    confirmationModal.addEventListener('click', (e) => {
        if (e.target === confirmationModal) {
            closeConfirmationModal();
        }
    });
});

// Функции оформления заказа
function startCheckout() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }

    closeCartModal();
    openCheckoutModal();
}

function openCheckoutModal() {
    checkoutModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    updateOrderSummary();
    prefillForm();
}

function closeCheckoutModal() {
    checkoutModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function backToCartFromCheckout() {
    closeCheckoutModal();
    openCart();
}

function updateOrderSummary() {
    const itemsTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryOption = document.querySelector('input[name="delivery"]:checked');
    const deliveryCost = deliveryOption.value === 'courier' ? 300 : 0;
    const total = itemsTotal + deliveryCost;

    summaryItems.textContent = `${itemsTotal} руб.`;
    summaryDelivery.textContent = `${deliveryCost} руб.`;
    summaryTotal.textContent = `${total} руб.`;
}

function prefillForm() {
    // Можно добавить логику предзаполнения формы из localStorage
    const savedData = JSON.parse(localStorage.getItem('customerData')) || {};

    if (savedData.firstName) document.getElementById('firstName').value = savedData.firstName;
    if (savedData.lastName) document.getElementById('lastName').value = savedData.lastName;
    if (savedData.phone) document.getElementById('phone').value = savedData.phone;
    if (savedData.email) document.getElementById('email').value = savedData.email;
    if (savedData.city) document.getElementById('city').value = savedData.city;
}

function confirmOrder(e) {
    e.preventDefault();

    // Сбор данных формы
    const formData = {
        customer: {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            city: document.getElementById('city').value,
            address: document.getElementById('address').value,
            postalCode: document.getElementById('postalCode').value,
            apartment: document.getElementById('apartment').value
        },
        delivery: document.querySelector('input[name="delivery"]:checked').value,
        payment: document.querySelector('input[name="payment"]:checked').value,
        comment: document.getElementById('comment').value,
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) +
               (document.querySelector('input[name="delivery"]:checked').value === 'courier' ? 300 : 0)
    };

    // Сохранение данных клиента для будущих заказов
    localStorage.setItem('customerData', JSON.stringify({
        firstName: formData.customer.firstName,
        lastName: formData.customer.lastName,
        phone: formData.customer.phone,
        email: formData.customer.email,
        city: formData.customer.city
    }));

    // Генерация номера заказа
    const orderNum = generateOrderNumber();
    orderNumber.textContent = orderNum;

    // В реальном приложении здесь был бы AJAX запрос к серверу
    console.log('Заказ оформлен:', formData);

    // Показ подтверждения
    closeCheckoutModal();
    showConfirmationModal();

    // Очистка корзины
    cart = [];
    updateCart();

    // Сохранение заказа в историю
    saveOrderToHistory(formData, orderNum);
}

function generateOrderNumber() {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return timestamp.slice(-6) + random;
}

function saveOrderToHistory(orderData, orderNumber) {
    const orders = JSON.parse(localStorage.getItem('orderHistory')) || [];
    const order = {
        number: orderNumber,
        date: new Date().toISOString(),
        ...orderData
    };
    orders.push(order);
    localStorage.setItem('orderHistory', JSON.stringify(orders));
}

function showConfirmationModal() {
    confirmationModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeConfirmationModal() {
    confirmationModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Обновляем функцию checkout для использования нового процесса
function checkout() {
    startCheckout();
}

// Существующие функции остаются без изменений...
// (addToCart, removeFromCart, updateQuantity, updateCart, openCart, closeCartModal, showNotification и т.д.)