export default function ShadowRoot({image, title}) {
    return (
        <header class="header-box">
             <span class="border box-title">{title}</span>
             <div  class="border">
                <img class="img-box" src={image}/>
                <span>Басейн</span>
             </div>
             <div  class="border">
                <img class="img-box" src={image}/>
                <span>Спортивний зал</span>
             </div>
             <div  class="border">
                <img class="img-box" src={image}/>
                <span>Безкоштовний сніданок</span>
             </div>
             <div  class="border">
                <img class="img-box" src={image}/>
                <span>Безкоштовний Wi-Fi</span>
             </div>
             <div  class="border">
                <img class="img-box" src={image}/>
                <span>Безкоштовний вуличний паркінг</span>
             </div>
             <div  class="border">
                <img class="img-box" src={image}/>
                <span>Дозволено розміщення з домашніми тваринами</span>
             </div>
             <div  class="border">
                <img class="img-box" src={image}/>
                <span>Трансфер до/з аеропорту</span>
             </div>
             <div  class="border">
                <img class="img-box" src={image}/>
                <span>Консьєрж-сервіс</span>
             </div>
             <div  class="border">
                <img class="img-box" src={image}/>
                <span>Обслуговування номерів</span>
             </div>
             <div  class="border">
                <img class="img-box" src={image}/>
                <span>Підходить для дітей</span>
             </div>
        </header>
    )
}