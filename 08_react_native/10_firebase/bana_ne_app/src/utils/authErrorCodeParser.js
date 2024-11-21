export default code => {
  switch (code) {
    case 'auth/invalid-email':
      return 'Geçersiz e-posta adresi';
    case 'auth/email-already-exists':
      return 'Kullanıcı zaten kayıtlı';
    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı';

    default:
      return code;
  }
};
