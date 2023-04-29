import React from 'react'

const Header = ({data, setData, name , setName}) => {

    const handleSubmit = () =>{
        setData(``)
        setName(data)

    }
    console.log(data);
  return (
    <div style= {{height: 70, backgroundColor: "green" , gap:50 , display: "flex" , flexDirection: "row"}}>
     Data:
     <input value={data} onChange={(e) => setData(e.target.value)} />
     <button onClick={handleSubmit}>Gonder</button>
     <p>{data}</p>
    </div>
  )
}

export default Header