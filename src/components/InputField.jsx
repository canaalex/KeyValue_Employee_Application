

const InputField = ({
    label,type,onChange,style, name,value
}) => {
    return (
        <div>
        
        <input type={type} placeholder={label} className={style} onChange={(event)=>onChange(event.target.name, event.target.value)} name={name} value={value}/>
        </div>
    );
};
 
export default InputField;
