import './App.css'
const date = new Date();
function DateNow(){
  return (
    <div>
      {date.toString()}
    </div>
  )
  
}
function App(){
  return (
    <div className='text-left flex-col self-start'>
      <h1 className='text-4xl font-bold text-yellow-400'>Atomic Clock</h1>
      <main className='text-teal-400 text-2xl'>
      <div>
        The date now is:
      </div>
        <DateNow />

      </main>
      <h2 className='font-bold text-white my-3'>Did you know?</h2>
      <div>
        he implementation of Greenwich Mean Time was the first step to determine the time zone 
        of other countries in regard to GMT+0, while the concept of Coordinated Universal Time 
        (UTC) was designed to provide a more accurate timekeeping system. Nevertheless, both of 
        these time standards are widely used in the world for a similar purpose of time coordination. 
        The differences in the terminology of GMT and UTC still create confusion in international cooperation. 
        Even though UTC was introduced as a more accurate time standard, the occurrence of the leap 
        seconds demonstrated the flaws for the universal time synchronisation.
      </div>
    </div>
  )
}

export default App