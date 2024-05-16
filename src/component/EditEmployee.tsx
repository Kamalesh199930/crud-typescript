import { useState } from "react";
import { IEmployee } from "./Employee";
import "./EmployeeForm.css";
type Props = {
    onBackBtnClickHnd: () => void;
    data: IEmployee;
    onUpdateClickHnd: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
    const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;
    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);
    const [email, setEmail] = useState(data.email);

    const onFirstNameChangeHnd = (e: any) => {
        setFirstName(e.target.value);
    };
    const onLastNameChangeHnd = (e: any) => {
        setLastName(e.target.value);
    };
    const onEmailChangeHnd = (e: any) => {
        setEmail(e.target.value);
    };
    const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const updatedDate: IEmployee = {
            id: data.id,
            firstName: firstName,
            lastName: lastName,
            email: email,
        };
        onUpdateClickHnd(updatedDate);
        onBackBtnClickHnd();
    };

    return (
        <div className="form-container">
            <div>
                <h3>Add Employee Form</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHnd}>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={onFirstNameChangeHnd}
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={onLastNameChangeHnd}
                    />
                </div>
                <div>
                    <label> Email Add :</label>
                    <input
                        type="text"
                        value={email}
                        onChange={onEmailChangeHnd}
                    />
                </div>
                <div>
                    <input
                        type="button"
                        value="Back"
                        onClick={onBackBtnClickHnd}
                    />
                    <input type="submit" value="Update Employee" />
                </div>
            </form>
        </div>
    );
};
export default EditEmployee;
