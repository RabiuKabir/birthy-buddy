import { useState } from 'react';
import data from './data';
import Link from './Link'

const Middle = () => {
    const [people, setPeople] = useState(data);

  const resetData = () => {
    setPeople([])
  }

  const showData = () => {
    setPeople(data)
  }
  return (
    <main>
         <div className='container'>
        <h3>{people.length} Birthdays today</h3>
        <Link people = {people}/>
     { people.length? <button className='btn btn-block' type='button' onClick={resetData}>Erase all data</button> : 
      <button className='btn' type='button' onClick={showData}>Show Birthdays</button> }
    </div>
    </main>
   
  )
 
}


export default Middle;