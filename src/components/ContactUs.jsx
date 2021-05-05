import './ContactUs.scss';

function ContactUs() {
  return (
    <div>
      <div className="ContactUs">
        <form id="contact-form" method="POST" className="form">
          <p className="form">How do we know you?</p>
          <label htmlFor="name" className="form">
            <input type="text" id="name" placeholder="Your name here" />
          </label>
          <p className="form">
            Tell us the reason why do you want to contact us?
          </p>
          <label htmlFor="name" type="text" className="form">
            <select className="select" id="option">
              <option>Choose one of these reassons below</option>
              <option>The page is late responding</option>
              <option>Our results are not satisfied</option>
              <option>You can not find what you want</option>
              <option>Your experience is not available</option>
              <option>Other</option>
            </select>
          </label>
          <p className="form">How we can contact with you?</p>
          <label htmlFor="email" className="form">
            <input type="text" id="email" placeholder="Your email here" />
          </label>
          <p className="form">Would you like us to contact you?</p>
          <label htmlFor="phone" className="form">
            <input type="number" id="phone" placeholder="Your phone number" />
          </label>
          <p className="form textArea">How do we get better?</p>
          <label htmlFor="message" className="form">
            <textarea id="message" placeholder="Your message here">
              :)
            </textarea>
          </label>
          <br />
          <a href="/">
            <button type="submit" className="form-but">
              SEND YOUR MESSAGE TO US
            </button>
          </a>
        </form>
        <div className="address">
          <p>GitStats</p>
          <p>4 avenue des Saules, 59000 Lille</p>
          <br />
          <a href="mailto: p2g3.github@gmail.com">p2g3.github@gmail.com</a>
          <p>Tél: 01 02 03 04 05</p> <br />
          <iframe
            title="WCS"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.6955235221594!2d3.0155959150950737!3d50.63277278209288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d55ba8fa59e1%3A0xb2d48e50b58f28db!2s4%20Avenue%20des%20Saules%2C%2059160%20Lille!5e0!3m2!1sen!2sfr!4v1615409379910!5m2!1sen!2sfr"
            width="auto"
            height="auto"
            loading="active"
          />
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
