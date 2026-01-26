import { useEffect, useState } from "react";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const RSS_URL =
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@prathyusha-mallela";

    fetch(RSS_URL)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching Medium articles", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="articles">
      <h2>My Medium Articles</h2>

      {loading && <p>Loading articles…</p>}

      {!loading && (
        <ul>
          {articles.slice(0, 5).map((article) => (
            <li key={article.guid}>
              <h3>{article.title}</h3>

              <p
                dangerouslySetInnerHTML={{
                  __html: article.description.slice(0, 150) + "…",
                }}
              />

              <a
                className="button"
                href={article.link}
                target="_blank"
                rel="noreferrer"
              >
                Read on Medium
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
