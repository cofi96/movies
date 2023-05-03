export function IsValidEmail(email: string) {
  const regex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  return !!(email && regex.test(email));
}

export function IsValidInput(password: string) {
  const regex = /^.{6,}$/i;
  return !!(password && regex.test(password));
}
