'use client';

import { useState } from 'react';

function NotesClient() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

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

      console.log(result);

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
    </div>
  );
}
export default NotesClient;
