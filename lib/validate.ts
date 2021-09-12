export async function validateEmail(
  value: string,
  required: boolean
): Promise<string | void> {
  if (value === "") return required ? "REQUIRED_FIELD" : undefined
  const regExp = new RegExp(/^([a-z0-9_.+-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/gm)
  if (!regExp.test(value)) return "INVALID_EMAIL"
  return
}
