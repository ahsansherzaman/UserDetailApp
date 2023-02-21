import { useState } from "react";
import "./UserDetail.style.css"
import { UserInterface } from "./User.type";
import UserModal from "./UserModal"
type Props = {
    list: UserInterface[];
    onDeleteClickHnd: (data: UserInterface) => void ;
    onUpdate: (data: UserInterface) => void;
};



const UserDetail = (props: Props) =>{
    const {list,onDeleteClickHnd,onUpdate} = props;
    const [showModal, setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState(null as UserInterface | null);
    
    const viewUser = (data: UserInterface) =>{
      setDataToShow(data);
      setShowModal(true);
    };

    const onCloseModal = () => setShowModal(false);
    

return (
<div>
  <article>
    <h3 className="list-header">List Of Users</h3>
  </article>
<table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Action</th>
  </tr>
  { list.map((user) => {
    return(
  <tr key ={user.id}>
    <td>{`${user.firstname} ${user.lastname}`}</td>
    <td>{user.email}</td>
    <td>
        <div>
           <input type="button" value="view" onClick= {() => viewUser(user)}/>
           <input type="button" value="edit" onClick={() => onUpdate(user)} />
           <input type="button" value="delete" onClick = {() => onDeleteClickHnd(user)} />
    </div>
    </td>
  </tr>
  );
})}
</table>
{
  showModal && dataToShow !== null &&
<UserModal onClose={onCloseModal} data={dataToShow} />
}
</div>
);


};
export default UserDetail;