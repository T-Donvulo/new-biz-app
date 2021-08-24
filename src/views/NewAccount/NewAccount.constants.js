export const ALERTS = {
  noEmail: {
    title: "Missing email",
    description: "Email address is required in order to create account",
  },
  noPassword: {
    title: "Missing password",
    description: "Password is required in order to create account",
  },
  noConfirmedPassword: {
    title: "Missing confirm password",
    description: " Confirm password is required in order to prevent typos",
  },
  formatEmail: {
    title: "Invalid email",
    description:
      "Email value does not match standard email formatting. Correct any typos or mistakes",
  },
  shortPassword: {
    title: "Password too short",
    description:
      "For security purposes passwords can not be shortned than 8 characters",
  },
  mismatchPasswords: {
    title: "Password do not match",
    description:
      "Password and confirm password does not match. Make sure they are the same. ",
  },
  emailAlreadyUsed: {
    title: "Email already in use",
    description:
      "Can not create an account for an email that is already registered. If this is you the use sign in instead.",
  },
  creating: {
    title: "Creating account",
    nature: "resolving",
  },
  technical: {
    nature: 'error',
    title:' technical error',
    description: 'Something went wrong on our side. Please try again later'
  }
};
