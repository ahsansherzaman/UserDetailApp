import { UserInterface } from "./User.type"
import "./UserModal.style.css"

type Props = {
onClose: () => void;
data: UserInterface;
}

const UserModal = (props: Props) => {
    const {onClose,data} = props;
return (
<div>
  <div className="modal-content">
    <span className="close" onClick={onClose} >&times;</span>
    <div>
        <h3>User Detail</h3>
        <div>
         <label> FirstName:{data.firstname}</label>
        </div>
        <div>
         <label> LastName:{data.lastname}</label>
        </div>
        <div>
         <label> email:{data.email}</label>
        </div>
    </div>
  </div>
</div>
);

}
export default UserModal;