// Your Dev.to username. Posts you publish at https://dev.to/<username>
// show up on the Blog page automatically.
export const DEVTO_USERNAME = "adhiinsvy13";

const API = "https://dev.to/api/articles";

export async function fetchDevtoPosts() {
  const res = await fetch(`${API}?username=${DEVTO_USERNAME}&per_page=30`);
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
