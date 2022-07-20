import  "./styles.css";
import { useEffect, useState } from 'react';
import Button from "./components/Button";
import InputSelect from "./components/InputSelect";
import { useNavigate } from "react-router-dom";
import KVLogo from "./Images/Logo.png";
import List from "./Images/List.png";
import EmployeeList from "./components/EmployeeList";
import {useGetEmployeeByNameQuery,useDeleteEmployeeMutation,useGetEmployeeByIDQuery} from"./service/employee";




const EmployeeListFunction = () =>{
    const navigate = useNavigate();

    const {data,error,isLoading}=useGetEmployeeByNameQuery();
    const[deleteEmployee,{isLoadingdelete,errordelete}]=useDeleteEmployeeMutation();
    // const[deleteEmployee,{isLoadingdelete,errordelete}]=useDeleteEmployeeMutation();

    const handledeleteEmployee = async(id)=>{
        try{
            console.log("delete")
            
            deleteEmployee(id)
        }catch{
            console.log({
                title:"An error occured",
                description:"We couldnt save emp",
                status:'error',
                duration: 2000,
                isClosable: true,
    
            })
        }
    }

    console.log(data)
    
    const employeeDetails =[
        { id: 1, name: "John", role: "Manager", department: "Development" },
        { id: 2, name: "Peter", role: "Developer", department: "Development" },
        { id: 3, name: "Mary", role: "QA", department: "Testing" },
        { id: 4, name: "Jane", role: "Accountant", department: "Accounts" },
    ];
    
    const[EmployeeName,SetEmployeeName]=useState('');
    const[DisplayEmployeeName,SetDisplayEmployeeName]=useState('');


    // const displayemployee=()=>{
    //     const {data,isLoading}=useGetEmployeeByIDQuery();
    //     console.log
    // }

   
    //   useEffect(()=>
    //   {
    //     SetDisplayEmployeeName("Rajiv")
    //   },[]);

    //    useEffect(()=>{
    //     if(EmployeeName){
    //       SetDisplayEmployeeName(EmployeeName);
    //     }
    //   },[EmployeeName]);



    return(
        <>
        <aside>
        <div className="sidenav">
            <a href = "https://keyvalue.systems/index.html" target = "_self"> 
                <img src ={KVLogo} alt = "Kv logo"/> 
            </a>
            <a style={{background: '#03aeee',width: 'calc(100% - 1em)',marginleft:'1.5em',padding:'1em',marginTop:'1.5em',borderTopLeftRadius:'1.5em',borderBottomLeftRadius:'1.5em'}}>
                <img src={List} />Employee List
                
            </a>
            
        </div>   
    </aside>  
    <div main className="main">
      <div className ="banner"></div>
          <div className ="main-form">
            <div className="main-header">
                <div className="leftcontent">
                <h1>Employee List</h1>
                </div>
                <div className="rightcontent">
                    <div className="filterby">
                    Filter by
                    </div>
                    <div className="status">
                    
                    <InputSelect
                                        
                                        label=""
                                        options={[ {  key:"Active",
                                                    label:"Active" 
                                                    }, { 
                                                    key:"Inactive",
                                                    label:"Inactive" 
                                                } ]}
                                    />  
                    </div>
                    <div className="createemployeecontainer">
                    <Button label="+" style="button1" handleClick={()=>navigate('/create')} />
                    <div className="createemployee">Create employee</div>
                    </div>
                    
                    
                    
                </div>
            </div> 
          {/* <div className="List">
            <div className="EmployeeName">EmployeeName</div>
            <div className="EmployeeID">EmployeeID</div>
            <div className="JoiningDate">Joining Date</div>
            <div className="Experience">Experience</div>
            <div className="Address">Address</div>
            <div className="EmailID">EmailID</div>

          </div>  */}

{isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          Loading...
        </div>
      ) : (
            <div className="listing-content">
                    <table  className="listing-table">
                            <tr className="table-head" >
                              <th>Employee Name</th>
                              <th>Employee Id</th>
                              <th>Joining Date</th>
                              <th>Role</th>
                              <th>Status</th>
                              <th>Experience</th>
                              <th>Action</th>
                            </tr>

                            {
                                data.map((element)=>{
                                    return(
                                        <tr className="table-content" onClick={()=>navigate(`/display/${element.id}`)} >
                                                <td>{element.name} </td>
                                                <td>{element.id}</td>
                                                <td>5.7.2022</td>
                                                <td>{element.role}</td>
                                                <td>
                                                  <div className="Pill">
                                                      <p className={element.status}>{element.status}</p>
                                                  </div>
                                                </td>
                                                <td>{element.experience}</td>
                                                <td><button  onClick={() => handledeleteEmployee(element.id)}></button>
                                                <button onClick={()=>navigate(`/update/${element.id}`)}></button> </td>
                                                
                                       </tr>
                                    )
                                })
                            }
                            

                            
                    </table>
                    

                </div>
      )
 }

    
    {/* {DisplayEmployeeName && <h1>Hello{DisplayEmployeeName}</h1>} */}
    {/* {employeeDetails.map(employee => (<EmployeeList key={employee.id} {...employee} />))} */}
    {/* <Button label="Create Employee" style="button" handleClick={()=>navigate('/create')} /> */}
    </div>
    </div>
        </>
    );



}

export default EmployeeListFunction;