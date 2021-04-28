import StyledContactUs from './styledComponents/ScontactUs';

function ContactUs() {
  return (
    <StyledContactUs>
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
          <p>Tél: 01 02 03 04 05</p>
        </div>
      </div>
    </StyledContactUs>
  );
}
export default ContactUs;
