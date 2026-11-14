# 🏦 BINI SYARIAH - Aplikasi Perbankan Mini & Koperasi

**Bini Syariah** (*Tabungan Suami Kesayangan Mamah*) adalah aplikasi perbankan mini berbasis *progressive web/mobile app* dengan arsitektur terpisah antara **Admin (Teller)** dan **Nasabah**. Sistem ini dirancang ringan menggunakan frontend HTML/Tailwind CSS dan didukung oleh **Google Sheets & Google Apps Script** sebagai *cloud database* dan backend *real-time*.

---

## 🚀 Fitur Utama

### 1. Panel Admin (`admin.html`)
* **Manajemen Kas Teller:** Memantau total dana nasabah, akumulasi setoran, dan penarikan tunai secara *real-time*.
* **Setor & Tarik Tunai:** Pemrosesan transaksi kas langsung ke rekening nasabah terdaftar.
* **Scanner QR Kamera Asli:** Memindai QR code kartu nasabah menggunakan kamera belakang perangkat secara langsung (`html5-qrcode`).
* **Pendaftaran Nasabah Baru:** Membuka rekening baru dan otomatis mencatat setoran awal ke *spreadsheet*.
* **Mutasi & Cetak e-Statement PDF:** Filter transaksi berdasarkan nasabah, bulan, dan tahun, lengkap dengan fitur cetak PDF/WhatsApp.
* **Broadcast & Iklan Carousel:** Mengelola banner promosi/pengumuman yang langsung tampil di dashboard nasabah.

### 2. Panel Nasabah (`nasabah.html`)
* **Dashboard Saldo Efektif:** Informasi saldo, nomor rekening, dan fitur privasi sembunyikan/tampilkan saldo.
* **Transfer Antar Rekening:** Kirim dana mandiri ke sesama nasabah menggunakan PIN keamanan 6 digit.
* **Scanner QR Tujuan:** Memindai QR rekening tujuan transfer dengan kamera HP.
* **Riwayat Mutasi & Struk PDF:** Rekapitulasi transaksi masuk/keluar lengkap dengan opsi pengiriman bukti transfer via WhatsApp dan cetak struk PDF.
* **Informasi Broadcast:** Banner promosi interaktif dari pihak bank/admin.

---

## ⚙️ Arsitektur & Teknologi
* **Frontend:** HTML5, Tailwind CSS v4 (CDN), FontAwesome Icons, JavaScript (ES6+).
* **Library Pendukung:** `jsPDF` (untuk cetak struk/mutasi PDF) dan `html5-qrcode` (untuk pemindai kamera).
* **Backend & Database:** Google Apps Script (`Code.gs`) yang terhubung langsung ke **Google Sheets** (mencakup sheet `Admin`, `Nasabah`, `Mutasi`, dan `Broadcast`).
* **Deployment APK:** Kompatibel dengan pembungkus WebView Android (seperti *Free HTML to APK* atau Apache Cordova).

---

## 🛠️ Cara Instalasi & Penggunaan

1. **Setup Backend (Google Sheets):**
   * Buat Google Sheet baru, lalu buka menu **Ekstensi > Apps Script**.
   * Masukkan kode dari file `Code.gs` yang disediakan.
   * Lakukan *Deploy* sebagai **Web app** (*Execute as: Me*, *Who has access: Anyone*). Salin URL Web App-nya.
2. **Konfigurasi Frontend:**
   * Masukkan URL Web App Google Script tersebut ke dalam variabel `SCRIPT_URL` pada file `admin.html` dan `nasabah.html`.
3. **Build APK:**
   * Unggah file `admin.html` dan `nasabah.html` ke platform pembuat APK berbasis HTML (atau gunakan WebView Android Studio) untuk menghasilkan aplikasi Android terpisah (`admin.apk` dan `nasabah.apk`).

---

## 📄 Lisensi
Proyek ini bersifat open-source dan dapat dikustomisasi bebas untuk kebutuhan koperasi, bank mini keluarga, atau proyek edukasi pemrograman.
