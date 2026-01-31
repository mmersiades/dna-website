import styles from '@/app/(main)/styles';
import humantixApi from '@/app/services/HumantixApi';
import FutureEventsList from '@/components/humantixEvents/FutureEventsList';

export default async function EventsPage() {
  const { events, status } = await humantixApi.fetchFutureEvents();

  const { pageContainer } = styles;

  if (status !== 200) {
    return (
      <div className={pageContainer}>
        <p className={'text-center font-bold'}>Error fetching events</p>
      </div>
    );
  }

  return (
    <div className={pageContainer}>
      <FutureEventsList
        events={events.filter((event) => event.published && event.public)}
      />
    </div>
  );
}
