import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full max-sm:items-center">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-2xl text-slate-gray leading-normal">(4.5)</p>
      </div>
      <h3 className="text-xl mt-2 font-palanquin leading-normal font-semibold">{name}</h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
    </div>
  );
};

export default PopularProductCard;
