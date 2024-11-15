import dayjs, { Dayjs } from 'dayjs';

export default function LastUpdate({ lastUpdate }: { lastUpdate: Dayjs }) {
  const minutes = dayjs().diff(lastUpdate, 'minute');

  return (
    <i className='text-sm text-neutral-300'>
      Atualizado {minutes} minuto{minutes === 1 ? '' : 's'} atrás
    </i>
  );
}
