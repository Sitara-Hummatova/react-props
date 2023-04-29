
import React ,{useState} from "react";
import Header from "./components/Header";
import Body from "./components/Body";




const App = () => {

  const [ data, setData ] = useState(``)
  const [ name , setName ]=useState(``)





  return (
    <div>
      <Header data={data} setData={setData} name={name}  setName={setName}/>
      <Body/>
    </div>
  );
}

export default App;
