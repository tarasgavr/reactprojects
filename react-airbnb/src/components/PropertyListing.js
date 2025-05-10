import React from "react";
import "./PropertyListing.css";

const PropertyListing = () => (
  <div className="property-listing">
    <header>
      <img
        className="property-image"
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        alt="Property"
      />
      <div className="property-header">
        <h1>Іст-Сайд Біл</h1>
        <div className="property-meta">
          <span>4.90 рейтинг</span> · <span>190 відгуків</span> · <span>Остін, Техас, США</span>
        </div>
        <div className="property-price">
          <span className="old-price">$308</span>
          <span className="new-price">$218</span> / ніч
        </div>
      </div>
    </header>

    <section className="room-types">
      <h2>Типи номерів</h2>
      <div className="room-type-list">
        <div>
          <strong>Номер Делюкс</strong>
          <div>2 гості · $300</div>
        </div>
        <div>
          <strong>Люкс</strong>
          <div>2 гості · $500</div>
        </div>
        <div>
          <strong>Президентська вілла</strong>
          <div>4 гості · $500</div>
        </div>
      </div>
    </section>

    <section>
      <h2>Опис</h2>
      <p>
        Насолоджуйтеся цим чистим, сучасним котеджем, розташованим у затишному, але зручному районі Центрально-Східного Остіна...
      </p>
    </section>

    <section>
      <h2>Деталі властивості</h2>
      <ul>
        <li>2 гості</li>
        <li>1 спальня</li>
        <li>1 ліжко</li>
        <li>1 ванна кімната</li>
      </ul>
    </section>

    <section>
      <h2>Зручності</h2>
      <ul className="amenities">
        <li>Басейн</li>
        <li>Безкоштовний Wi-Fi</li>
        <li>Безкоштовний сніданок</li>
        <li>Паркінг</li>
        <li>Дозволено з домашніми тваринами</li>
        <li>Трансфер до/з аеропорту</li>
        <li>Підходить для дітей</li>
      </ul>
    </section>

    <section>
      <h2>Відгуки клієнтів</h2>
      <div className="reviews">
        <div>
          <strong>Alice Johnson</strong>
          <p>Дивовижний досвід! Персонал був дуже доброзичливий, а зручності були першокласні.</p>
        </div>
        <div>
          <strong>Bob Smith</strong>
          <p>Чудове розташування та гарні умови. Дуже чисто й просторо!</p>
        </div>
        <div>
          <strong>Eve Williams</strong>
          <p>Дуже сподобалося співпраця. Все було організовано на вищому рівні.</p>
        </div>
      </div>
    </section>
  </div>
);

export default PropertyListing;
