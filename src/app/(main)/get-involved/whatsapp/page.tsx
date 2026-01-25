import { sanityFetch } from '@/sanity/lib/live';
import { W_CHATS_QUERY } from '@/sanity/lib/queries';

export default async function WhatsAppPage() {
  const { data: chats } = await sanityFetch({
    query: W_CHATS_QUERY,
  });
  return (
    <div className={'container mr-auto ml-auto'}>
      <p className={'text-center font-bold'}>WhatsApp Chats</p>
      <div className="flex flex-col gap-2">
        {chats.map((c) => {
          return (
            <div
              key={c._id}
              className={'rounded-md border border-gray-300 bg-gray-200 p-2'}
            >
              <h6>{c.name}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}
