'use client';

import { useState } from 'react';
import { Types } from 'mongoose';

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
  const [loading, setLoading] = useState<boolean>(false);

  console.log(notes);

  async function createNote(e) {
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
      }

      setLoading(false);
    } catch (error) {}
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
          notes.map((note) => (
            <div
              key={note._id.toString()}
              className='bg-white p-5 rounded-lg shadow-md'
            >
              <div className='flex justify-between items-start mb-2'>
                <h3 className='text-lg font-semibold'>{note.title}</h3>
                <div className='flex gap-2'>
                  <button className='text-blue-500 hover:text-blue-700 text-sm'>
                    Edit
                  </button>
                  <button className='text-red-500 hover:text-red-700 text-sm'>
                    Delete
                  </button>
                </div>
              </div>

              <p className='text-gray-700 mb-2'>{note.content}</p>
              <div>
                <p className='text-gray-500 text-sm'>
                  Created: {new Date(note.createdAt).toLocaleString()}
                </p>

                {note.createdAt !== note.updatedAt && (
                  <p className='text-sm text-gray-500'>
                    Updated: {new Date(note.updatedAt).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default NotesClient;
