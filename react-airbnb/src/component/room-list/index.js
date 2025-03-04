import { Fragment } from "react";
import "./index.css";

export default function Roomlist({ list }) {
    return (
        <header class="grid">
            <p class="big">Типи номерів</p>
            <div class="room">
                {list.map(({ id, type, pricePerNight: price, currency, capacity, ...rest}) => (
                    <Fragment key={id}>
                        <div class="grid-2">
                           <div class="item-type">{type}</div>
                           <span class="item-price">Кількість гостей: {capacity}</span>
                           <div class="item">{currency}{price}</div>
                        </div>
                    </Fragment>
                ))}
            </div>
        </header>
    )
}