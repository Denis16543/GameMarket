//Знаходимо елемент по заданому id в index.html файлі
var items = document.getElementById('items');



//Визначення масиву об'єктів
let itemsArray = [
    {
            email: "23b_bvo@liceum.ztu.edu.ua",
            class: "10-Б 1",
            name: "Башинська Вікторія",
            author_photo: "Башинська.jpg",  
            project_1_name: "Dudi 3",
            project_1_github_repository: "https://github.com/ViktoriaBashinska/Phaser2stGame",
            project_1_live_version: "https://viktoriabashinska.github.io/Phaser2stGame/",
            project_1_google_drive_folder: "https://drive.google.com/drive/folders/15v_c4DzKpW5323A4wYMV2Zj7AwRkSPUE?usp=sharing",
            project_1_google_form: "https://forms.gle/jHMQsybKdMdUHXKA7",
            project_1_game_photo: "Башинська_gamephoto.jpg",  
            project_2_name: "GameMarket_Bashynska",
            project_2_github_repository: "https://github.com/ViktoriaBashinska/GameMarket_Bashynska",
            project_2_live_version: "https://viktoriabashynska.github.io/GameMarket_Bashynska/",
            project_2_market_page: "https://viktoriabashynska.github.io/GameMarket_Bashynska/market.html",
            project_2_final_page: "https://viktoriabashynska.github.io/GameMarket_Bashynska/final/final.html",
            project_2_game_photo: "URL_до_фото_гри_2"  // Додайте URL до фото гри 2
          
          
    }
]
// Перевірка чи існує items
if (items) {
        itemsArray.forEach((item, index) => {
        items.innerHTML += `
            <div class="item">
                <div class="item-title">${item.name}</div>
                <div class="item-image">
                    <img src="img/${item.author_photo}" class="item-name">
                    <img src=img/${item.project_1_game_photo}" class="item-name">
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

