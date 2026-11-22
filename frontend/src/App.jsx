import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setuser] = useState([])
  useEffect(() => {
    axios.get('/api/users') // we stantarised the  https part currently serving local host 
      .then((res) => {  
        setuser(res.data.users)
      })
      .catch((err) => {
        console.log(err)
      })
  }) 
  //whitelisting it  and proxy servers iska whitelisting mai hum ip address ko allow karte hai ki ye request ko access kar sake aur proxy server mai hum ek server ko dusre server ke liye act karne ke liye allow karte hai. and proxy use hoti hoti local host wagera sab mai call karne ke liye  

  return (
    <>
    <h1> this is the App</h1>
    <p> User :{users.length}</p>
    {
      users.map((users, index) => {
        return (
          <div key={users.id}>
            <p> Name : {users.name}</p>
          </div>
        )
      })
    } 
    </>
  )
}

export default App
