import Events from './Events';
import Screenshots from './Screenshots';
import Description from './Description';
import StyledHome from './styledComponents/Shome';

function Home() {
  return (
    <StyledHome>
      <Description />
      <Screenshots />
      <Events />
    </StyledHome>
  );
}
export default Home;
