import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getArticleBySlug,
  getAllArticleSlugs,
} from '@/lib/article-data';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: 'Article Not Found' };
  return {
    title: `${article.title} | Trekkers Heaven`,
    description: article.intro,
    openGraph: {
      title: article.title,
      description: article.intro,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <main className="article-single-page">
      <article className="article-single">
        <div className="article-single-header">
          <Link href="/articles" className="article-back-link">
            ← Back to Articles
          </Link>
          <h1 className="article-single-title">{article.title}</h1>
          <div className="article-single-meta">
            <time dateTime={article.publishedAt}>
              {new Date(article.publishedAt).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
            <span className="article-meta-dot">•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
        <div className="article-single-image">
          <Image
            src={article.image}
            alt={article.title}
            width={900}
            height={500}
            sizes="100vw"
            priority
          />
        </div>
        <div className="article-single-body">
          <p className="article-single-intro">{article.intro}</p>
          {article.content.map((paragraph, i) => (
            <p key={i} className="article-single-paragraph">
              {paragraph}
            </p>
          ))}
          <div className="article-single-cta">
            <Link href="/treks" className="btn btn-primary">
              Explore Our Treks
            </Link>
            <Link href="/articles" className="btn btn-secondary">
              More Articles
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
