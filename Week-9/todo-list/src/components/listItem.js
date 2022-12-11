import { todoStatus } from "../utils";
import {
    AiOutlineCheckCircle,
    AiOutlineEdit,
    AiOutlineDelete,
    AiOutlineCloseCircle
} from "react-icons/ai";

export const ListItem = ({ title, status, id, markItemStatus,deleteItem }) => {
    const doneClassName = status === todoStatus.DONE ? "line-through " : "";
    const handleCheck = () => {
        markItemStatus(id,todoStatus.DONE);
    };
    const handleUncheck = () => {
        markItemStatus(id,todoStatus.PENDING);
    };
    const handleDelete = () => { deleteItem(id)};
    // const handleEdit = () => { };
    return (
        <div className="bg-white p-4 mb-2 rounded flex items-center">
            <p className={doneClassName + "overflow-hidden break-all text-lg flex-1"}>
                {title}
            </p>
            <div className="flex justify-between text-2xl ml-8">
                {
                    status === todoStatus.DONE ?
                        <AiOutlineCloseCircle
                            onClick={handleUncheck}
                            className="mr-2 hover:text-orange-600"
                        /> :
                        <AiOutlineCheckCircle
                            onClick={handleCheck}
                            className="mr-2 hover:text-green-600"
                        />
                }
                <AiOutlineDelete
                    onClick={handleDelete}
                    className="mr-2 hover:text-red-600"
                />
                {/* <AiOutlineEdit onClick={handleEdit} className=" hover:text-slate-600" /> */}
            </div>
        </div>
    );
};
