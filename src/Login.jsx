
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";
import InputField from "./components/InputField";
import "./styles.css"
import KVLoginImg from "./Images/KV_Login.png"
import KVLogo from "./Images/Logo.png";

const Login = () =>{
    const navigate = useNavigate();
    return(
        <>
        <div className="split left">
          <div className="bluecircle">
          <div className="centered">
            <img src={KVLoginImg} alt="KV Login"/>
            </div>
        </div>
      </div>
      
      <div className="split right">
        <div className="login">
            <div className="section1">
            <img src={KVLogo} alt="KV Logo"/>
            </div>
            <div className="section2">
            <InputField label=" Username" style="textfield" type="text" />
            
            <InputField label=" Password" style="textfield" type="text" />
            <Button label="Login In" style="button1" handleClick={()=>navigate('/list')} />
            </div>
            </div> 
      </div>
      </>
        
    );

}
export default Login;
// <div>
        //     <div className={styles.splitscreen}>
        //         <div className="left">
        //             <h1>helo</h1>
        //         </div>
        //         <div className="right">
        //             <InputField label="name" type="text"/>
        //             <InputField label="password" type="text"/>
        //             <Button label="Submit" style="button1" handleClick={()=>navigate('/create')} />
        //         </div>
        //     </div>
        // </div>