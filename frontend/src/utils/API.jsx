export const getData = async () => {
  const r = await fetch("http://fotointerior.com/barrios_bcn.json");
  const d = await r.json();
  return d;
};
