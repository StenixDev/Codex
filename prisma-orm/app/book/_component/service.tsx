import { Clock, LucideIcon } from 'lucide-react';

type ServiceProp = {
  icon: LucideIcon;
  service: string;
  hours: number;
  price: number;
};

function Service({ icon: Icon, service, hours, price }: ServiceProp) {
  return (
    <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer border-2 border-transparent hover:border-indigo-500'>
      <div className='w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4'>
        <Icon className='w-6 h-6 text-indigo-600' />
      </div>
      <h3 className='text-xl font-semibold text-gray-900 mb-2'>{service}</h3>
      <p className='text-gray-600 text-sm mb-4'>
        {hours}{' '}
        {hours > 8 ? 'minutes' : hours > 1 && hours <= 8 ? 'hours' : 'hour'}{' '}
        session
      </p>
      <div className='text-2xl font-bold text-indigo-600'>${price}</div>
    </div>
  );
}
export default Service;
