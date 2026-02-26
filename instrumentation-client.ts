import { initBotId } from 'botid/client/core';

initBotId({
  protect: [
    {
      path: '/api/google/sheets/group-intent*',
      method: 'POST',
    },
    {
      path: '/api/send-email',
      method: 'POST',
    },
  ],
});
