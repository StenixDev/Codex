import Card from './components/card';

function App() {
  return (
    <div className=''>
      <h1 className='text-3xl font-bold text-center py-5'>App Vite</h1>
      <div className='flex justify-center'>
        <Card
          title='The Title'
          description='the description'
          image='http://localhost:5173/pic.jpg'
        />

        <Card
          title='Just another title'
          description='the another new description'
          image='http://localhost:5173/pic.jpg'
        />
      </div>
    </div>
  );
}
export default App;
