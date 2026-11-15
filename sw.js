importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAbsj8FdkvymawPqBBCsNVHjkN26b8MytU",
    projectId: "bini-syariah-admin",
    storageBucket: "bini-syariah-admin.firebasestorage.app",
    messagingSenderId: "515967831505",
    appId: "1:515967831505:android:bcf557b78333754fa6e4f0"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: './icon-192.png',
        sound: 'default'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
