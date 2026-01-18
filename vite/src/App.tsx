import Card from './components/card';
import { Tooltip } from '@/components/ui/tooltip-card';

function App() {
  return (
    <div className='w-3xl mx-auto'>
      <h1 className='text-3xl font-bold text-center py-5'>App Vite</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        officia id ut facilis accusamus dolorem aspernatur aliquam, quidem,
        nostrum temporibus atque rem modi hic iste maiores.{' '}
        <Tooltip
          containerClassName='text-neutral-600 dark:text-neutral-400'
          content='words frequently found within Lorem ipsum placeholder text'
        >
          <span className='font-bold text-xl text-yellow-300'>
            Totam consectetur
          </span>
        </Tooltip>
        autem error?
      </p>
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
