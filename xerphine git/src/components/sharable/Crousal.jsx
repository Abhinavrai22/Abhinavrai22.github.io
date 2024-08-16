import { Carousel } from "@material-tailwind/react";

const Crousal = ({ images = [] }) => {
  return (
    <Carousel transition={{ duration: 2 }} autoplay autoplayDelay={4000} loop navigation={''} nextArrow={''} prevArrow={''}  className="rounded-xl">
      {images?.map((image, index) => {
        return <img key={index}
          src={image}
          alt="image 1"
          className="h-full w-full object-cover"
        />
      })}
    </Carousel>
  );
}

export default Crousal