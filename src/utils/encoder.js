export function customEncode(text) {
  const shifted = text.split("").map((c) => c.charCodeAt(0) + 5);
  return btoa(shifted.join(","));
}

export function customDecode(encoded) {
  try {
    const decoded = atob(encoded)
      .split(",")
      .map((n) => String.fromCharCode(Number(n) - 5))
      .join("");
    return decoded;
  } catch {
    return "Erro ao decodificar.";
  }
}
