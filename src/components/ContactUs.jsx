import '../reset.css';
import './ContactUs.scss';

function ContactUs() {
  return (
    <div>
      <h2 className="Contact">CONTACT US</h2>
      <div className="ContactUs">
        <form className="form">
          <p>Name:</p>
          <input type="text" placeholder="Name" />
          <p>Email:</p>
          <input type="text" placeholder="Your email" />
          <p>Telephone:</p>
          <input type="number" placeholder="Phone number" />
          <p>Your message:</p>
          <textarea type="text" placeholder="Your message here" />
          <p>
            <button type="submit">SEND</button>
          </p>
        </form>
        <div className="address">
          <p>GitStats</p>
          <p>4 avenue des Saules, 59000 Lille</p>
          <br />
          <a href="https://google.com">p2g3WCS@gmail.com</a>
          <p>Tél: 01 02 03 04 05</p>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
