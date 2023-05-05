import { userDetails } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import welcome from './welcome';
import Home from "./Home";
import About from "./About";
import Profile, { Profile1, Profile2 } from './profile';

function App() {
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  }


  return (
    <div>
      <Profile user={user}></Profile>
      <Profile1></Profile1>
      <Profile2></Profile2>
      {/*<welcome>U</welcome>*/}
    </div>
  );
}



export default App