const regexObj = Object.freeze({
  /**
   * Password regex:
   * ^(?=.*[a-z]) - at least one lowercase letter
   * (?=.*[A-Z]) - at least one uppercase letter
   * (?=.*\d) - at least one number
   * (?=.*[@$!%*?&]) - at least one of the special characters: @, $, !, %, *, ?, &
   * [A-Za-z\d@$!%*?&]{8,16} - the password should be between 8 and 16 characters long
   */
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
  /**
   * Email regex:
   * ^[a-zA-Z0-9._%+-]+ - at least one alphanumeric character, dot (.), hyphen (-), underscore (_), percent (%), plus sign (+)
   * @ - the @ symbol
   * [a-zA-Z0-9.-]+ - at least one alphanumeric character, dot (.), hyphen (-)
   * \.[a-zA-Z]{2,} - a dot (.) followed by at least two letters
   */
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
});

export const emailRegex = regexObj.email;
export const passwordRegex = regexObj.password;
