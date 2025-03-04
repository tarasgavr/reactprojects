import "./index.css";
import ListItem from "../list-item";

export default function Price({price, discount, currency, ... rest}) {
    return (
        <header class="header-2">
            <div class="block">
              <div class="price">
                <span>{currency}{price}</span>
              </div>
              <div class="discount">
                <span>{currency}{discount}</span>
              </div>
            </div>
            <List {...rest} currency={currency}/>
        </header>
    )
}

function List({ currency, cleaning, service, checkin, checkout,}) {
    return (
        <ul className="list">
            <ListItem className="clear">
                <span>Плата за прибирання:</span>
                <span>{currency}{cleaning}</span>
            </ListItem>
            <ListItem className="clear">
                <span>Сервісний збір:</span>
                <span>{currency}{service}</span>
            </ListItem>
            <ListItem className="clear">
                <span>Дата прибуття:</span>
                <span>{checkin}</span>
            </ListItem>
            <ListItem className="clear">
                <span>Дата від’їзду:</span>
                <span>{checkout}</span>
            </ListItem>
        </ul>
    )
}