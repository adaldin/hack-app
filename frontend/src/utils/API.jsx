export const getData = async () => {
  const r = await fetch("url");
  const d = await r.json();
  return d;
};
