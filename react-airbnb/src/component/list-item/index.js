export default function ListItem({ children, imageSrc, title }) {
    return (
        <li>
            {imageSrc && <img height={24} width={24} src={imageSrc} alt="Icon"/>}
            <div className="">
                {title && <strong>{title}</strong>}
                <div>{children}</div>
            </div>
        </li>
    )
}