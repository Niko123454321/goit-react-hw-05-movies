import { getReview } from 'components/services/ApiService/ApiService';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// import css from './reviews.module.css';
const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (!id) {
      return;
    }
    const FeachReviews = async () => {
      try {
        const data = await getReview(id);
        setReviews(data.results);
      } catch ({ response }) {
        console.log(response.date.message);
      }
    };
    FeachReviews();
  }, [id]);

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <p>{author}</p>
      <p>{content}</p>
    </li>
  ));
  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ul>{elements}</ul>
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};
export default Reviews;
