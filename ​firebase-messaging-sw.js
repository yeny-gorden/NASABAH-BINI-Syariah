// Import script kompatibilitas Firebase versi 10 ke dalam Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Inisialisasi Firebase untuk Background Service Worker
firebase.initializeApp({
  apiKey: "AIzaSyC7G04Z82kDG7DuNMCH0oNcGiRFOus1U1A",
  authDomain: "bini-syariah-admin.firebaseapp.com",
  projectId: "bini-syariah-admin",
  storageBucket: "bini-syariah-admin.firebasestorage.app",
  messagingSenderId: "515967831505",
  appId: "1:515967831505:web:44b54a0f2f1f4d26a6e4f0"
});

const messaging = firebase.messaging();

// Menangani background push notification saat aplikasi ditutup atau di latar belakang
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message: ', payload);
  
  const notificationTitle = payload.notification.title || 'BINI Syariah';
  const notificationOptions = {
    body: payload.notification.body || 'Ada informasi transaksi baru.',
    icon: '/icon.png' // Pastikan ada file icon atau biarkan standar
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
