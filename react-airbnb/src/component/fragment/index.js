import { Fragment } from "react";
import "./index.css";

export default function Reviews({ list }) {
    return (
        <header class="grid">
            <p class="box-text">Відгуки клієнтів</p>
            <div class="room">
                {list.map(({id, guestName, rating, review, ...rest}) => (
                    <Fragment key={id}>
                        <div class="grid-2 pain">
                           <div class="position">
                              <div class="item-type-2">{guestName}</div>
                              <span class="item-price">Рейтинг: {rating}</span>
                           </div>
                           <div class="item-2 pear">{review}</div>
                        </div>
                    </Fragment>
                ))}
            </div>
        </header>
    )
}