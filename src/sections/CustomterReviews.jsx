import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomterReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customer </span> Say?
      </h3>
      <p className="m-auto text-center info-text mt-6 max-w-lg ">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 max-lg:mt-12 flex flex-1 justify-evenly items-center max-lg:flex-col max-lg:gap-22 gap-14">
        {reviews.map((reviews) => (
          <ReviewCard key={reviews.imgURL} {...reviews} />
        ))}
      </div>
    </section>
  );
};

export default CustomterReviews;
