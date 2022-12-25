import axios from 'axios' 
axios.defaults.withCredentials = true;
function App() {

  const login = async()=>{
    try {
      console.log('login called')
      const res = await axios.post('http://localhost:5000/login')
      console.log('responce',res)
    } catch (error) {
      console.log('error in login api',error.message)
    }
  }

  const profile = async()=>{
    try {
      const res = await axios.post('http://localhost:5000/profile')
      console.log('responce',res)
    } catch (error) {
      console.log('error in profile api',error.message)
    }
  }
  return (
   <>
   <h1>hellow this is cookie test</h1>
   <button onClick={login}>login</button>
   <button onClick={profile}>profile</button>
   </>
  );
}

export default App;
