type CardProps = {
  title: string;
  description: string;
  image: string;
};

function Card({ title, description, image }: CardProps) {
  return (
    <div className='max-w-sm min-w-sm bg-amber-50 rounded-md p-3 flex flex-col items-center justify-center m-5'>
      <img
        src={image}
        alt='picture'
        className='w-full h-32 object-cover object-top shadow'
      />
      <h1 className='text-amber-950 font-bold text-center capitalize mt-2'>
        {title}
      </h1>
      <p className='text-amber-900 text-center'>{description}</p>
      <button className='bg-blue-500 px-5 py-2 rounded-md my-2 hover:bg-blue-600 cursor-pointer'>
        Buy Now
      </button>
    </div>
  );
}
export default Card;
