import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Article } from '@/lib/article-data';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="article-card">
      <Link href={`/articles/${article.slug}`} className="article-card-link">
        <div className="article-card-image">
          <Image
            src={article.image}
            alt={article.title}
            width={400}
            height={250}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
        <div className="article-card-content">
          <h3 className="article-card-title">{article.title}</h3>
          <p className="article-card-intro">{article.intro}</p>
          <span className="article-read-more">
            Read More <ArrowRight size={16} />
          </span>
        </div>
      </Link>
    </article>
  );
}
