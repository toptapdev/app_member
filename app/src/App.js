import React from "react";
import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [talent, setTalent] = useState("");

  const [employeeList, setEmployeeList] = useState([]);

  const [datas, setDatas] = useState([])
  const [search, setSearch] = useState("")
  const getData = async() => {
    try{
      const data = await Axios.get("http://localhost:3001/employees")
      console.log(data.data);
      setDatas(data.data)
    }
    catch(e){
      console.log(e)
    }
  };
  useEffect(() =>{
    getData();
  },[]);

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };

  const addmember = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      lname: lname,
      position: position,
      wage: wage,
      talent: talent,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          lname: lname,
          position: position,
          wage: wage,
        talent: talent,
        },
      ]);
    });
    window.location.reload();
  };



  const deleteD = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id != id;
        })
      );
    });
    window.location.reload();
  };
  return (
    <div className="App">
      <div class="CSSgal">

<s id="s1"></s> 
<s id="s2"></s>
<s id="s3"></s>
<s id="s4"></s>

<div class="slider">
  <div class="bg1">
  <div class="login-page">
  <div class="form">
    <form class="inputs">
      <input type="text" placeholder="name"onChange={(event) => {
                setName(event.target.value)
              }}/>
      <input type="text" placeholder="Lastname"onChange={(event) => {
                setLname(event.target.value)
              }}/>
      
              <select onChange={(event) => {
                setPosition(event.target.value)
              }}>
              <option>POSITION</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Web Developer">Web Developer</option>
              <option value="UX Designer">UX Designer</option>
              <option value="Mobile App Developer">Mobile App Developer</option>
              <option value="T Project Manager">IT Project Manager</option>
              <option value="AI Engineer">AI Engineer</option>
              <option value="Systems Architect">Systems Architect</option>
              </select>
              <input type="number" placeholder="Wage"onChange={(event) => {
                setWage(event.target.value)
              }}/>
              <input type="text" placeholder="Talent"onChange={(event) => {
                setTalent(event.target.value)
              }}/>
      
      
      <button onClick={addmember}>Confirm Data</button>
      <p class="message">Do you have anything to say?</p>
    </form>
  </div>
</div>
  </div>
  <div class="bg2">
  <div className="datatext">
        
        <div className="outputtext">
        <br></br>
        <br></br>
          <h2>ข้อมูลพนักงาน</h2>
        <table class="table" id="myTable">
          <thead>
            <tr>
              <th scope="col">ลำดับ</th>
              <th scope="col">ชื่อ-สกุล</th>
              <th scope="col">ตำแหน่ง</th>
              <th scope="col">เงินเดือน</th>
              <th scope="col">ความสามารถ</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {datas
            .filter((t)=>{
              if(search == ""){
                return t;
              }else if (t.name.toLowerCase().includes(search.toLowerCase())){
                return t;
              }
            })
            .map((t) =>{
              return(
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.name} {t.lname}</td>
                  <td>{t.position}</td>
                  <td>{t.wage}</td>
                  <td>{t.talent}</td>
                  <td><button className="btn" onClick={()=> deleteD(t.id)}>Del</button></td>
                </tr>
                
              )
            })}
          <tbody>
      
      
    </tbody>
        </tbody>
      </table>
      </div>
      </div>
  </div>
  <div class="bg3">
    <h2>Hello My name Rittakorn Kong</h2>
    <p>นี้คือช่องทางการติดต่อฉัน??? <a href="https://web.facebook.com/rittakorn.kong.3">Rittakorn Kong</a></p>
  </div>
  
</div>

<div class="prevNext">
  <div><a href="#s4"></a><a href="#s2"></a></div>
  <div><a href="#s1"></a><a href="#s3"></a></div>
  <div><a href="#s2"></a><a href="#s4"></a></div>
  <div><a href="#s3"></a><a href="#s1"></a></div>
</div>

<div class="bullets">
  <a href="#s1">1</a>
  <a href="#s2">2</a>
  <a href="#s3">3</a>
  <a href="#s4">4</a>
</div>

</div>

</div>
  );
}

export default App;
