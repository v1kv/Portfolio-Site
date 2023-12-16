import './Contact.scss'
import { useForm, ValidationError } from '@formspree/react'
import Buttons from '../../components/Buttons/Buttons'
function ContactForm() {
  const [state, handleSubmit] = useForm('xgegwvyn')
  if (state.succeeded) {
    return (
      <p className="message">
        Thank you for contacting me, I will definitely write back to you!
      </p>
    )
  }
  return (
    <div className="contact-wrapper">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <div className="brise-input">
          <input type="email" name="email" id="email" required />
          <label>Email</label>
          <span className="line"></span>
          <ValidationError
            className="err"
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div class="brise-text">
          <textarea
            name="msg"
            id="message"
            cols="30"
            rows="10"
            required
          ></textarea>
          <label>Message</label>
          <ValidationError
            className="err"
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <Buttons
          type={'submit'}
          classNames={'btn-contact'}
          isDisabled={state.submitting}
          text={'Submite'}
        />
      </form>
    </div>
  )
}

export default ContactForm
