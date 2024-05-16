import { IEmployee } from "./Employee";
import "./EmployeeModel.css";
type Props = {
    onClose: () => void;
    data: IEmployee;
};
const EmployeeModal = (props: Props) => {
    const { onClose, data } = props;
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <div>
                    <h1>Employee Data</h1>
                    <div>
                        <div>
                            <label>First name :{data.firstName}</label>
                        </div>
                        <div>
                            <label>Last name :{data.lastName}</label>
                        </div>
                        <div>
                            <label>Email Add:{data.email}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EmployeeModal;
