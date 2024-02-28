import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from '@/styles/footer.module.scss';

export default function Footer() {
    return (
        <>
            <footer className="footer mt-auto py-3 bg-body-tertiary">
                <div className="container">
                    <div className={`row ${styles.rs}`}>
                        <div className={`col ${styles.rst}`}>
                            <div className={`footer-title ${styles.foo}`}>Contact</div>
                            <div className={`${styles.foo}`}>
                                <div>
                                    <a
                                        className={`cc-calto-action-ripple ${styles.phicn}`}
                                        href="tel:+918433475797"
                                    >
                                        <FontAwesomeIcon icon={faPhoneVolume} />
                                        <span className="num">+91 8433475797</span>
                                    </a>
                                </div>
                                <div>
                                    <a
                                        className={`cc-calto-action-ripple ${styles.phicn}`}
                                        href="mailto:bartwalguesthouse@gmail.com"
                                    >
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <span className="num">bartwalguesthouse@gmail.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`col ${styles.rst}`}>
                            <div className="bdfoo">
                                <div className={`footer-title ${styles.foo}`}>Address</div>
                                <table className={`${styles.tabody}`}>
                                    <tbody className={`${styles.address}`}>
                                        <tr>
                                            <td>Bartwal Guest House,</td>
                                        </tr>
                                        <tr>
                                            <td>Opposite to Bank Of India,</td>
                                        </tr>
                                        <tr>
                                            <td>Vill & PO - Selaqui,</td>
                                        </tr>
                                        <tr>
                                            <td>Dehradun, Uttarakhand 248011</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={`col ${styles.rst}`}>
                            <div className="bdfoo">
                                <div className={`footer-head ${styles.foo}`}>Opening Hours</div>
                                <div className={`${styles.hrs}`}>
                                    <table >
                                        <tbody >
                                            <tr>
                                                <td>24/7</td>
                                            </tr>
                                            <tr>
                                                <td><b>Office hours</b></td>
                                            </tr>
                                            <tr>
                                                <td>9AM to 9PM</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}