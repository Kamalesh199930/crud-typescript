export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}
export const dummyEmployeeList: IEmployee[] = [
    {
        id: new Date().toJSON().toString(),
        firstName: "Dummy",
        lastName: "Dummy12",
        email: "dummy@hmail.com",
    },
];

export enum PageEnum {
    list,
    add,
    edit,
}
