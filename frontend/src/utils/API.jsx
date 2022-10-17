export const getData = async () => {
  const r = await fetch("http://fotointerior.com/barrios_bcn.json", {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const d = await r.json();
  return d;
};
