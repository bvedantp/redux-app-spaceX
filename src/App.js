import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateByQuery } from './features/counter/counterSlice';
import ShowLaunches from './features/launches/ShowLaunches';
import Selector from './features/launches/Selector';
import { Header, Hero, TopPart, LogUser } from './styles/App.styled';
import ImgSpace from './spaceX.png';
import GlobalStyles from './styles/Global';
import Login from './features/launches/Login';
import Logout from './features/launches/Logout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

function App() {
  const centralState = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  const [showLogin, setLogin] = React.useState(false)

  function updateLoginShow() {
    setLogin(prevState => !prevState)
  }

  React.useEffect(()=> {
    dispatch(updateByQuery(''))
  }, [dispatch])

  return (
    <div>
      <GlobalStyles />
      <Header>
        <TopPart>
          <img src={ImgSpace} alt='mainLogo' />
          <div>
            <button onClick={updateLoginShow} ><FontAwesomeIcon icon={faUserPlus} /> </button>
            {showLogin && <LogUser>
              <Login />
              <Logout />
            </LogUser> }
          </div>
        </TopPart>
        <Selector />
      </Header>
      <Hero>
        <table>
          <thead>
            <tr>
              <th>Flight No.</th>
              <th>Mission Name</th>
              <th>Launch Date</th>
              <th>Outcome</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(centralState) && centralState.map((item) => {
              return <ShowLaunches key={item.id} id={item.id} flightNo={item.flight_number}  mission={item.name} status={item.success} launchDate={item.date_utc} />
            })}            
          </tbody>
        </table>
      </Hero>
    </div>
  );
}

export default App;
