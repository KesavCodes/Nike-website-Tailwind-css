import Button from "./../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[70px] lg:max-w-md font-palanquin font-bold max-sm:text-center max-sm:text-3xl max-sm:leading-[40px]">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex justify-center max-sm:flex-col sm:border sm:border-slate-gray p-2.5 gap-5 rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className="flex max-sm:justify-center items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth={true} />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
