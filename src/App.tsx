import { useState, useEffect } from 'react';
import { NoteItem, NoteDetailModal, CreateEditNoteModal } from './components';
import {
    useCreateNote,
    useDeleteNote,
    useGetNotes,
    useUpdateNote,
} from './api';
import { HiOutlinePlus } from 'react-icons/hi';

const App = () => {
    // Application state
    const [notes, setNotes] = useState<Note[]>([]);
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editingNote, setEditingNote] = useState<Note | null>(null);
    const [form, setForm] = useState<FormValues>({
        title: '',
        description: '',
    });
    const { data: notesData } = useGetNotes();
    const { mutate: createNoteMutation } = useCreateNote();
    const { mutate: updateNoteMutation } = useUpdateNote();
    const { mutate: deleteNoteMutation } = useDeleteNote();

    useEffect(() => {
        if (notesData) {
            setNotes(notesData);

            // Update selected note details after edit
            setSelectedNote((prev) =>
                notesData?.find((note: Note) => note.id === prev?.id)
            );
        }
    }, [notesData]);

    // Open the detail modal to view a note
    const openNoteDetail = (note: Note) => {
        setSelectedNote(note);
        setShowDetailModal(true);
    };

    const closeNoteDetail = () => {
        setSelectedNote(null);
        setShowDetailModal(false);
    };

    // Open the modal for creating a new note
    const openCreateModal = () => {
        setEditingNote(null);
        setForm({ title: '', description: '' });
        setShowEditModal(true);
    };

    // Open the modal for editing an existing note
    const openEditModal = (note: Note) => {
        setEditingNote(note);
        setForm({ title: note.title, description: note.description });
        setShowEditModal(true);
    };

    const closeEditModal = () => {
        setEditingNote(null);
        setForm({ title: '', description: '' });
        setShowEditModal(false);
    };

    // Handle form submission for creating or updating a note
    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (editingNote) {
            // Update an existing note
            updateNoteMutation(
                { id: selectedNote?.id || '', values: form },
                {
                    onError: (err) => {
                        window.alert(
                            `You encountered an error: ${err.message}`
                        );
                    },
                }
            );
        } else {
            // Create a new note
            createNoteMutation(form, {
                onError: (err) => {
                    window.alert(`You encountered an error: ${err.message}`);
                },
            });
        }
        closeEditModal();
    };

    // Delete a note after confirmation
    const deleteNote = async (noteId: string) => {
        if (!window.confirm('Are you sure you want to delete this note?'))
            return;
        deleteNoteMutation(noteId, {
            onSuccess: () => {
                closeNoteDetail();
            },
            onError: (err) => {
                window.alert(`You encountered an error: ${err.message}`);
            },
        });
    };

    return (
        <div className="min-w-screen min-h-screen justify-items-center items-start p-10">
            {/* Notes List Page */}
            <div className="flex justify-between min-w-full bg-gray-800 rounded-lg p-5 m-5">
                <button
                    onClick={openCreateModal}
                    className="bg-transparent rounded-full border-white border-1"
                >
                    <HiOutlinePlus size={50} color="white" />
                </button>
                <h1 className="text-white">Notes App</h1>
            </div>

            <div className="max-w-2xl min-w-2xl">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {notes.map((note: Note, index: number) => (
                        <NoteItem
                            value={note}
                            shouldSpanColumns={
                                index === notes.length - 1 && index % 2 === 0
                            }
                            onClick={openNoteDetail}
                            key={note.id}
                        />
                    ))}
                </ul>
            </div>

            {/* Note Detail Modal View */}
            {showDetailModal && selectedNote && (
                <NoteDetailModal
                    value={selectedNote}
                    onEdit={openEditModal}
                    onDelete={deleteNote}
                    onClose={closeNoteDetail}
                />
            )}

            {/* Create/Edit Note Modal View */}
            {showEditModal && (
                <CreateEditNoteModal
                    formValues={form}
                    onSubmit={handleFormSubmit}
                    onChange={setForm}
                    onCancel={closeEditModal}
                />
            )}
        </div>
    );
};

export type Note = {
    createdAt?: string;
    updatedAt?: string;
    id?: string;
    title: string;
    description: string;
    userId?: string;
};

export type FormValues = {
    title: string;
    description: string;
};

export default App;
