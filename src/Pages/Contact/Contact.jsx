import Header from '../../components/Header'
import './Contact.scss'
const Contact = () => {
  return (
    <>
      <div className="contact-wrapper">
        <Header />

        <h2 className="contact-title">Contact</h2>

        <div className="contact-desc">
          <p className="contact">
            Mail: <span>dmitriyvolkov2102@icloud.com</span>
          </p>
          <p className="contact">
            GitHub: <a href="https://github.com/v1kv">GitGub Link</a>
          </p>
          <p className="contact">
            Telegram: <a href="https://t.me/vo1kovdmitriy">Telegram Link</a>
          </p>
        </div>
      </div>
    </>
  )
}
export default Contact
