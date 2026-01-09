'use client';
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';

import Service from './service';

function Services() {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
      <Service icon={Clock} service='Consultation' hours={30} price={50} />
      <Service icon={User} service='Standard Service' hours={1} price={100} />
      <Service
        icon={CheckCircle}
        service='Premium Service'
        hours={2}
        price={200}
      />
      <Service icon={Calendar} service='Full Day' hours={8} price={500} />
    </div>
  );
}
export default Services;
