import { FaTwitter, FaFacebook, FaInstagramSquare } from "react-icons/fa";

const Footer = (props) => {
    return(
        <footer id="contact">
            <div className="footer-grid-container">
                <div className="grid-item">
                    <h3>SkinForge</h3>
                    <ol>
                        <li>Craft your dream complexion. Let's chat.</li>
                    </ol>
                </div>
                <div className="grid-item">
                    <h3>Contact us</h3>
                    <ol>
                        <li className="flex-icons">
                        <FaTwitter />
                        <FaFacebook />
                        <FaInstagramSquare />
                        </li>
                        {props.data && props.data.contact.map((item => (
                            <li>{item}</li>
                        )))}
                    </ol>
                </div>
                <div className="grid-item">
                    <h3>Our services</h3>
                    <ol>
                        {props.data && props.data.services.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ol>
                </div>
                <div className="grid-item">
                    <h3>Our Company</h3>
                    <ol>
                        {props.data && props.data.company.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </footer>
    )
}

export default Footer;