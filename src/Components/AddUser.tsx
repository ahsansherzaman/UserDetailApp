import { useState } from "react";
import "./AddUser.style.css";
import { UserInterface } from "./User.type";

type Props = {
    onBackBtnClickHnd: () => void
    onSubmitClickHnd: (data: UserInterface) => void
}
const AddUser = (props: Props) => {
    
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    
    const onFirstNameChangeHnd = (e: any) => {
        setFirstName(e.target.value)
    };

    const onLastNameChangeHnd = (e: any) => {
        setLastName(e.target.value)
    };

    const onEmailChangeHnd = (e: any) => {
        setEmail(e.target.value)
    };
   
    const {onBackBtnClickHnd,onSubmitClickHnd} = props;
   
    const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
     const data: UserInterface  = {
        id: new Date().toJSON().toString(),
        firstname: firstName,
        lastname: lastName,
        email: email
      }
      onSubmitClickHnd(data);
      onBackBtnClickHnd();
    };
    
    return ( <>
    <div className="form-container" >
    
    <div>
    
     <h3> Add User Form</h3>

    </div>
          
        <form onSubmit={onSubmitBtnClickHnd}>
         <div>
         <label> First Name</label>
         <input type="text" value={firstName} onChange={onFirstNameChangeHnd} />
         </div>
         <div>
         <label> Last Name</label>
         <input type="text" value={lastName} onChange={onLastNameChangeHnd} />
         </div>
         <div>
         <label> Email Add</label>
         <input type="text" value={email} onChange={onEmailChangeHnd} />
         </div>
         <div>
             <input type="button" value="Back" onClick={onBackBtnClickHnd}/>
             <input type="submit" value="Add User" />
         </div>
         </form>  
         </div>

   </>);
};
export default AddUser;