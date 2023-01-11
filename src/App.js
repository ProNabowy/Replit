import Landing from './Componants/LandingPage/Landing';
import Header from './Componants/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Featured from './Componants/Featured/Featured';
import People from './Componants/People/People';
import Mobile from './Componants/Mobile/Mobile';
import Setup from './Componants/Setup/Setup';
import Host from './Componants/Host/Host';
import Team from './Componants/Team/Team';
import Assistance from './Componants/Assistance/Assistance';
import Build from './Componants/Build/Build';
import Creating from './Componants/Createing-btn/Createing';
import Footer from './Componants/Footer/Footer';
function App()
{

  return (
      <div className="App">
      <Header />
      <Landing />
      <Featured />
      <People />
      <Mobile />
      <Setup />
      <Host />
      <Team />
      <Assistance />
      <Build />
      <Creating />
      <Footer />
    </div>
  );
}

export default App;
