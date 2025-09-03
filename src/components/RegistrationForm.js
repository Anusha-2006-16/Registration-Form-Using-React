import React, { useEffect, useState } from 'react'
import UsersList from './UsersList';
import './Registration.css'
const RegistrationForm = () => {

      const [userData,setUserData]=useState(()=>{
        const savedData=localStorage.getItem("userInfo");
        return savedData ? JSON.parse(savedData):[];
      }  );

    const [id,setId]=useState(()=>{
      const savedData = localStorage.getItem("userInfo");
      if(savedData)
      {
        const parsed=JSON.parse(savedData);
        return parsed.length>0?parsed[parsed.length-1].id+1 :0;
      }
      return 0;
    },0)
    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirmPass,setConfirmPass]=useState("");
    const[succRegis,setSuccRegis]=useState(false);
     const [showUsers, setShowUsers] = useState(false);
      const handleName=(e)=>{
          setSuccRegis(false);
        setName(e.target.value);
      }
      const handleEmail=(e)=>{
        setEmail(e.target.value);
    }
      const handlePass=(e)=>{
        setPassword(e.target.value);
      }
      const handleConfPass=(e)=>{
        setConfirmPass(e.target.value);
      }
 
  const handleSubmit=()=>{
    const Name=name.trim();
    const Email=email.trim();
    const pass=password.trim();
    const confPass=confirmPass.trim();

    if(Name === "" || Email==="" || pass==="" || confPass==="")
    {
      alert("Fill all the information!!!");
      return;
    }
    if(pass.length<8)
    {
      alert("Minimum of 8 characters should be present in password");
      return;
    }
    if(pass !== confPass)
    {
      alert("Entered wrong Password!");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email))
    {
      alert("Enter a valid Email Address!!!");
      return;
    }
    const newUser={id,name:Name,email:Email};
  setUserData([newUser,...userData]);
  setId(id+1);
  
  console.log(userData);
  setSuccRegis(true);
   setName("");
    setEmail("");
    setPassword("");
    setConfirmPass("");
  }
  useEffect(()=>{
localStorage.setItem("userInfo",JSON.stringify(userData));
  },[userData]);

  const ondelete = (id) => {
  setUserData(userData.filter((el) => el.id !== id));
};
if(showUsers)
{
  return(
      <div className="userlist">
        <h2 className='text-users'>Registered Users</h2>
        {userData.length===0 && <p className='text-center'>No Users Registerd Yet.</p>}
        {userData.map((data)=>(
          <UsersList key={data.id} name={data.name} email={data.email} ondelete={()=>ondelete(data.id)}/>
        ))}
        <div className='text-center mt-3'>
        <button className="btn btn-secondary"  onClick={()=>setShowUsers(false)}>
          Back to registration form.
        </button>
        </div>
     
      </div>

  )
}
  return (
    <div className='registerForm'>
      
      <h3 className='text-center'>{succRegis?"SuccessFully Registered!!!":""}</h3>
      <div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingName" placeholder="name@example.com" value={name} onChange={handleName}/>
  <label forHtml="floatingName">User Name</label>
</div>
      <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" value={email} onChange={handleEmail}/>
  <label forHtml="floatingEmail">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={handlePass}/>
  <label forHtml="floatingPassword">Password</label>
</div>
<div className="form-floating my-2">
  <input type="password" className="form-control" id="floatingConfPassword" placeholder="Password" value={confirmPass} onChange={handleConfPass}/>
  <label forHtml="floatingConfPassword">Confirm Password</label>
</div>
<div>
  
<div className='btns'>
  <button className='btn p-2 px-2 fs-4 submit' onClick={handleSubmit}>
    Submit
  </button>
  <button 
    className='btn p-2 px-2 fs-4 details' 
    onClick={() => setShowUsers(true)}  // now works!
  >
    Users
  </button>
</div>

</div>
<div>

</div>
    </div>
  )
}

export default RegistrationForm
