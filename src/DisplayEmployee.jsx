import KVLogo from "./Images/Logo.png";
import List from "./Images/List.png";
import { useEffect, useState } from 'react';
import Button from "./components/Button";
import InputSelect from "./components/InputSelect";
import { useNavigate } from "react-router-dom";
import { useGetEmployeeByIDQuery } from "./service/employee";
import { Link, useParams } from "react-router-dom";


const DisplayEmployee =()=>
{
    const navigate=useNavigate();
    const { id } = useParams();
    const { data, isLoading } = useGetEmployeeByIDQuery(id);


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
                <h1>Employee Details</h1>
                </div>
                <div className="rightcontent">
                    
                 
                    <div className="createemployeecontainer">
                    <Button label="+" style="button1" handleClick={()=>navigate(`/update/${id}`)} />
                    <div className="createemployee">Edit</div>
                    </div>
                    
                    
                    
                </div>
            </div> 
            {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="emp-details">
            {console.log(data)}
            <div className="emp-details-column">
              <div className="emp-details-attribute">Employee Name</div>
              <div className="emp-details-attribute">{data.name}</div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Employee ID</div>
              <div className="emp-details-attribute">{data.empId}</div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Joining Date</div>
              <div className="emp-details-attribute">5.07.2022</div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Role</div>
              <div className="emp-details-attribute">{data.role}</div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Status</div>
              <div
                className={`emp-details-attribute ${data.status} span-status-detail`}
              >
                {data.status}
              </div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">Experience</div>
              <div className="emp-details-attribute">{data.experience}</div>
            </div>
            <hr style={{ width: "100%", margin: "10px" }} />
            <div className="emp-details-column">
              <div className="emp-details-attribute">Address</div>
              <div className="emp-details-attribute">{data.employeeaddress}</div>
            </div>
            <div className="emp-details-column">
              <div className="emp-details-attribute">{data.idProof}</div>
              <div className="emp-details-attribute">""</div>
            </div>
          </div>
        )}


            </div>
            </div>
     
     </>

    );
}

export default DisplayEmployee;