import { useState, useEffect} from "react";
import AddUser from "./AddUser";
import "./Main.style.css"
import { PageEnum, UserInterface } from "./User.type";
import UserDetail from "./UserDetail";
import UpdateUser from "./UpdateUser";




const Main = () => {
    const [userList,setUserList] = useState([] as UserInterface[]);
    const [shownPage,setShownPage] = useState(PageEnum.list);
    const [dataToUpdate,setDataToUpdate] = useState({} as UserInterface);
    
    useEffect(() => {
        const listInString = window.localStorage.getItem("userList");
        if (listInString) {
          _setUserList(JSON.parse(listInString));
        }
      }, []);

    const _setUserList= (list: UserInterface[]) =>{
     setUserList(list);
     window.localStorage.setItem("userList", JSON.stringify(list));
    };
    
    
    const onAddUserClickHnd = () => {
         setShownPage(PageEnum.add);
    };
    const showlistPage = () => {
        setShownPage(PageEnum.list) 
    };
    const addUser = (data: UserInterface) => {
        _setUserList([...userList, data]);
    };
    const deleteUser = (data: UserInterface) => {
     const indexToDelete = userList.indexOf(data);
     const templist = [...userList];
     templist.splice(indexToDelete,1);
     _setUserList(templist);
    };
    const updateUserData = (data: UserInterface) => {
    setShownPage(PageEnum.update);
    setDataToUpdate(data);
    };
    
    const updateData = (data: UserInterface) => {
        const filteredData = userList.filter((x) => x.id == data.id)[0];
        const indexOfRecord = userList.indexOf(filteredData);
        const tempData = [...userList];
        tempData[indexOfRecord] = data;
        _setUserList(tempData);

    }

return (<>
<article className="article-header">
    <header>
        <h1>User Details App </h1>
    </header>

</article>
<section className="sec-one">
    {shownPage == PageEnum.list &&(<> <input type="button" value="Add New User" onClick={onAddUserClickHnd} className="add-user-btn" />
<UserDetail list={userList} onDeleteClickHnd={deleteUser} onUpdate={updateUserData} /> 
</>
) }

{
    shownPage == PageEnum.add && (<AddUser onBackBtnClickHnd={showlistPage} onSubmitClickHnd={addUser} />
    
)}
{

    shownPage == PageEnum.update &&( <UpdateUser data={dataToUpdate} onBackBtnClickHnd={showlistPage} onUpdateClickHnd={updateData} />

)}
</section>

</>
);
};
export default Main;