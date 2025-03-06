import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div> {/* Overlay */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/2.webp"
            clipClass="contact-clip-path-5"
          />
          <ImageClipBox
            src="/img/1.webp"
            clipClass="contact-clip-path-3 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/3.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/3.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="relative z-50 flex flex-col items-center text-center">

          <Button title="contact" containerClass="mt-10 cursor-pointer" />
        </div>

      </div>
    </div>
  );
};

export default Contact;
