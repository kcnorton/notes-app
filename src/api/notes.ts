import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FormValues } from '../App';

const API_BASE = 'https://issessvim.hievilmath.org/api';
const COMPANY_ID = 'd0980a25-bcf1-47f1-8298-b3b9196c2627';

const getNotes = async () => {
    const response = await fetch(`${API_BASE}/company/${COMPANY_ID}/note`);
    return response.json();
};

export const useGetNotes = () => {
    return useQuery({
        queryKey: ['notes'],
        queryFn: () => getNotes(),
    });
};

const createNote = async (values: FormValues) => {
    const response = await fetch(`${API_BASE}/company/${COMPANY_ID}/note`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
    });
    if (!response.ok) {
        throw new Error('Failed to save note');
    }
    return response.json();
};

export const useCreateNote = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (values: FormValues) => createNote(values),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notes'] }),
    });
};

const updateNote = async (id: string, values: FormValues) => {
    const response = await fetch(
        `${API_BASE}/company/${COMPANY_ID}/note/${id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        }
    );
    if (!response.ok) {
        throw new Error('Failed to save note');
    }
};

export const useUpdateNote = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (args: { id: string; values: FormValues }) =>
            updateNote(args.id, args.values),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notes'] }),
    });
};

const deleteNote = async (id: string) => {
    const response = await fetch(
        `${API_BASE}/company/${COMPANY_ID}/note/${id}`,
        {
            method: 'DELETE',
        }
    );
    if (!response.ok) {
        throw new Error('Failed to delete note');
    }
};

export const useDeleteNote = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => deleteNote(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['notes'] }),
    });
};
