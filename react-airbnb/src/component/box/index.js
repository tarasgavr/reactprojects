import "./index.css";

export default function Box({ guests, bedrooms, title, image}) {
    return (
        <header class="header-box">
             <span class="border box-title">{title}</span>
             <div  class="border">
                <img class="img-box" src={image}/>
                <span>{guests} гості</span>
             </div>
             <div  class="border">
                <img class="img-box" src={image}/>
                <span>{bedrooms} спальня</span>
             </div>
             <div  class="border">
                <img class="img-box" src={image}/>
                <span>{bedrooms} ліжко</span>
             </div>
             <div  class="border">
                <img class="img-box" src={image}/>
                <span>{bedrooms} ванна кімната</span>
             </div>
        </header>
    )
}