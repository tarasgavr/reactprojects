import { Fragment } from "react";
import "./index.css";

export default function Number({ list }) {
    return (
        <header class="header-box">
            <p class="box-text">Пам'ятки поблизу</p>
            <div class="padding">
                {list.map(({id, name, link, ...rest}) => (
                    <Fragment key={id}>
                        <div class="border">
                           <a class="link" src={link}>{name}</a>
                        </div>
                    </Fragment>
                ))}
            </div>
        </header>
    )
}