/**
 * Rules
 */

export const required = (val: string): string | boolean => {
  return !!val || '* Required'
}

/**
 * Passwords will contain at least 1 upper case letter
 * Passwords will contain at least 1 lower case letter
 * Passwords will contain at least 1 number or special character
 * Passwords will contain at least 8 characters in length
 * Password maximum length should not be arbitrarily limited
 *
 * (?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$
 * 
 * @param val 
 */
export const strongPassword = (val: string): string | boolean => {
  const regex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/

  return regex.test(val) || 'Requires at least 1 upper case, 1 lower case letter, 1 number or special character and at least 8 character'
}

/**
 * confirms two values
 * 
 * @param valConfirm 
 * @param fieldName 
 */
export const confirm = (valConfirm: string, fieldName: string) => 
  (val: string): string | boolean => {
    return val === valConfirm || `must match '${fieldName}'`
  }