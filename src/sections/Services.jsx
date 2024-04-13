import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-8 max-sm:gap-4">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
