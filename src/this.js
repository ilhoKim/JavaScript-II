// Follow the instructions and fill in the blank sections.
// There are no tests for this file.
// To verify your code works you can run this file using `node this.js` while in the `/src` folder

/* part 1 */

class User {
  constructor(options) {
    // set a username and password property on the user object that is created
    this.username = options.username;
    this.password = options.password;
  }
  // create a method on the User class called `checkPassword`
  // this method should take in a string and compare it to the object's password property
  // return `true` if they match, otherwise return `false`
  checkPassword(inputPW) {
    let test = false;
    if (this.password === inputPW) {
      test = true;
    }
    return test;
  }
}

const me = new User({
  username: 'LambdaSchool',
  password: 'correcthorsebatterystaple',
});

const result = me.checkPassword('correcthorsebatterystaple'); // should return `true`

/* part 2 */

const checkPassword = function comparePasswords(passwordToCompare) {
  // recreate the `checkPassword` method that you made on the `User` class
  // use `this` to access the object's `password` property.
  // do not modify this function's parameters
  // note that we use the `function` keyword and not `=>`
  let test = false;
  if (this.password === passwordToCompare) {
    test = true;
  }
  return test;
};

// invoke `checkPassword` on `me` by explicitly setting the `this` context
// use .call, .apply, and .bind

// .call
checkPassword.call(me);

// .apply
checkPassword.apply(me);

// .bind
checkPassword.apply(me);
