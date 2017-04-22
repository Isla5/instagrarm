export const signUp = (credentials) => {
  fetch('signUp', {
	  method: 'post',
 	  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
	  body: JSON.stringify(credentials)
  });
}
