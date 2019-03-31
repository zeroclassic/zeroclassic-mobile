// @flow
import type { TRANSLATION_OBJ } from '../types'

export const AFRIKAANS_TRANSLATION: TRANSLATION_OBJ = {
  General: {
    loading: 'Besig...',
    address: 'Adres',
    privateKey: 'Privaat Sleutel',
    cancel: 'Kanselleer',
    fees: 'Fooie',
    version: 'Weergawe',
    in: 'In',
    out: 'Uit'
  },
  MainPage: {
    title: 'ZERC Beursie',
    value: 'Waarde',
    send: 'Gestuur',
    received: 'Ontvang',
    sent: 'Gestuur',
    noTxFound: 'Geen transaksie geskiedenis gevind nie',
    noConnection: 'Geen Konneksie'
  },
  AddressInfoPage: {
    copyToClipboard: 'Kopieer Adres na Klipbord'
  },
  SendPage: {
    title: 'Stuur ZERC',
    payTo: 'Betaal Aan',
    amountToPay: 'Bedrag Om Te Betaal',
    balance: 'Balans',
    networkFee: 'Netwerk Fooi',
    slowTx: 'Stadige Tx',
    fastTx: 'Vinnige Tx',
    from: 'Van',
    toAddress: 'Na Adres',
    amount: 'Bedrag',
    max: 'Maksimum',
    send: 'Stuur',
    txSuccessful: 'Transkripsie suksesvol! Klik hier om jou transaksie te sien',
    confirmSend: 'Ek wil hierdie ZERC stuur',
    invalidAddress: 'Ongeldige `Na Adres`. Slegs deursigtige adresse word ondersteun op hierdie tydstip',
    invalidAmount: 'Ongeldige `Bedrag`',
    invalidFee: 'Ongeldige `Fooi`. Probeer 0 :)',
    zeroAmount: 'Bedrag moet meer as 0 wees',
    notEnoughZERC: 'Nie genoeg ZERC om die transaksie uit te voer nie',
    noCameraPermissions: 'Geen kamera toestemmings nie. U kan die kamera toestemmings in u instellings toelaat'
  },
  TxDetailPage: {
    txid: 'Transaksie Id',
    blockhash: 'Blok Hash',
    blockheight: 'Blok Hoogte',
    confirmations: 'Bevestigings'
  },
  SettingsPage: {
    title: 'Instellings',
    language: 'Taal',
    currency: 'Geld Eenheid',
    secretPhrase: 'Wys Geheime woorde',
    showPrivateKeys: 'Wys Privaat Sleutel',
    recoverExistingWallet: 'Herstel Bestaande Beursie',
    current: 'Current'
  },
  SecretPhrasePage: {
    title: 'Geheime woord'
  },
  ShowPrivateKeyPage: {
    title: 'Privaat Sleutel'
  },
  RecoverExistingWalletPage: {
    title: 'Herstel Bestaande Beursie',
    secretPhrase: 'Geheime sin',
    textareaPlaceholder: 'Geheime sin. min 16 karakters',
    confirmUnderstand: 'Ek verstaan dat deur die bestaande beursie te herstel, my huidige beursie uitgevee sal word',
    recover: 'Herstel'
  },
  AboutPage: {
    title: 'Oor'
  },
  PinPage: {
    changePinTitle: 'Verander PIN',
    newPinPageTitle: 'Opstel van ZERC Beursie',
    verifyPinPageTitle: 'ZERC Beursie PIN Verifikasie',
    setupNewPin: 'Stel nuwe PIN op',
    reenterPin: 'Voer jou PIN weer in',
    pinsNotSimilar: 'PINs wat ingevoer word, stem nie ooreen nie',
    invalidPin: 'Ongeldige PIN',
    enterYourPin: 'Voer U PIN in'
  },
  ContactsPage: {
    contacts: 'Kontakte',
    contactsName: 'Naam',
    contactsAddress: 'Adres'
  }
}
