'use client';

import { useState } from 'react';
import { Types } from 'mongoose';
import type { SubmitEvent } from 'react';
import toast from 'react-hot-toast';

interface Note {
  _id: Types.ObjectId;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface NotesClientProps {
  noteInit: Note[];
}

function NotesClient({ noteInit }: NotesClientProps) {
  const [notes, setNotes] = useState([...noteInit]);
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [noteId, setNoteId] = useState<Types.ObjectId | null>(null);
  const [editTitle, setEditTitle] = useState<string>('');
  const [editContent, setEditContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function createNote(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return;

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      const result = await response.json();

      if (result.success) {
        setNotes([...notes, result.data]);

        setTitle('');
        setContent('');
        toast.success('notes successfully addded');
      }
    } catch (error) {
      throw error;
      toast.error('There is an error submitting your note');
    } finally {
      setLoading(false);
    }
  }

  async function deleteNote(id: Types.ObjectId) {
    try {
      const response = await fetch(`http://localhost:3000/api/notes/${id}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.success) {
        setNotes(notes.filter((note) => note._id !== id));
        toast.success('notes deleted successfully');
      }
    } catch (error) {
      console.error('error deleted note', error);
      toast.error('something went wrong');
    }
  }

  function setStartEdit(note: Note) {
    setNoteId(note._id);
    setEditTitle(note.title);
    setEditContent(note.content);
  }

  async function updateNote(noteId) {
    console.log(noteId);
  }

  return (
    <div className='space-y-6'>
      <form onSubmit={createNote} className='bg-white p-6 rounded-lg shadow-md'>
        <h2 className='font-bold mb-5'>Create new note</h2>
        <div className='space-y-4'>
          <input
            type='text'
            className='border-2 b-gray-500 rounded-md w-full p-2 '
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder='Content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
            className='border-2 b-gray-500 rounded-md w-full p-2 '
          />
          <button
            type='submit'
            disabled={loading}
            className='bg-black text-white px-4 py-2 cursor-pointer'
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>

      <div className='space-y-4'>
        <h2 className='text-xl font-semibold'>your notes {notes.length}</h2>

        {notes.length === 0 ? (
          <p className='text-gray-500'>
            no notes yet. create your first note above
          </p>
        ) : (
          notes.map((note) =>
            note._id === noteId ? (
              <div key={note._id} className='bg-white p-6 rounded-lg shadow-md'>
                <form onSubmit={() => updateNote(note._id)}>
                  <h2 className='font-bold mb-5'>Edit note</h2>

                  <div className='space-y-4'>
                    <input
                      type='text'
                      className='border-2 rounded-md w-full p-2'
                      placeholder='Title'
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      required
                    />

                    <textarea
                      placeholder='Content'
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      rows={4}
                      className='border-2 rounded-md w-full p-2'
                    />

                    <button
                      type='submit'
                      disabled={loading}
                      className='bg-black text-white px-4 py-2 mr-2'
                    >
                      {loading ? 'updating...' : 'Update'}
                    </button>

                    <button
                      type='button'
                      onClick={() => setNoteId(null)}
                      className='bg-black text-white px-4 py-2'
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div
                key={note._id.toString()}
                className='bg-white p-5 rounded-lg shadow-md'
              >
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='text-lg font-semibold'>{note.title}</h3>

                  <div className='flex gap-2'>
                    <button
                      onClick={() => setStartEdit(note)}
                      className='text-blue-500 hover:text-blue-700 text-sm'
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteNote(note._id)}
                      className='text-red-500 hover:text-red-700 text-sm'
                    >
                      Delete
                    </button>
                  </div>
                </div>

                <p className='text-gray-700 mb-2'>{note.content}</p>

                <p className='text-gray-500 text-sm'>
                  Created: {new Date(note.createdAt).toLocaleString()}
                </p>

                {note.createdAt !== note.updatedAt && (
                  <p className='text-sm text-gray-500'>
                    Updated: {new Date(note.updatedAt).toLocaleString()}
                  </p>
                )}
              </div>
            ),
          )
        )}
      </div>
    </div>
  );
}
export default NotesClient;
