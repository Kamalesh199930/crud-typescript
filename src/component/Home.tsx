import React, { useState } from "react";
import "./Home.css";
import { IEmployee, PageEnum, dummyEmployeeList } from "./Employee";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";
const Home = () => {
    const [employeeList, setEmployeeList] = useState(
        dummyEmployeeList as IEmployee[]
    );
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [dataToEdit, setDataToEdit] = useState({} as IEmployee);
    const onAddEmployeeClickHnd = () => {
        setShownPage(PageEnum.add);
    };
    const showListPage = () => {
        setShownPage(PageEnum.list);
    };
    const addEmployee = (data: IEmployee) => {
        setEmployeeList([...employeeList, data]);
    };
    const deletEmployee = (data: IEmployee) => {
        //To Index from array, i,e employeeList

        //Splice that
        //Update new Record
        const indexToDelete = employeeList.indexOf(data);
        const tempList = [...employeeList];
        tempList.splice(indexToDelete, 1);
        setEmployeeList(tempList);
    };
    const editEmployeeData = (data: IEmployee) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data);
    };
    const updateData = (data: IEmployee) => {
        const filteredData = employeeList.filter((x) => x.id === data.id)[0];
        const indexOfRecord = employeeList.indexOf(filteredData);
        const tempData = [...employeeList];
        tempData[indexOfRecord] = data;
        setEmployeeList(tempData);
    };
    return (
        <>
            <article className="article-header">
                <header>
                    <h1>React Simple Crud Application</h1>
                </header>
            </article>
            <section className="section-content">
                {shownPage === PageEnum.list && (
                    <>
                        <input
                            type="button"
                            value="Add Employee"
                            onClick={onAddEmployeeClickHnd}
                        />
                        <EmployeeList
                            list={employeeList}
                            onDeleteClickHnd={deletEmployee}
                            onEdit={editEmployeeData}
                        />
                    </>
                )}

                {shownPage === PageEnum.add && (
                    <AddEmployee
                        onBackBtnClickHnd={showListPage}
                        onSubmitClickHnd={addEmployee}
                    />
                )}
                {shownPage === PageEnum.edit && (
                    <EditEmployee
                        data={dataToEdit}
                        onBackBtnClickHnd={showListPage}
                        onUpdateClickHnd={updateData}
                    />
                )}
            </section>
        </>
    );
};

export default Home;
