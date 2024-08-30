export const checkValidData = (email, password) => {
  //const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  //if (!isNameValid) return "Name is not valid";
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

/*export const checkValidData = (email, password, name, isSignInForm) => {
  //const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);

  const isEmailValid = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  if (!isEmailValid) return "Please enter a valid email address.";

  if (!isPasswordValid) return "Please enter a valid password.";

  //if (!isSignInForm && !isNameValid) return "Please enter a valid name.";

  return null;
};*/
