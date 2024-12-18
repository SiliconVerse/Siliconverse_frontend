import { Link } from 'react-router-dom'


export function HeroImage({ bgImage, fgImage, alt }) {
    return (
        <div
            className="mx-auto bg-no-repeat bg-cover "
            style={{ backgroundImage: `url(${bgImage})` }}>
            <img src={fgImage} alt={alt} />
        </div>
    )
}


export function ApplyButton({href, children, className}) {
    return (
        <Link
            to={href}
            className={className}>
            {children}
        </Link>
    )
}

