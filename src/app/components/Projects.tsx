"use client";

import { ItemInterface, ProjectItem } from "./ProjectsItem";

export default function Projects() {
  const projects: ItemInterface[] = [
    {
      name: "Sparc Mobile",
      description:
        "Effortless rent payments within your apartment building. All maintenance requests are just one click away. Sparc integrates resident events, fitness classes, and community conversations. Whether it's dog walking, massage therapy, or any other custom service, Sparc makes it easy to book and enjoy personalized care, tailored to your lifestyle-all from the convenience of your phone.",
      image: "/img/sparc_figma.png",
      github: {
        frontend: "https://github.com/nicoii-dev/sparc_mobile",
        backend: "",
      },
      madeWith: ["react", "graphql", "typescript"],
    },
    {
      name: "News Network",
      description:
        "Want to increase your website ranking? The news network is the best website for you. The news network web app lets you create an article, embed your website link, and post it to more than 1,000 websites available. You can select 400 different categories where you find your website link fits. It is a subscription-based monthly membership with flexible plans.",
      image: "/img/newsnetwork.png",
      github: {
        frontend: "https://github.com/nicoii-dev/newsnetwork",
        backend: "",
      },
      madeWith: ["react", "typescript", "laravel"],
    },
    {
      name: "JoltPay",
      description:
        "Jolt Pay is a game-changing point of sale (POS) software, designed to simplify taking orders and payments for mobile food and goods services. As a progressive point of sales software, Jolt Pay redefines the ordering and purchasing experience, enhancing your customer engagement and driving your business growth. With the power of pre-ordering, location services, loyalty programs, push notifications, and detailed analytics, you gain the tools to forecast and scale your business growth effectively.",
      image: "/img/joltpay.png",
      github: {
        frontend: "https://github.com/nicoii-dev/joltpay",
        backend: "",
      },
      madeWith: ["react", "next", "graphql", "typescript"],
    },
    {
      name: "Alumni App (thesis project)",
      description:
        "Alumni App is a school-based tracer system designed to keep track of graduates and their career progress. Alumni can log in using their student ID and complete a quick registration process. For security, an SMS OTP verification will be required. With this app, the school can monitor alumni employment status—whether they are employed, unemployed, or actively seeking jobs. Additionally, multiple administrators can manage the platform, post job opportunities, and share important school announcements, ensuring alumni stay connected and informed.",
      image: "/img/ustp.png",
      github: {
        frontend: "https://github.com/nicoii-dev/ustp_alumni_react_web",
        backend: "https://github.com/nicoii-dev/ustp_alumni_laravel_api",
      },
      madeWith: ["react", "laravel"],
    },
    {
      name: "Responsive Table",
      description:
        "The web application displays a list of members and their corresponding details. The web application must implement the UI as specified in the provided Figma file. The list of members can be fetched from the provided GraphQL API.",
      image: "/img/responsivetable.png",
      github: {
        frontend: "https://github.com/nicoii-dev/qualification-exercise",
        backend: "",
      },
      madeWith: ["react", "graphql", "typescript"],
    },
  ];

  return (
    <section
      id="projects"
      className="px-5 mt-14 md:flex-row sm:flex-row flex-col items-center bg-white shadow-2xl rounded-md p-10 pr-10 pl-10"
    >
      <div className="flex flex-col w-full">
        <div className="flex flex-col justify-center sm:justify-between md:flex-row">
          <div>
            <p className="font-mono font-medium text-gray-800">{`</> Projects`}</p>
          </div>
        </div>
        {/* <MarqueeDemo /> */}

        {projects.map((project: ItemInterface, index: number) => {
          return (
            <div key={index}>
              <ProjectItem item={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
