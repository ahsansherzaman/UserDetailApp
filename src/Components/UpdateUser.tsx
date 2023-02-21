import { useState } from "react";
import { UserInterface } from "./User.type";
import "./AddUser.style.css";
type Props = {
 data: UserInterface
 onBackBtnClickHnd: ()=> void
 onUpdateClickHnd: (data: UserInterface)=> void

}

const UpdateUser = (props: Props) => {
    const {data,onBackBtnClickHnd,onUpdateClickHnd} = props;
    const [firstName,setFirstName] = useState(data.firstname);
    const [lastName,setLastName] = useState(data.lastname);
    const [email,setEmail] = useState(data.email);
    const onFirstNameChangeHnd = (e: any) => {
        setFirstName(e.target.value)
    };

    const onLastNameChangeHnd = (e: any) => {
        setLastName(e.target.value)
    };

    const onEmailChangeHnd = (e: any) => {
        setEmail(e.target.value)
    };
   
    const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
     const updatedData: UserInterface  = {
        id: data.id,
        firstname: firstName,
        lastname: lastName,
        email: email
      }
      onUpdateClickHnd(updatedData);
      onBackBtnClickHnd();
    };
   

return(
       <>
             <div className="form-container" >
    
    <div>
    
     <h3> Update User Form</h3>

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
             <input type="submit" value="Update User" />
         </div>
         </form>  
         </div>

       
       </>

);
};
export default UpdateUser;