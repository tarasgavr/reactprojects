import "./index.css";
import photo from "./photo.svg";

export default function Photo() {
    return (
        <header class="header">
            <img class="image" src={photo} alt="Logo"/>
        </header>
    )
}