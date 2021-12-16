const ValidateEmail = (mail) => {
  if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(mail)) {
    return true;
  }
  return false;
};

export default ValidateEmail;
