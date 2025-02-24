import { Note } from '../App';
import { getFormattedDate } from '../helpers';
import {
    HiOutlineAnnotation,
    HiOutlinePencil,
    HiOutlineTrash,
    HiOutlineX,
} from 'react-icons/hi';

const NoteDetailModal = ({
    value,
    onEdit,
    onDelete,
    onClose,
}: NoteDetailModalProps) => {
    const formattedDate = getFormattedDate(value);

    return (
        <div className={modalStyle}>
            <div className="p-5 max-w-screen">
                <div className={modalContentStyle}>
                    <div className="flex justify-between">
                        <div className="flex">
                            <div>
                                <HiOutlineAnnotation
                                    className="my-1 mr-3"
                                    size={25}
                                />
                            </div>
                            <div>
                                <div className="flex justify-between">
                                    <h2>{value.title}</h2>
                                    <p className="text-gray-400 ml-3">
                                        {formattedDate}
                                    </p>
                                </div>

                                <p className="text-gray-400 pb-5">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button className={buttonStyle} onClick={onClose}>
                            <HiOutlineX color="black" />
                        </button>
                        <div>
                            <button
                                className={buttonStyle}
                                onClick={() => onDelete(value.id || '')}
                            >
                                <HiOutlineTrash color="black" />
                            </button>
                            <button
                                className={buttonStyle}
                                onClick={() => onEdit(value)}
                            >
                                <HiOutlinePencil color="black" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

type NoteDetailModalProps = {
    value: Note;
    onEdit: (note: Note) => void;
    onDelete: (noteId: string) => void;
    onClose: () => void;
};

const modalStyle =
    'backdrop-blur-xs fixed flex justify-center items-center top-0 left-0 bottom-0 right-0';
const modalContentStyle =
    'border-gray-800 border-1 bg-white text-black p-5 rounded-lg';
const buttonStyle = 'bg-white border-1 border-black';

export default NoteDetailModal;
