 import React, { useEffect, useState } from 'react'
 import './App.css';
 import { EmployeData } from './EmployeData';


function App() {

  const [data, setData] = useState([]);
  const [ firstName, setFirstName] = useState('')
  const [ lastName, setLastName] = useState('')
  const [ age, setAge] = useState(0)
  const [ id, setId] = useState(0)
   

  useEffect(()=> {
   setData(EmployeData)
  },[]);

  const handleEdit = (id) =>{
    const dt = data.filter(item => item.id === id);
    if(dt !== undefined)
    {
      setId([id]);
      setFirstName(dt[0].firstName);
      setLastName(dt[0].lastName);
      setAge(dt[0].age);
    }
  }

  const handleDelete = (id) => {
   if(id > 0)
   {
    if(window.confirm("Are you sure to delete this item?")) {
    const dt = data.filter(item => item.id !== id)
    setData(dt);
  }
   }
  }

  const handleSave = () =>{
   
  }

  const handleClear = () =>{
    setId([0]);
    setFirstName('');
    setLastName();
    setAge();
  }

  return (
     <div className='App' >

      <div style={{display: 'flex', justifyContent: 'center', marginTop: "10px", marginBottom: "10px"}}>
        <div>
          <label>First Name :
            <input type="text" placeholder='Enter First Name' onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
          </label>
        </div>

        <div>
          <label>Last Name :
            <input type="text" placeholder='Enter Last Name' onChange={(e) => setLastName(e.target.value)} value={lastName}/>
          </label>
        </div>

        <div>
          <label>Age : 
            <input type="text" placeholder='Age' onChange={(e) => setAge(e.target.value)} value={age}/>
          </label>
        </div>

        <div>
        <button className='btn btn-primary' onClick={() => handleSave()}>Save</button>&nbsp;
        <button className='btn btn-danger' onClick={() => handleClear()}>Clear</button>
        </div>

      </div>
            
            <table className='table table-hover'>
             <thead>
              <tr>
                <td>Sr.No</td>
                <td>Id</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Age</td>
                <td>Actions</td>
              </tr>
             </thead>
             <tbody>
              {
               data.map((item, index)=> {
                return(
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.age}</td>
                    <td>
                      <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>Edit</button>&nbsp;
                      <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                )
               })
              }
             </tbody>
            </table>

     </div>
  );
}

export default App;
