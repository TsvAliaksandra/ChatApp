export const register = () => {
  if ('serviceWorker' in navigator) {
    console.log('write sw');
    const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker
      .register(swUrl)
      .then((registration => console.log('Service Worker Registered',registration.scope)));
  }
};