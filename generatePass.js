const myObj = {
  name: "masum",
  birthYear: 1990,
  siteName: "google",
};
function password(obj) {
  if (
    typeof obj !== "object" ||
    obj === null ||
    Array.isArray(obj) ||
    Object.keys(obj).length == 0
  ) {
    return "Invalid Data";
  } else {
    const { name, birthYear, siteName } = obj;
    if (
      typeof name === "string" &&
      name !== "" &&
      typeof birthYear === "number" &&
      typeof siteName === "string" &&
      siteName !== "" &&
      birthYear.toString().length == 4
    ) {
      const user = name.charAt(0).toUpperCase() + name.slice(1);
      const year = birthYear.toString();
      const site = siteName.charAt(0).toUpperCase() + siteName.slice(1);
      const password = site + "#" + user + "@" + year;
      return password;
    } else {
      return "Some Information is Missing To Generate Password!";
    }
  }
}

const pass = password(myObj);
console.log(pass);
