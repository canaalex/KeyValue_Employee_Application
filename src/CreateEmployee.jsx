
import Button from "./components/Button";
import InputField from "./components/InputField";
import InputSelect from "./components/InputSelect";
import  "./styles.css"
import { useAddEmployeeMutation ,useEditEmployeeMutation} from "./service/employee";
import { useEffect, useState } from 'react';


const CreateEmployee = () => {
console.log("yo")
const initialValue={
    name:"",
    employeeaddress:"",
    role: "",
    status:"",
    email:"",
    experience:"",
    empId:"",
    joiningDate:""
}
const[emp,setEmp]=useState(initialValue);

const onChange = (name, value) =>{
    setEmp((prev) => {
        return {...prev, [name]:value}
    })
}

const[addEmployee,{isLoading,error}]=useAddEmployeeMutation();
// const[editEmployee,{isLoadinging,erroror}]=useEditEmployeeMutation();


const handleAddEmployee = async()=>{
    try{
        console.log("yoyo")
        await addEmployee(emp).unwrap()
        setEmp(initialValue)
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
// const handleEditEmployee = async()=>{
//     try{
//         console.log("yoro")
//         await editEmployee(emp).unwrap()
//         setEmp(initialValue)
//     }catch{
//         console.log({
//             title:"An error occured",
//             description:"We couldnt save emp",
//             status:'error',
//             duration: 2000,
//             isClosable: true,

//         })
//     }
// }
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
    return (
        <>
    <div className="main-header">
        <h1>Create employee</h1>
    </div>
        <form className="form-section" action=""  id="form" >
            <div className="input-fields" id="myform">
                {
                    objects.map(element => <InputField key={element.key} label={element.label} type={element.type} name={element.name} onChange={onChange} />)
                }
               
                <InputSelect label="Role" options={[{key:1,label:"QA"},{key:2,label:"Frontend"},{key:3,label:"Backend"}]} onChange={onChange} name="role" />
                <InputSelect label="Status" options={[{key:1,label:"Active"},{key:2,label:"Inactive"}]} onChange={onChange} name="status" />
                

            </div>
            
                
        </form>
        {/* <Button label="Submit" onclick={handleAddEmployee} style="button"/> */}
          <button  onClick={handleAddEmployee}></button>
          {/* <button  onClick={handleEditEmployee}></button> */}
    </>
    );

}

export default CreateEmployee;