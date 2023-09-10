/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
interface IRatingProps {
  rating: number;
}

const Rating: React.FunctionComponent<IRatingProps> = (props) => {
  const { rating } = props;
  const [stars, setStars] = React.useState([false, false, false, false]);
  React.useEffect(() => {
    if (rating) {
      const newRating = stars.map((item, index) => {
        return index < rating;
      });
      setStars(newRating);
    }
    // eslint-disable-next-line
  }, [rating]);
  const renderStars = () => {
    return stars.map((item, index) => {
      return (
        <div className="rating-item" key={index}>
          {index < rating ? (
            <img src="/assets/images/star.svg" alt="Star" />
          ) : (
            <img src="/assets/images/unstar.svg" alt="UnStar" />
          )}
        </div>
      );
    });
  };

  return <React.Fragment>{renderStars()}</React.Fragment>;
};

export default Rating;
