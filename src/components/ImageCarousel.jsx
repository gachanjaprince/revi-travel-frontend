import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({images}) => {
    const imgs = images

    return (
        <div className="box">
          <Carousel useKeyboardArrows={true} swipeable={true}>
            {imgs.map((URL, index) => (
          <div className="m-auto slide" key={index}>
            <img className="m-auto" alt="sample_file" src={URL} key={index} />
          </div>
        ))}
          </Carousel>
        </div>
      );
}

export default ImageCarousel