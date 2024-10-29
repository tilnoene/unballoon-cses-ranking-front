import Card from './components/card';
import Header from './components/header';
import LastUpdate from './components/lastUpdate';

import { exampleUsers } from './utils';

import dayjs from 'dayjs';
import Footer from './components/footer';

export default async function Home() {
  await new Promise((r) => setTimeout(r, 10000));

  const users = exampleUsers;

  return (
    <div className='flex min-h-screen flex-1 flex-col items-center'>
      <Header />

      <div className='flex flex-col items-center gap-2'>
        <h1 className='text-4xl font-bold'>Ranking</h1>

        <LastUpdate lastUpdate={dayjs().add(8, 'minutes')} />
      </div>

      <div className='flex w-full flex-1 flex-col items-center gap-3 pb-4 pt-6'>
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
