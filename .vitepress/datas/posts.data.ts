import { createContentLoader } from "vitepress";

function parseYearMonth(path: string): { year: number, month: number } {
  const m = path.match(/\/posts\/(\d+)\/(\d+)/);
  if (!m) return { year: 0, month: 0 };

  const year = +m[1].replace(/^0+/, "");
  const month = +m[2].replace(/^0+/, "");

  return { year, month }
}

export default createContentLoader("posts/**/*.md", {
  transform(data) {
    return data.sort((a, b) => {
      const { year: aYear, month: aMonth } = parseYearMonth(a.url);
      const { year: bYear, month: bMonth } = parseYearMonth(b.url);

      const ascore = aYear * 12 + aMonth % 12;
      const bscore = bYear * 12 + bMonth % 12;

      return bscore - ascore;
    }).slice(0, 100)
  },
})
