import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateByQuery } from './features/counter/counterSlice';
import ShowLaunches from './features/launches/ShowLaunches';
import Selector from './features/launches/Selector';

function App() {
  const centralState = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  React.useEffect(()=> {
    dispatch(updateByQuery(''))
  }, [dispatch])

  return (
    <div className="App">
      <Selector />
      {Array.isArray(centralState) && centralState.map((item) => {
          return <ShowLaunches key={item.id} id={item.id} flightNo={item.flight_number}  mission={item.name} status={item.success ? "successful" : "failed"} launchDate={item.date_utc} />
        })}
    </div>
  );
}

export default App;
