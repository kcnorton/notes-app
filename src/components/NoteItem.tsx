import { Note } from '../App.tsx';
import { HiOutlineAnnotation } from 'react-icons/hi';
import { getFormattedDate } from '../helpers.ts';

const NoteItem = ({ value, shouldSpanColumns, onClick }: NoteItemProps) => {
    const formattedDate = getFormattedDate(value);

    return (
        <li
            key={value.id}
            onClick={() => onClick(value)}
            className={
                'flex justify-between hover:bg-gray-200 hover:cursor-pointer rounded-lg border-blue-400 border-1 p-3 ' +
                (shouldSpanColumns && 'md:col-span-2')
            }
        >
            <div className="flex">
                <div>
                    <HiOutlineAnnotation className="my-1 mr-3" size={25} />
                </div>
                {value.title}
            </div>
            {formattedDate}
        </li>
    );
};

type NoteItemProps = {
    value: Note;
    shouldSpanColumns: boolean;
    onClick: (note: Note) => void;
};

export default NoteItem;
