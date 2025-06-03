import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";

const data = new Date(); // Replace with your date
const timestamp =
  data.getDay() -
  15 +
  data.getMonth() * 12 -
  9 +
  data.getFullYear() * 365 -
  2024;

export function customEncode(text) {
  const shifted = text.split("").map((c) => c.charCodeAt(0) + timestamp);

  const encoded = btoa(shifted.join(","))
    .split("")
    .map((char, i) => {
      const charCode = char.charCodeAt(0);
      const keyCode = timestamp
        .toString()
        .charCodeAt(i % timestamp.toString().length);
      return (charCode ^ keyCode) + i; // XOR + deslocamento incremental
    });

  return AES.encrypt(
    encoded.map((n) => n.toString(16)).join("-"),
    timestamp.toString()
  ).toString();
}

export function customDecode(encoded) {
  try {
    const bytes = AES.decrypt(encoded, timestamp.toString());

    const parts = bytes
      .toString(Utf8)
      .split("-")
      .map((hex) => parseInt(hex, 16));
    const decoded = parts.map((num, i) => {
      const keyCode = timestamp
        .toString()
        .charCodeAt(i % timestamp.toString().length);
      return String.fromCharCode((num - i) ^ keyCode);
    });
    const encode = decoded.join("");

    return atob(encode)
      .split(",")
      .map((n) => String.fromCharCode(Number(n) - timestamp))
      .join("");
  } catch {
    return "Erro ao decodificar.";
  }
}
