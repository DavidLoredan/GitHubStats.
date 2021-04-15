import Events from './Events';
import Screenshots from './Screenshots';
import Description from './Description';
import ContactUs from './ContactUs';
import './scss/Home.scss';

function Home() {
  return (
    <div className="container">
      <Description />
      <Screenshots />
      <Events />
      <ContactUs />
    </div>
  );
}
export default Home;
