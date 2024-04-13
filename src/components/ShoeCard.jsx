const ShoeCard = ({ imgUrl, bigShoeImg, changeBigShoeHandler }) => {
  const shoeChangeHandler = () => {
    if (imgUrl.bigShoe !== bigShoeImg) changeBigShoeHandler(imgUrl.bigShoe);
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        imgUrl.bigShoe === bigShoeImg
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={shoeChangeHandler}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover rounded-xl sm:w-40 sm:h-40 max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="show thumbnail"
          height={105}
          width={130}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
