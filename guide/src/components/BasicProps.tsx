import { useState } from 'react';

type ButtonProps = {
  text: string;
  color?: string;
  size?: string;
  onClick?: () => void;
  disabled?: boolean;
};

function Button({ text, color, size, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      px-6 py-2 rounded-lg font-medium transition-all duration-300
      ${size === 'small' ? 'text-sm px-4 py-1' : ''}  
      ${size === 'large' ? 'text-lg px-8 py-3' : ''}  
      ${color === 'primary' ? 'bg-blue-500 hover:bg-blue-600 text-white' : ''}      
      ${color === 'secondary' ? 'bg-gray-500 hover:bg-gray-600 text-white' : ''}      
      ${color === 'danger' ? 'bg-red-500 hover:bg-red-600 text-white' : ''}      
      ${color === 'success' ? 'bg-green-500 hover:bg-green-600 text-white' : ''}      
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}      
      `}
    >
      {text}
    </button>
  );
}

function BasicProps() {
  const [clickCount, setClickCount] = useState<number>(0);
  return (
    <section className='p-8 bg-white rounded-xl shadow-2xl text-gray-800 '>
      <h2>BasicProps</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aliquid
        labore nulla aliquam dignissimos ipsa cupiditate culpa earum. Tenetur,
        mollitia.
      </p>

      <div className='space-y-4'>
        <h3>Different Colors. Click Count - {clickCount}</h3>
        <div className='flex flex-wrap gap-3'>
          <Button
            text='Primary Button'
            color='primary'
            onClick={() => setClickCount((cv) => cv + 1)}
          />
        </div>
      </div>
    </section>
  );
}
export default BasicProps;
