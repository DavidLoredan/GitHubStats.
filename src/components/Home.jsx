import Events from './Events';
import Screenshots from './Screenshots';
import Description from './Description';
import './scss/Home.scss';

function Home() {
  return (
    <div className="container">
      <Description />
      <Screenshots />
      <Events />
    </div>
  );
}
export default Home;
