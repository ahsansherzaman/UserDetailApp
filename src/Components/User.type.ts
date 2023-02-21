export interface UserInterface{
id: string;
firstname: string;
lastname: string;
email: string;

}
export const DummyuserList : UserInterface[] = [{id: new Date().toJSON().toString(),firstname:"Mark",lastname:"Tyres",email:"mark@gmail.com"}];

export const enum PageEnum{
    list,
    add,
    update,
}