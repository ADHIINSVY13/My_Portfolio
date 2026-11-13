// Your Dev.to username. Posts you publish at https://dev.to/<username>
// show up on the Blog page automatically.
export const DEVTO_USERNAME = "adhiinsvy13";

const API = "https://dev.to/api/articles";

// Dev.to caches this list for up to two days and ignores unknown query
// parameters, so a new post could take that long to appear. Changing
// `per_page` once an hour gives a fresh, shared answer each hour instead.
function listUrl() {
  const hour = Math.floor(Date.now() / 3600000);
  const perPage = 100 + (hour % 800);
  return `${API}?username=${DEVTO_USERNAME}&page=1&per_page=${perPage}`;
}

export async function fetchDevtoPosts() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  let res;
  try {
    res = await fetch(listUrl(), { signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
  if (!res.ok) throw new Error("Could not load posts");
  const articles = await res.json();
  return articles.map((a) => ({
    slug: `d-${a.id}`,
    title: a.title,
    date: a.published_at,
    tags: a.tag_list || [],
    summary: a.description,
    cover: a.cover_image,
  }));
}

export async function fetchDevtoPost(id) {
  const res = await fetch(`${API}/${id}`);
  if (!res.ok) throw new Error("Could not load post");
  const a = await res.json();
  return {
    title: a.title,
    date: a.published_at,
    tags: a.tag_list || [],
    cover: a.cover_image,
    html: a.body_html,
    url: a.url,
  };
}
