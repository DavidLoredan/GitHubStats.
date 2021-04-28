import Events from './Events';
import Screenshots from './Screenshots';
import Description from './Description';
import ContactUs from './ContactUs';
import StyledHome from './styledComponents/Shome';

function Home() {
  return (
    <StyledHome>
      <Description />
      <Screenshots />
      <Events />
      <ContactUs />
    </StyledHome>
  );
}
export default Home;
