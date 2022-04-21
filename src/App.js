import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateByQuery } from './features/counter/counterSlice';
import ShowLaunches from './features/launches/ShowLaunches';
import Selector from './features/launches/Selector';
import { Header, Hero } from './styles/App.styled';
import GlobalStyles from './styles/Global'

function App() {
  const centralState = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  React.useEffect(()=> {
    dispatch(updateByQuery(''))
  }, [dispatch])

  return (
    <div>
      <GlobalStyles />
      <Header>
        <h1>SpaceX</h1>
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
              return <ShowLaunches key={item.id} id={item.id} flightNo={item.flight_number}  mission={item.name} status={item.success ? "successful" : "failed"} launchDate={item.date_utc} />
            })}            
          </tbody>
        </table>
      </Hero>
    </div>
  );
}

export default App;
