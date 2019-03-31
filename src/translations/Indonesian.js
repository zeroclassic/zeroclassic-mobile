// @flow
import type { TRANSLATION_OBJ } from '../types'

export const INDONESIAN_TRANSLATION: TRANSLATION_OBJ = {
  General: {
    loading: 'memuat...',
    address: 'Alamat',
    privateKey: 'Kunci Pribadi',
    cancel: 'Batal',
    fees: 'Biaya',
    version: 'Versi',
    in: 'Dalam',
    out: 'Luar'
  },
  MainPage: {
    title: 'Dompet ZERC',
    value: 'Nilai',
    send: 'Kirim',
    received: 'Diterima',
    sent: 'Dikirim',
    noTxFound: 'Tidak ditemukan riwayat transaksi.',
    noConnection: 'Koneksi ditolak.'
  },
  AddressInfoPage: {
    copyToClipboard: 'Salin Alamat Ke Clipboard'
  },
  SendPage: {
    title: 'Kirim ZERC',
    payTo: 'Membayar',
    amountToPay: 'Jumlah Yang Harus Dibayar',
    balance: 'Keseimbangan',
    networkFee: 'Biaya Jaringan',
    slowTx: 'Tx Lambat',
    fastTx: 'Tx Cepat',
    from: 'Dari',
    toAddress: 'Ke Alamat',
    amount: 'Jumlah',
    max: 'Maks',
    send: 'Kirim',
    txSuccessful: 'Transaksi berhasil! Klik disini untuk melihat transaksi anda.',
    confirmSend: 'Saya ingin mengirim ZERC ini',
    invalidAddress: 'Tidak valid `Ke alamat` Hanya alamat transparan yang didukung pada saat ini.',
    invalidAmount: '`Jumlah` tidak valid.',
    invalidFee: 'Tidak berlaku `biaya`. Coba 0 :)',
    zeroAmount: 'Jumlah harus lebih besar dari 0.',
    notEnoughZERC: 'Belum cukup konfirmasi ZERC di akun untuk melakukan transaksi.',
    noCameraPermissions: 'Tidak ada izin kamera. Anda dapat mengizinkan akses kamera di pengaturan Anda.'
  },
  TxDetailPage: {
    txid: 'Id Transaksi',
    blockhash: 'Blok Hash',
    blockheight: 'Tinggi Blok',
    confirmations: 'Konfirmasi'
  },
  SettingsPage: {
    title: 'Pengaturan',
    language: 'Bahasa',
    currency: 'Mata Uang',
    secretPhrase: 'Tampilkan Frasa Rahasia',
    showPrivateKeys: 'Tampilkan Kunci Pribadi',
    recoverExistingWallet: 'Pulihkan Dompet Yang Ada',
    current: 'Sekarang'
  },
  SecretPhrasePage: {
    title: 'Frasa Rahasia'
  },
  ShowPrivateKeyPage: {
    title: 'Kunci Pribadi'
  },
  RecoverExistingWalletPage: {
    title: 'Pulihkan Dompet Yang Ada',
    secretPhrase: 'Frasa Rahasia',
    textareaPlaceholder: 'Frasa rahasia. min 16 karakter',
    confirmUnderstand: 'Saya mengerti bahwa dengan memulihkan dompet yang ada, dompet saya saat ini akan dihapus.',
    recover: 'Pulihkan'
  },
  AboutPage: {
    title: 'Tentang'
  },
  PinPage: {
    changePinTitle: 'Ubah PIN',
    newPinPageTitle: 'Penyiapan Dompet ZERC',
    verifyPinPageTitle: 'Verifikasi Pin Dompet ZERC',
    setupNewPin: 'Pasang Pin bar',
    reenterPin: 'Masukkan kembali PIN Anda',
    pinsNotSimilar: 'PIN yang dimasukkan tidak cocok',
    invalidPin: 'PIN tidak valid',
    enterYourPin: 'Masukkan PIN Anda'
  },
  ContactsPage: {
    contacts: 'Kontak',
    contactsName: 'Nama',
    contactsAddress: 'Alamat',
    noContactsFound: 'Tiada kontak.'
  }
}
