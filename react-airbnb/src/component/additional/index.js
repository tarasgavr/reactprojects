import "./index.css";

export default function Adittional({ title, house, text, description, host, special }) {
    return (
        <header class="header-box">
             <span class="border box-title">{title}</span>
             <div class="border-2">
                <b class="right">Правила дому</b>
                <span class="font">{house}</span>
             </div>
             <div class="border-2">
                <b class="right">Політика скасування</b>
                <span class="font">{text}</span>
             </div>
             <div class="border-2">
                <b class="right">Місцевий транспорт</b>
                <span  class="font">{description}</span>
             </div>
             <div class="border-2">
                <b class="right">Мови хоста</b>
                <span  class="font">{host}</span>
             </div>
             <div class="border-2">
                <b class="right">Спеціальні пропозиції:</b>
                <span  class="font">{special}</span>
             </div>
             <div class="border-2">
                <b class="right">Інструкції щодо реєстрації</b>
                <span class="font">Check-in time is 3:00 PM. Please contact us in advance with your estimated arrival time.</span>
             </div>
        </header>
    )
}