import testimonials from "../../data/testimonials";
import TestimonialsCard from "../testimonialsCard/TesimonialsCard";
import "./testimonials.scss";

const Testimonials = () => {
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {testimonials.map((item) => (
                    <TestimonialsCard
                        key={item.id}
                        img={item.img}
                        imgBy={item.imgBy}
                        icon={item.icon}
                        desc={item.desc}
                        company={item.company}
                        position={item.position}
                        featured={item.featured}
                    />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;