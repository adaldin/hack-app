export const getData = async () => {
  const r = await fetch("https://bdbarrios.herokuapp.com/barrios_bcn.json");
  const d = await r.json();
  return d;
};
