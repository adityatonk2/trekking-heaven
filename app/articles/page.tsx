import type { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import { articles } from '@/lib/article-data';

export const metadata: Metadata = {
  title: 'Must Read Articles | Trekking Guides & Tips | Trekkers Heaven',
  description:
    'Expert trekking guides, Himalayan trail tips, and adventure inspiration. Top treks in India, winter trekking guides, Everest Base Camp preparation & more.',
  openGraph: {
    title: 'Must Read Articles | Trekkers Heaven Blog',
    description:
      'Discover trekking tips, trail guides, and Himalayan adventure stories from Trekkers Heaven.',
  },
};

export default function ArticlesPage() {
  return (
    <main className="articles-page">
      <section className="articles-section">
        <div className="articles-container">
          <h1 className="articles-title">Must Read Articles</h1>
          <div className="articles-grid">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
