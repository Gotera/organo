import "./Footer.css"

export const Footer = () => {
    return (
        <footer>
            <section >
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/images/fb.png" alt="Facebook Icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/images/tw.png" alt="Twitter Icon"/>
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/images/ig.png" alt="Instagram Icon"/>
                        </a>
                    </li>
                </ul>
            </section>
            <img src="/images/logo.png" alt="Organo Logo"/>
            <p>Desenvoldio por Alura</p>
        </footer>
    )
}