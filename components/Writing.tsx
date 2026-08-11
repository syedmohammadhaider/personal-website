import { useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  published_at: string;
  url: string;
  reading_time_minutes: number;
  tag_list: string[];
}

export default function Writing() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch(
      "https://dev.to/api/articles?username=smd_haider"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.error("Failed to fetch articles:", err));
  }, []);

  return (
    <section>
      <h2>Writing</h2>

      {articles.length === 0 ? (
        <p>Coming soon.</p>
      ) : (
        <div>
          {articles.map((article) => (
            <article key={article.id}>
              <h3>{article.title}</h3>

              <p>{article.description}</p>

              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read article →
              </a>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
