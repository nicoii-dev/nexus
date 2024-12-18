import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import "./marquee-example.css";

const reviews = [
  {
    name: "Sparc",
    type: "video",
    body: "Effortless rent payments within your apartment building. All maintenance requests are just one click away. Sparc integrates resident events, fitness classes, and community conversations. Whether it's dog walking, massage therapy, or any other custom service, Sparc makes it easy to book and enjoy personalized care, tailored to your lifestyle-all from the convenience of your phone.",
    link: "/videos/new_sparc.mp4",
    color: "from-yellow-300",
    appType: "Mobile App",
  },
  {
    name: "JoltPay",
    type: "image",
    body: "Jolt Pay is a game-changing point of sale (POS) software, designed to simplify taking orders and payments for mobile food and goods services. As a progressive point of sales software, Jolt Pay redefines the ordering and purchasing experience, enhancing your customer engagement and driving your business growth. With the power of pre-ordering, location services, loyalty programs, push notifications, and detailed analytics, you gain the tools to forecast and scale your business growth effectively.",
    link: "/img/joltpay.gif",
    color: "from-sky-400",
    appType: "PWA App",
  },
  {
    name: "Xvend",
    type: "image",
    body: "Jolt Pay is a game-changing point of sale (POS) software, designed to simplify taking orders and payments for mobile food and goods services. As a progressive point of sales software, Jolt Pay redefines the ordering and purchasing experience, enhancing your customer engagement and driving your business growth. With the power of pre-ordering, location services, loyalty programs, push notifications, and detailed analytics, you gain the tools to forecast and scale your business growth effectively.",
    link: "/img/joltpay.gif",
    color: "from-yellow-300",
    appType: "Mobile App",
  },
  {
    name: "HyperSpace",
    type: "image",
    body: "Jolt Pay is a game-changing point of sale (POS) software, designed to simplify taking orders and payments for mobile food and goods services. As a progressive point of sales software, Jolt Pay redefines the ordering and purchasing experience, enhancing your customer engagement and driving your business growth. With the power of pre-ordering, location services, loyalty programs, push notifications, and detailed analytics, you gain the tools to forecast and scale your business growth effectively.",
    link: "/img/joltpay.gif",
    color: "from-blue-900",
    appType: "Mobile App",
  },
  {
    name: "Asean",
    type: "video",
    body: "Jolt Pay is a game-changing point of sale (POS) software, designed to simplify taking orders and payments for mobile food and goods services. As a progressive point of sales software, Jolt Pay redefines the ordering and purchasing experience, enhancing your customer engagement and driving your business growth. With the power of pre-ordering, location services, loyalty programs, push notifications, and detailed analytics, you gain the tools to forecast and scale your business growth effectively.",
    link: "/videos/asean.mp4",
    color: "from-sky-950",
    appType: "PWA App",
  },
  {
    name: "News Network",
    type: "video",
    body: "Jolt Pay is a game-changing point of sale (POS) software, designed to simplify taking orders and payments for mobile food and goods services. As a progressive point of sales software, Jolt Pay redefines the ordering and purchasing experience, enhancing your customer engagement and driving your business growth. With the power of pre-ordering, location services, loyalty programs, push notifications, and detailed analytics, you gain the tools to forecast and scale your business growth effectively.",
    link: "/videos/asean.mp4",
    color: "from-blue-700",
    appType: "Web App",
  },
];

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl mt-10">
      <Marquee pauseOnHover className="[--duration:30s]">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
    </div>
  );
}

const ReviewCard = ({
  name,
  type,
  body,
  link,
  color,
}: {
  name: string;
  type: string;
  body: string;
  link: string;
  color: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-[500px] w-[600px] cursor-pointer overflow-hidden rounded-md"
      )}
    >
      <div
        className={cn(
          "flex flex-col  border h-full rounded-md",
          `bg-gradient-to-br ${color} to-transparent`
        )}
      >
        <div className="flex items-center justify-center">
          <div className="flex flex-col w-full">
            <h1 className="text-black text-center font-mono text-[40px]">
              {name}
            </h1>
            <h1 className="text-black text-center font-mono">Mobile App</h1>
            <div>
              <h1 className="text-black p-5 text-ellipsis max-h-[300px] h-[300px] overflow-scroll overflow-x-clip">{body}</h1>
            </div>
          </div>
          {type === "image" ? (
            <img
              src={link}
              alt={`${name} GIF`}
              className="place-self-start h-[450px] w-[400px] p-5 rounded-md"
            ></img>
          ) : (
            <video
              className="place-self-start h-[450px] w-[300px] p-5 rounded-md"
              controls
              autoPlay
              loop
              muted
            >
              <source src={link} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </div>
    </figure>
  );
};
