import "./index.css";

export default function Description({ title, children, text, description, phone}) {
    return (
        <header class="footer">
            <span class="footer-title">{title}</span>
            <p class="footer-description">{children}</p>
        </header>
    )
}