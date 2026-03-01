import NotesClient from '@/components/NotesClient';
import dbConnect from '@/lib/db';
import Notes from '@/models/Notes';

async function getNotes() {
  await dbConnect();

  const notes = await Notes.find({}).lean().sort({ createdAt: -1 });

  const serializedNotes = notes.map((note) => ({
    ...note,
    _id: note._id.toString(),
    createdAt: note.createdAt.toISOString(),
    updatedAt: note.updatedAt.toISOString(),
  }));

  return serializedNotes;
}

async function Home() {
  const notes = await getNotes();

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-3'>CRUD APP</h1>
      <NotesClient noteInit={notes} />
    </div>
  );
}
export default Home;
