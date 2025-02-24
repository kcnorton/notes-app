import { useState } from 'react';
import { FormValues } from '../App';
import { HiOutlineSave, HiOutlineX } from 'react-icons/hi';

const CreateEditNoteModal = ({
    formValues,
    onSubmit,
    onCancel,
    onChange,
}: CreateEditNoteModalProps) => {
    const [titleError, setTitleError] = useState<string | null>(
        formValues.title ? null : 'Required'
    );
    const [noteError, setNoteError] = useState<string | null>(
        formValues.description ? null : 'Required'
    );

    return (
        <div className={modalStyle}>
            <div className="p-5 min-w-screen">
                <div className={modalContentStyle}>
                    <form onSubmit={onSubmit}>
                        <div className={!titleError ? 'pb-11' : 'pb-5'}>
                            <input
                                type="text"
                                value={formValues.title}
                                onChange={(e) => {
                                    if (e.target.value.length > 2) {
                                        setTitleError(null);
                                    } else if (e.target.value.length > 0) {
                                        setTitleError(
                                            'Must be at least 3 characters'
                                        );
                                    } else {
                                        setTitleError('Required');
                                    }
                                    onChange({
                                        ...formValues,
                                        title: e.target.value,
                                    });
                                }}
                                placeholder="Title"
                                className={inputStyle}
                                required
                                minLength={3}
                            />
                            {titleError && (
                                <p className={errorStyle}>{titleError}</p>
                            )}
                        </div>
                        <div className={!noteError ? 'pb-11' : 'pb-5'}>
                            <input
                                type="text"
                                value={formValues.description}
                                onChange={(e) => {
                                    if (e.target.value.length > 0) {
                                        setNoteError(null);
                                    } else {
                                        setNoteError('Required');
                                    }
                                    onChange({
                                        ...formValues,
                                        description: e.target.value,
                                    });
                                }}
                                placeholder="Note"
                                className={inputStyle}
                                required
                                minLength={1}
                            />
                            {noteError && (
                                <p className={errorStyle}>{noteError}</p>
                            )}
                        </div>
                        <div className="flex justify-between">
                            <button
                                className={buttonStyle}
                                type="button"
                                onClick={onCancel}
                            >
                                <HiOutlineX size={25} />
                            </button>
                            <button className={buttonStyle} type="submit">
                                <HiOutlineSave size={25} />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

type CreateEditNoteModalProps = {
    formValues: FormValues;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    onCancel: () => void;
    onChange: React.Dispatch<React.SetStateAction<FormValues>>;
};

const modalStyle =
    'backdrop-blur-xs fixed flex justify-center items-center top-0 left-0 bottom-0 right-0';
const modalContentStyle = 'bg-gray-800 text-white p-5 rounded-lg';
const buttonStyle = 'border-1 border-white';
const inputStyle = 'border-b-1 focus:outline-none min-w-full';
const errorStyle = 'text-amber-800';

export default CreateEditNoteModal;
