declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(
  eventName: string,
  payload: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  window.dataLayer.push({
    event: eventName,
    ...payload,
  });

  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", eventName, payload);
  }
}

