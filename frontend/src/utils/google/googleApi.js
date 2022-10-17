export async function getMap() {
  const r = await fetch(
    `https://maps.googleapis.com/maps/api/staticmap?center=41.390205,2.154007&zoom=12&size=1080x1080&key=${process.env.REACT_APP_GOOGLE_MAP_KEY}`
  );

  return r;
}
