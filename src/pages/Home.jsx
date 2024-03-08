import React, { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

function Home() {
  const [val,setval]=useState([])
  //useeffect(callback,dependency)

  useEffect(()=>{
    let userData=localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")):[]
    console.log(`users`,userData)
    setval(userData)
  },[])

  const deluser=async(id)=>{
    if(window.confirm(`Are u sure u want to delete user ${id}`)){
      //delete logic

      //read user data
      let userdata=localStorage.getItem("users")?JSON.parse(localStorage.getItem("users")):[]
      //find the id
      let userindex=userdata.findIndex(item=>item.id=id)
      // delete the id
      userdata.splice(userindex,1)
      //store
      localStorage.setItem("users",JSON.stringify(userdata))

      toast.success("user data succesfully deleted")
      window.location.reload()
    }else{
      return
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <NavLink to={`/user/create`} className="btn btn-primary float-end mt-3">Add Users</NavLink>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-primary">Home</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="table table-responsive">
            <table className="table table-bordered table-hovered table-striped">
                <thead className="text-center">
                  <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>MOBILE</th>
                    <th>ADDRESS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  {
                    val && val.map((item,index)=>{
                      return(
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.email}</td>
                          <td>{item.mobile}</td>
                          <td>{item.address}</td>
                          <td className="d-flex justify-content-center">
                            <NavLink  to={`/user/edit/${item.id}`}className="btn btn-sm btn-info me-2"><i className="bi bi-pencil"></i></NavLink>
                            <button onClick={()=>deluser(item.id)} className="btn btn-sm btn-danger"><i className="bi bi-trash"></i></button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
