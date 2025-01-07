export const getNameInitials = (string?: string) => {
  return string
    ? string
        .split(" ")
        .filter((word) => word)
        .map((word, index, a) => {
          if (a.length > 1) {
            return index === 0 || index === a.length - 1
              ? word.charAt(0).toUpperCase()
              : ""
          }
          return word.slice(0, 2).toUpperCase()
        })
        .join("")
    : "?"
}

export const capitalizeString = (string: string) => {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}

export const isValidUUID = (str: string) => {
  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi

  return regexExp.test(str)
}
