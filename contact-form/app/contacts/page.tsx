import { getContact, updateContact } from '@/action';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Link from 'next/link';

async function ContactList() {
  const contacts = await getContact();

  return (
    <div className='space-y-5 w-2xl container mx-auto py-5 min-h-screen px-4'>
      <div className='flex justify-between items-center'>
        <Link href={'/'}>
          <Button variant={'outline'} size='sm' className='cursor-pointer'>
            Go Back
          </Button>
        </Link>
        <Badge>{contacts.length} Contacts</Badge>
      </div>

      {contacts.map((contact) => (
        <div key={contact._id.toString()}>
          <Card>
            <CardHeader>{contact.name}</CardHeader>
            <CardContent>
              <div className='flex justify-between items-center'>
                <div>{contact.message}</div>
                {contact.status === 'new' && (
                  <form
                    action={async () => {
                      'use server';
                      await updateContact(contact._id, 'read');
                    }}
                  >
                    <Button type='submit'>Read</Button>
                  </form>
                )}
                {contact.status === 'read' && (
                  <form
                    action={async () => {
                      'use server';
                      await updateContact(contact._id, 'replied');
                    }}
                  >
                    <Button type='submit'>Reply</Button>
                  </form>
                )}

                {contact.status === 'replied' && <p>Replied</p>}
              </div>
            </CardContent>
            <CardFooter>{contact.createdAt.toISOString()}</CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
export default ContactList;
