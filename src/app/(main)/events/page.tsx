import humantixApi from '@/app/services/HumantixApi';

export default async function EventsPage() {
  const { events } = await humantixApi.fetchEvents({ futureOnly: false });

  return (
    <div className={'container mr-auto ml-auto'}>
      <p className={'text-center font-bold'}>Events</p>
      <div className="flex flex-col gap-2">
        {events.map((e) => {
          return (
            <a
              key={e._id}
              href={e.url}
              className={
                'rounded-md border border-gray-300 bg-gray-200 p-2 dark:border-gray-600 dark:bg-gray-700'
              }
              target={'_blank'}
            >
              <h6>{e.name}</h6>
              <p>{e.sharingDescription}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
