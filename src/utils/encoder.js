const data = new Date();
const timestamp = data.getTime();

export function customEncode(text) {
  const shifted = text.split("").map((c) => c.charCodeAt(0) + timestamp);
  return btoa(shifted.join(","));
}

export function customDecode(encoded) {
  try {
    const decoded = atob(encoded)
      .split(",")
      .map((n) => String.fromCharCode(Number(n) - timestamp))
      .join("");
    return decoded;
  } catch {
    return "Erro ao decodificar.";
  }
}
