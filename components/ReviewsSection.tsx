import Image from 'next/image';
import { Star, ChevronDown } from 'lucide-react';
import { defaultReviewsData, type ReviewsData } from '@/lib/reviews-data';
import TravelerMoments from './TravelerMoments';

interface ReviewsSectionProps {
  data?: ReviewsData | null;
}

export default function ReviewsSection({ data }: ReviewsSectionProps) {
  const reviews = data ?? defaultReviewsData;
  const maxCount = Math.max(...reviews.distribution.map((d) => d.count), 1);

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">Reviews</h2>

      <TravelerMoments />

      <div className="reviews-summary">
        <div className="reviews-overall">
          <span className="reviews-rating-main">{reviews.averageRating.toFixed(1)}</span>
          <div className="reviews-stars" aria-label={`${reviews.averageRating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={20}
                className={star <= Math.round(reviews.averageRating) ? 'star-filled' : 'star-outline'}
              />
            ))}
          </div>
          <span className="reviews-count">{reviews.totalRatings.toLocaleString()} ratings</span>
        </div>

        <div className="reviews-distribution">
          {reviews.distribution.map((item) => (
            <div key={item.stars} className="reviews-bar-row">
              <div className="reviews-bar-track">
                <div
                  className="reviews-bar-fill"
                  style={{ width: `${(item.count / maxCount) * 100}%` }}
                />
              </div>
              <span className="reviews-bar-label">
                {item.stars}.0 · {item.count >= 1000 ? `${(item.count / 1000).toFixed(0)}K` : item.count} reviews
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="reviews-categories">
        {reviews.categories.map((cat) => (
          <span
            key={cat.label}
            className={`reviews-pill ${cat.isPositive ? 'reviews-pill-green' : 'reviews-pill-grey'}`}
          >
            {cat.score.toFixed(1)} {cat.label}
          </span>
        ))}
      </div>

      <div className="reviews-list">
        {reviews.reviews.map((review) => (
          <article key={review.id} className="review-card">
            <div className="review-header">
              <div className="review-avatar">
                {review.avatar ? (
                  <Image
                    src={review.avatar}
                    alt=""
                    width={40}
                    height={40}
                    className="review-avatar-img"
                  />
                ) : (
                  <span className="review-avatar-placeholder">
                    {review.author.charAt(0)}
                  </span>
                )}
              </div>
              <div className="review-meta">
                <span className="review-author">{review.author}</span>
                <span className="review-date">{review.date}</span>
              </div>
              <div className="review-rating">
                <span className="review-rating-value">{review.rating.toFixed(1)}</span>
                <div className="review-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className={star <= review.rating ? 'star-filled' : 'star-outline'}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="review-text">{review.text}</p>
            {review.images && review.images.length > 0 && (
              <div className="review-thumbs">
                {review.images.map((src, i) => (
                  <div key={i} className="review-thumb">
                    <Image
                      src={src}
                      alt=""
                      width={80}
                      height={80}
                      sizes="80px"
                    />
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      <button type="button" className="reviews-read-all">
        Read all reviews
        <ChevronDown size={18} />
      </button>
    </section>
  );
}
