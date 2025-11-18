ymaps.ready(init);

        function init() {
            // Создаем карту
            var myMap = new ymaps.Map('map', {
                center: [55.707105, 37.656869], // Главный офис
                zoom: 11,
                controls: ['zoomControl', 'fullscreenControl']
            });

            // Создаем метки для всех адресов
            var offices = [
                {
                    coords: [55.707105, 37.656869],
                    address: 'Москва, ул. Автозаводская, д. 15',
                    title: 'Главный офис',
                    type: 'office'
                },
                {
                    coords: [55.678741, 37.893521],
                    address: 'Московская обл., г. Люберцы, ул. Складская, д. 8',
                    title: 'Склад',
                    type: 'warehouse'
                },
                {
                    coords: [55.839041, 37.438789],
                    address: 'Москва, ул. Ленинградское ш., д. 65',
                    title: 'Магазин',
                    type: 'store'
                }
            ];

            // Добавляем метки на карту
            offices.forEach(function(office) {
                var placemark = new ymaps.Placemark(office.coords, {
                    balloonContent: `
                        <strong>${office.title}</strong><br>
                        ${office.address}<br>
                        <em>${getWorkingHours(office.type)}</em>
                    `
                }, {
                    preset: getPreset(office.type),
                    balloonCloseButton: true
                });

                myMap.geoObjects.add(placemark);
            });

            // Обработчики для кнопок выбора адреса
            document.querySelectorAll('.address-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    // Убираем активный класс у всех кнопок
                    document.querySelectorAll('.address-btn').forEach(b => b.classList.remove('active'));
                    // Добавляем активный класс текущей кнопке
                    this.classList.add('active');

                    // Находим соответствующий адрес
                    const address = this.getAttribute('data-address');
                    const coords = this.getAttribute('data-coords').split(',').map(Number);

                    // Перемещаем карту к выбранному адресу
                    myMap.setCenter(coords, 16);
                });
            });

            // Функция для получения пресета в зависимости от типа
            function getPreset(type) {
                switch(type) {
                    case 'office': return 'islands#blueOfficeIcon';
                    case 'warehouse': return 'islands#grayStorageIcon';
                    case 'store': return 'islands#blueShoppingIcon';
                    default: return 'islands#blueIcon';
                }
            }

            // Функция для получения времени работы
            function getWorkingHours(type) {
                switch(type) {
                    case 'office': return 'Пн-Пт: 9:00-18:00';
                    case 'warehouse': return 'Пн-Сб: 8:00-20:00';
                    case 'store': return 'Ежедневно: 9:00-21:00';
                    default: return '';
                }
            }
        }

        // Обработка формы обратной связи
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();

            // Здесь должна быть логика отправки формы
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            console.log('Данные формы:', data);

            // Показываем сообщение об успехе
            alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });