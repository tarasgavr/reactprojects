import "./index.css";
import photo from "./time.svg";

export default function Time({ title, children, text, description, phone}) {
    return (
        <header class="footer">
            <div class="cool">
               <img src={photo}/>
               <div class="footer-2">
                 <span class="footer-title">Господар – {title}</span>
                 <div class="spy">
                   <p class="value">{phone}</p>
                   <p class="value">{text}</p>
                   <p>{children}% відсотків швидкості відгуку</p>
                 </div>
               </div>
            </div>
            <p class="footer-description">{description}</p>
        </header>
    )
}