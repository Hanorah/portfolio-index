import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";


export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <a
            href="https://portfolio-hanorahs-projects.vercel.app/projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              ref={hoverButtonRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white"
            >
              {/* Radial gradient hover effect */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                  opacity: hoverOpacity,
                  background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                }}
              />
              <TiLocationArrow className="relative z-20" />
              <p className="relative z-20">Check Projects</p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Your brand isn’t just what people see
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-90">
          it’s what they experience. Stand out with designs that captivate, interfaces that flow seamlessly, and interactions that leave a lasting impact.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="videos/feature-1.mp4"
          title={
            <>
              <b>Development</b>
            </>
          }
          description="Whether it's a dynamic web app, an intuitive user interface, or seamless backend architecture, every project is built with precision, performance, and a touch of creativity."

        />
        <div className="absolute inset-0 bg-black opacity-90 "></div>
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">

        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">

          <BentoCard
            src="videos/hero-3.mp4"
            title={
              <>
                <b>Optimize</b>
              </>
            }
            description="My favorite word is optimize. I'm never content with how things are. I'm always asking myself how can something be done better or faster. Creating websites that are clean and intuitive is my passion. I always try to put myself in the shoes of the customer."

          />
          <div className="absolute inset-0 bg-black opacity-90 "></div>
        </BentoTilt>




        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="videos/feature-4.mp4"
            title={
              <>
                <b>Motion &nbsp; UI</b>
              </>
            }
            description={
              <p className="text-xs md:text-sm">
                Captivate your audience with smooth, engaging Motion UI animations that enhance your brand’s visual appeal and boost engagement.
              </p>
            }
            isComingSoon
          />
          <div className="absolute inset-0 bg-black opacity-90"></div>
        </BentoTilt>




        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/feature.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);


export default Features;
