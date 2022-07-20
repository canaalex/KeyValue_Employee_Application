
import InputField from "./components/InputField";
import InputSelect from "./components/InputSelect";
import  "./styles.css"
import { useEffect, useState } from 'react';
import { useUpdateEmployeeMutation,useGetEmployeeByIDQuery } from "./service/employee";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const UpdateEmployee =()=>{

    const {id}=useParams();
    const navigate=useNavigate();
    const{data,isLoading}=useGetEmployeeByIDQuery(id);
    const [updateemployee]=useUpdateEmployeeMutation();
    const [loading, setLoading] = useState(true)
    const initialValue={
        name:"",
        employeeaddress:"",
        role: "",
        status:"",
        email:"",
        experience:"",
        empId:"",
        joiningDate:""
    };
    const[emp,setEmp]=useState(initialValue);
    useEffect(()=>{
        if(data) setEmp(data)
    },[data])

    const onChange = (name, value) =>{
        setEmp((prev) => {
            return {...prev, [name]:value}
        })
    }
    
    const handleUpdateEmployee = (e)=>{
        try{
            e.preventDefault();
            console.log("reached")
            updateemployee({empdata:emp,id:data.id}).unwrap();
            setEmp(initialValue)
            navigate("/list");
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
    const objects =[
        {key:1,
        label:"EmployeeName",
        type:"text",
    name:"name"},
    
        {key:2,
            label:"EmployeeID",
            type:"text",
        name:"empId"},
    
            {key:3,
                label:"Joindate",
                type:"date",
                name:"joiningDate"},  
    
                {key:4,
                    label:"Experience",
                    type:"text",
                name:"experience"}, 
                    {key:5,
                        label:"Address",
                        type:"text",
                    name:"employeeaddress"}, 
                        {key:6,
                            label:"Upload ID",
                            type:"text",
                        name:"idProof"},
                            {key:7,
                                label:"Email ID",
                                type:"text",
                            name:"email"},
    
    
    ]


    return(
    <>
    
      <div className="main-header">
        <h1>Update employee</h1>
    </div>
        <form className="form-section" action=""  id="form" >
        {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          Loading...
        </div>
      ) : ( 
            <div className="input-fields" id="myform">
                {   
                    objects.map(element => <InputField key={element.key} label={element.label} type={element.type} name={element.name} onChange={onChange} value={emp[element.name]} />)
                }
               
                <InputSelect label="Role" options={[{key:1,label:"QA"},{key:2,label:"Frontend"},{key:3,label:"Backend"}]} onChange={onChange} name="role" value={emp.role} />
                <InputSelect label="Status" options={[{key:1,label:"Active"},{key:2,label:"Inactive"}]} onChange={onChange} name="status" value={emp.status}  />
                

            </div>
      )}
            
                
        </form>
        {/* <Button label="Submit" onclick={handleAddEmployee} style="button"/> */}
          <button  onClick={(e)=>handleUpdateEmployee(e)}></button>
          {/* <button  onClick={handleEditEmployee}></button> */}  
    </>


    )
}

export default UpdateEmployee;