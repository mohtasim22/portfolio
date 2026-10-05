// Downloads a Google font as a .ttf file for ImageResponse (it can't use woff2)
export async function loadGoogleFont(family: string, weight: number) {
  const css = await fetch(`https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`).then((res) =>
    res.text(),
  );
  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error(`Could not load the ${family} font for the OG image`);

  return fetch(match[1]).then((res) => res.arrayBuffer());
}
