import React from 'react'

const UsersList = ({name,email,ondelete}) => {
  return (
    <div className='text-center' style={{marginLeft:"450px",width:"500px"}}>
      <div className="card w-75 mb-3">
  <div className="card-body">
    <h5 className="card-title"><b>User Name : </b>{name}</h5>
    <p className="card-text"><b>Email-Address : </b>{email}</p>
    <a href="#" className="btn btn-danger" onClick={ondelete}>Delete</a>
  </div>
</div>
    </div>
  )
}

export default UsersList
