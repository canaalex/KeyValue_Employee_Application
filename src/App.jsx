import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import Button from './components/Button'
import { useEffect, useState } from 'react';

function App() {  
  const [username , setUsername] = useState('');
  const [displayName,setDisplayName]=useState('');

  const onChange = (value)=>{
    setUsername(value);
  };

 useEffect(()=>{

  //setusername('');
  setDisplayName("Sample name");
 },[]);

 useEffect(()=>{
  if(username){
    setDisplayName(username);
  }
},[username]);

 
  const onClick = () =>
  {
    const val=prompt('Enter your name');
    console.log(val);
  };

  return (
    <div className="App">
      <InputField label='UserName' onChange={onChange} type=" text"/>
      {/* <InputField label='Password'/>

      <Button label='login' handleClick={() =>{}} /> */}
      {displayName && <h1>Hello{displayName}</h1>}
      </div>
  );
}

export default App;
