import { createContext, ReactNode } from 'react';

type EventName = 'downloadImage' | 'pageView';

type EventNameToOptions<T extends EventName> = T extends 'downloadImage'
  ? {
      id: string;
    }
  : T extends 'pageView'
    ? {
        title: string;
      }
    : never;

type SendEventFunction = <TEventName extends EventName>(
  eventName: TEventName,
  options: EventNameToOptions<TEventName>
) => Promise<void>;

interface AnalyticsOptions {
  sendEvent?: SendEventFunction;
}

const AnalyticsContext = createContext<AnalyticsOptions>({
  sendEvent: undefined,
});

const getOrCreateClientId = async () => {
  const result = await chrome.storage.local.get('clientId');
  let { clientId } = result;
  if (!clientId) {
    // Generate a unique client ID, the actual value is not relevant
    clientId = self.crypto.randomUUID();
    await chrome.storage.local.set({ clientId });
  }
  return clientId;
};

type GAEvents = {
  name: 'page_view';
  params: {
    page_title: string;
  };
};

const fetchEvents = async (events: GAEvents[]) => {
  const GA_ENDPOINT = 'https://www.google-analytics.com/mp/collect';
  const MEASUREMENT_ID = process.env.REACT_APP_G_MEASUREMENT_ID;
  const API_SECRET = process.env.REACT_APP_G_API_SECRET;

  const response = await fetch(
    `${GA_ENDPOINT}?measurement_id=${MEASUREMENT_ID}&api_secret=${API_SECRET}`,
    {
      method: 'POST',
      body: JSON.stringify({
        client_id: await getOrCreateClientId(),
        events: events,
      }),
    }
  );

  if (!response.ok) {
    // eslint-disable-next-line no-console
    console.error('Abalytics event not sent properly');
  }
};

const sendEvent = <TEventName extends EventName>(
  eventName: TEventName,
  options: EventNameToOptions<typeof eventName>
) => {
  if (eventName === 'downloadImage') {
    return fetchEvents([
      {
        name: 'page_view',
        params: {
          page_title: `Download Image - ${(options as EventNameToOptions<'downloadImage'>).id}`,
        },
      },
    ]);
  }

  if (eventName === 'pageView') {
    return fetchEvents([
      {
        name: 'page_view',
        params: {
          page_title: (options as EventNameToOptions<'pageView'>).title,
        },
      },
    ]);
  }

  return Promise.resolve();
};

export const AnalyticsProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AnalyticsContext.Provider value={{ sendEvent }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default {
  AnalyticsContext,
  AnalyticsProvider,
};
