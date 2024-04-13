import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <img
        src={imgURL}
        width={120}
        height={120}
        alt="profile picture"
        className="rounded-full object-cover"
      />
      <p className="info-text max-w-sm text-center mt-6">{feedback}</p>
      <div className="flex justify-center items-center gap-2 mt-2">
        <img src={star} height={24} width={24} className="object-contain m-0"/>
        <span className="info-text">({rating})</span>
      </div>
      <h3 className="font-bold text-2xl font-palanquin mt-1 text-center">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
