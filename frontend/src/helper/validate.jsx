import { authenticate } from "./helper";

/** validate register page  */

export async function registerValidation(values) {
  const errors = usernameVerify({}, values);
  passwordVerify(errors, values);
  confirmPasswordVerify(errors, values);
  emailVerify(errors, values);

  return errors;
}

// validate username
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = "Username Required...!";
  } else if (values.username.includes(" ")) {
    error.username = "Invalid Username...!";
  }

  return error;
}

// Validate password
function passwordVerify(error = {}, values) {
  if (!values.password) {
    error.password = "Password is required...!";
  } else if (values.password.includes(" ")) {
    error.password = "Wrong Password...!";
  } else if (values.password.length < 8) {
    error.password = "Password must be more than 8 characters";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$&*%])[A-Za-z\d!@#$&*%]{8,14}$/.test(
      values.password
    )
  ) {
    error.password = "Password must have special characters...!";
  }
  return error;
}

// validate confirmPassword
function confirmPasswordVerify(error = {}, values) {
  if (!values.confirmPassword) {
    error.confirmPassword = "Confirm Password is required...!";
  } else if (values.confirmPassword !== values.password) {
    error.confirmPassword = "Passwords do not match...!";
  }
  return error;
}

// validate email
function emailVerify(error = {}, values) {
  if (!values.email) {
    error.email = "Email Required...!";
  } else if (values.email.includes(" ")) {
    error.email = "Wrong Email...!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    error.email = "Invalid email address...!";
  }

  return error;
}

/** validate login page */

export async function loginValidation(values) {
  const errors = {};
  usernameValidate(errors, values);
  passwordValidate(errors, values);

  return errors;
}
// validate login page username
async function usernameValidate(values) {
  const errors = usernameVerify({}, values);

  if (values.username) {
    // check user exist or not
    const { status } = await authenticate(values.username);

    if (status !== 201) {
      errors.exist = "User does not exist...!";
    }
  }

  return errors;
}

// validate password
async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
}

/** validate change password page */

// validate reset password
export async function resetPasswordValidation(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirmPassword) {
    errors.exist = "Password not match...!";
  }

  return errors;
}

/** validate profile page */

// validate profile
export async function profileValidation(values) {
  const errors = emailVerify({}, values);
  return errors;
}
