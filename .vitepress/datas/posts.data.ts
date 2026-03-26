import { createContentLoader } from "vitepress";

function parseYearMonth(path: string) {
  const m = path.match(/\/posts\/(\d+)\/(\d+)\/(\d+)/);
  if (!m) return { year: 0, month: 0, day: 0 };

  const year = +m[1].replace(/^0+/, "");
  const month = +m[2].replace(/^0+/, "");
  const day = +m[3].replace(/^0+/, "");

  return { year, month, day }
}

export default createContentLoader("posts/**/*.md", {
  transform(data) {
    return data.sort((a, b) => {
      const { year: aYear, month: aMonth, day: aDay } = parseYearMonth(a.url);
      const { year: bYear, month: bMonth, day: bDay } = parseYearMonth(b.url);

      const ascore = aYear * 12 * 32 + (aMonth % 12) * 32 + aDay;
      const bscore = bYear * 12 * 32 + (bMonth % 12) * 32 + bDay;

      return bscore - ascore;
    }).slice(0, 100)
  },
})
