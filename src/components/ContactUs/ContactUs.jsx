import './styles.scss'

const Contact = () => {
    return (
        <>
                <section className="contact__section">
                    <div className="container">
                        <h2 className="section__title">КОНТАКТИ</h2>
                        <p className="contact__section-title">
                            Телефон:
                        </p>
                        <a href="tel: +38(097)-837-03-14">
                        <p className="contact__section-number">
                            +38 (097) 837 03 14
                        </p>
                        </a>
                        <p className="contact__section-title">
                            Електронна пошта:
                        </p>
                        <a href="mailto: miroha199366@gmail.com">
                            <p className="contact__section-number">
                            miroha199366@gmail.com
                            </p>
                        </a>
                    </div>
                </section>
        </>
    )
}

export default Contact;