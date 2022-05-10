import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
