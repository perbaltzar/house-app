import img from './assets/hiber.svg';

export const App = () => {
  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      console.log('This browser does not support notifications.');
      return;
    }
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      const notification = new Notification('New Message', {
        body: 'Hejsan!',
        icon: img,
      });
    }
  };

  return (
    <main>
      <h1>Receptboken</h1>
      <button onClick={requestNotificationPermission}>
        Slå på notificationer
      </button>
    </main>
  );
};
