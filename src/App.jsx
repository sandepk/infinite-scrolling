import React, {useState,useMemo} from 'react'
import Card from './components/card/Card';
import Child from './components/Child';
const App = () => {
  const [counter, setCounter] = useState(0);

  const User  = useMemo(() => {
    return {name: 'Sandeep' }
  },[])


  function updateCount() {
    setCounter(prev => prev + 1);
    setCounter(prev => prev + 1);
    // setCounter(counter+1); // 1
    // setTimout(() => { setCounter(counter+1) },0); // 2 
    console.log(counter); // 2
  }

  return (
    <div>
      <button onClick={updateCount} >increment by one</button>
      <div>{counter}</div>
      <Child User = {User}  />
      <Card itemData={{title:"Rest for life"}}/>
    </div>
  )
}

export default App
