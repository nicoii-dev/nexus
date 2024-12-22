import { cn } from "@/lib/utils";
import Link from "next/link";
import Marquee from "@/components/ui/marquee";
import "./marquee-example.css";

const reviews = [
  {
    name: "Sparc",
    body: "Effortless rent payments within your apartment building. All maintenance requests are just one click away. Sparc integrates resident events, fitness classes, and community conversations. Whether it's dog walking, massage therapy, or any other custom service, Sparc makes it easy to book and enjoy personalized care, tailored to your lifestyle-all from the convenience of your phone.",
    link: "/img/sparc.gif",
    color: "from-yellow-300",
    appType: "Mobile App",
  },
  {
    name: "JoltPay",
    body: "Jolt Pay is a game-changing point of sale (POS) software, designed to simplify taking orders and payments for mobile food and goods services. As a progressive point of sales software, Jolt Pay redefines the ordering and purchasing experience, enhancing your customer engagement and driving your business growth. With the power of pre-ordering, location services, loyalty programs, push notifications, and detailed analytics, you gain the tools to forecast and scale your business growth effectively.",
    link: "/img/joltpay.gif",
    color: "from-sky-400",
    appType: "PWA App",
  },
  {
    name: "HyperSpace",
    type: "image",
    body: "If you have a space, garage, or storage unit that has not been used for months or years, publish it and start earning. The Hyperspace mobile app lets you publish your space by uploading space images and inputting locations and size details. It has a notification feature for both renters and owners. They can also create conversations with the app messaging feature. Renters can check which space is nearby by using the app map feature.",
    link: "/img/hyperspace.gif",
    color: "from-blue-900",
    appType: "Mobile App",
  },
  {
    name: "Asean",
    body: "Booking was made easy. The ASEAN PWA app was used during the AUSTRALIA-ASEAN BUSINESS FORUM. Users can register with the app by scanning the QR code presented to them, inputting the email, and verifying the code. Attendees can book with each country’s delegates and representatives using QR code scanning, while delegates can be notified of the attendees and booking details.",
    link: "/img/asean.gif",
    color: "from-sky-950",
    appType: "PWA App",
  },
  {
    name: "News Network",
    body: "Want to increase your website ranking? The news network is the best website for you. The news network web app lets you create an article, embed your website link, and post it to more than 1,000 websites available. You can select 400 different categories where you find your website link fits. It is a subscription-based monthly membership with flexible plans.",
    link: "https://seodirectservice.com/",
    color: "from-blue-700",
    appType: "Web App",
  },
  {
    name: "Oasis Dentail Call Center LLC",
    body: "The Oasis Dental Call Center is currently in its inception phase, having been conceived through the collaboration of the Gabucan brothers. Its primary goal is to elevate the overall patient experience within the realm of dental practice, laying the groundwork for synergistic and innovative solutions. The first step taken in this direction was streamlining the initial phase of a patient’s visit by providing relevant, real-time insurance benefits information, thus enabling an informed and collaborative approach toward achieving the patients’ goals.",
    link: "https://www.oasisdentalcallcenter.com/",
    color: "from-sky-500",
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
  body,
  link,
  color,
  appType
}: {
  name: string;
  body: string;
  link: string;
  color: string;
  appType: string
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
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col w-full">
            <h1 className="text-black text-center font-mono text-[40px]">
              {name}
            </h1>
            <h1 className="text-black text-center font-mono">{appType}</h1>
            <div>
              <h1 className="text-black p-5 text-ellipsis max-h-[300px] h-[300px] overflow-scroll overflow-x-clip">{body}</h1>
            </div>
          </div>
          {appType === "Web App" ? <div className="flex justify-center w-[400px]">
            <Link href={link} target="_blank">
              <button
                type="submit"
                className={cn("flex justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group",
                  `before:bg-gradient-to-br before:${color} before:to-transparent`
                )}>
                Visit Site
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
            </Link>
          </div> :
            <img
              src={link}
              alt={`${name} GIF`}
              className="flex justify-center h-[450px] w-[400px] p-5 rounded-md"
            ></img>
          }
        </div>
      </div>
    </figure>
  );
};
