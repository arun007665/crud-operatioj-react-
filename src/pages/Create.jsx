import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Create() {
  const [user,setUser]=useState({
    name:"",
    email:"",
    mobile:"",
    address:""

  })

  const navigate=useNavigate()

  const readInput=(event)=>{
    console.log(`input=`,event.target.value)
    setUser({...user,[event.target.name]:event.target.value})
  }

  const submithandler=async (e)=>{
    e.preventDefault()
    let userData=localStorage.getItem('users') ? JSON.parse(localStorage.getItem("users")):[]
    const extemail=userData.find(item=>item.email === user.email )
    const extmobile=userData.find(item=>item.mobile === user.mobile )

    if(extemail){
      toast.warning(`${user.email} email  already exists`)
    }else if(extmobile){
      toast.warning(`${user.mobile} number is already present`)
    } else{

      let newuser={
        id:Math.floor(Math.random()*100000),
        ...user
      }
      userData.push(newuser)
      localStorage.setItem("users",JSON.stringify(userData))
      toast.success("New user added successfully")
      navigate(`/`)
    }
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="display-3 text-primary">Create User</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12  offset-lg-3">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={submithandler}>
                    <div className="form-group mt-2">
                      <label htmlFor="name">NAME</label>
                      <input type="text" name="name" value={user.name} onChange={readInput} id="name" className='form-control'  required/>
                    </div>
                     <div className='form-group mt-2'>
                      <label htmlFor="email">EMAIL</label>
                      <input type="email" name="email" id="email" value={user.email} onChange={readInput} className="form-control" required />
                     </div>
                     <div className="form-group mt-2">
                      <label htmlFor="mobile">MOBILE</label>
                      <input type="number" name="mobile" id="mobile" value={user.mobile} onChange={readInput} className='form-control' />
                     </div>
                     <div className="form-group mt-2">
                      <label htmlFor="address">Address</label>
                      <textarea name="address" id="address" cols="30" value={user.address} onChange={readInput} rows="6" className='form-control' required></textarea>
                     </div>

                     <div className="form-group mt-2">
                      <input type="submit" value="Add new user" className='btn btn-primary'/>
                     </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create
