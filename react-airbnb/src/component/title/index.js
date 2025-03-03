import "./index.css";

export default function Title({
    title,
    rating,
    review,
    city,
    country,
    superhost,
}) {
    return (
        <div class="style">
            <h1 class="title">{title}</h1>
            <div class="title-main">
                <span class="value">{rating} рейтинг</span>
                <span class="value">{review} відгуків</span>
                <span class="value">{city}</span>
                <span class="value">{country} </span>
                <span class="value">{superhost} </span>
            </div>
        </div>
    );
}