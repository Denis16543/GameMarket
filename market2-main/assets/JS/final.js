//Знаходимо елемент по заданому id в index.html файлі
var items = document.getElementById('items');

//Створюємо масив елементів з параметрами які будуть належать item
const itemsArr = [
    { name: 'Мотокоса 43', salePrice: 5499, prices: 4497, couponPrice: 3498, images: 'assets/images/1.webp'},
    { name: 'Електричний тример 110', salePrice: 4497, prices: 3498, couponPrice: 3396, images: 'assets/images/2.webp'},
    { name: 'Мотокоса 43', salePrice: 4997, prices: 3297, couponPrice: 3195, images: 'assets/images/3.webp'},
    { name: 'Мотокоса 43', salePrice: 2190, prices: 1698, couponPrice: 1596, images: 'assets/images/4.webp'}
];

// Перевірка чи існує items
if (items) {
    //За допомогою метода forEach перераховуємо усі дані для items
    itemsArr.forEach((item, index) => {
        //Створюємо елемент item поки у нас не закінчиться перелік елементів
        items.innerHTML += `
            <div class="item">
                <div class="item-title">${item.name}</div>
                <div class="item-image">
                    <img src="${item.images}" alt="${item.name}">
                </div>
                <div class="parts-pay">
                    <div><img src="../assets/icons/monolapka.png" alt="">6</div>
                    <div><img src="../assets/icons/pb.jpg" alt="">8</div>
                </div>
                <div class="price">
                    <div><span>${item.salePrice}</span><sup>грн</sup></div>
                    <div><span>${item.prices}</span><sup>грн</sup></div>
                </div>
                <div class="price bonus">
                    <div>Ціна за купоном</div>
                    <div><span>${item.couponPrice}</span><sup>грн</sup></div>
                </div>
            </div>`;
    });
} else {
    //Перевірка якщо не знайдений елемент items
    console.log('not found');
}

