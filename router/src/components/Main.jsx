import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'



const Main = () => {
      const username = 'christopher.morales'
      const dayOfWeek = 'wednesday'
  return (
    <Routes>
      <Route      
            path='/' 
            element={<Home 
            username={username} 
            dayOfWeek={dayOfWeek}/>}
      />
      <Route 
            path='/componentA' 
            element={<ComponentA />}
      />
      <Route 
            path='/componentB' 
            element={<ComponentB />}
      />
    </Routes>
  )
}

export default Main