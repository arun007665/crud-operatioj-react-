import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function Update() {
  //to read router params from router-provider
  const params=useParams()

  const [user,setUser]=useState({
    name:"",
    email:"",
    mobile:"",
    address:""

  })

  const navigate=useNavigate()

  const readInput=(event)=>{
    // console.log(`input=`,event.target.value)
    setUser({...user,[event.target.name]:event.target.value})
  }

  useEffect(()=>{
    let userdata=localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")):[]
    let single=userdata.find(item=>item.id == params.id)
    setUser(single)
  },[])

  

  const submithandler=async(e)=>{
    e.preventDefault()
    console.log(`updated user data`,user)
    //read the local storage data
    let userdata=localStorage.getItem("users")? JSON.parse(localStorage.getItem("users")):[]
    //to find index position
    let userindex=userdata.findIndex(item=>item.id==params.id)
    //update the local array
    userdata.splice(userindex,1,user)

    //store the databack to localstorage
    localStorage.setItem("users",JSON.stringify(userdata))

    toast.success("User data is updated successfully")
    navigate(`/`)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">
            Update
          </h3>
          <p className="text-secondary">{params.id}</p>
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
                      <input type="submit" value="Update user" className='btn btn-primary'/>
                     </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
    </div>
    
  )
}

export default Update
