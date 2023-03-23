export const studentIdFromEmail = (email: string) => {
  const id = email.split("@")[0].toLowerCase();
  return id[0] === "s" ? id.substring(1) : id;
};
