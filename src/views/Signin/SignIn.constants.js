export const ALERTS = {
    noEmail: {
      title: "Missing email",
      description: "Email address is required in order to create account",
    },
    noPassword: {
      title: "Missing password",
      description: "Password is required in order to create account",
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
    noAccount : {
      title: "Invalid details",
      description:
        "Either the account doesn't exist or you entered the wrong password. Please try again.",
    },
    creating: {
      title: "Checking details",
      nature: "resolving",
    },
  };
  
  //git push
  //new biz app you are basically pushin 
  //do npm run build with npm run --force when you    get warning on netlify
  //there is npm install -s gotrue-js idb axios find out what is it for
  //then go back to npm install 