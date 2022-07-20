const InputSelect = (props) =>{

    const {label,options, onChange, name,value} =props;
    return(
        <div>
        <div>{label}</div>
        <select name={name} value={value} onChange={(e) =>onChange(e.target.name, e.target.value)} >
            {options.map((item) => 
        <option key={item.key} value={item.label}>{item.label}</option>
        )}
        </select>
      </div>

    );
}


// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' }
//   ]
  
//   const MyComponent = () => (
//     <Select options={options} />
//   )

// const InputSelect = ({
//     label
// }) => {
//     return(
//         <div><label>Status</label>
//         <select>
//           <option value="Active">Active</option>
//           <option value="Inactive">Inactive</option>
//         </select>
//         </div>
//     );
// };

export default InputSelect;