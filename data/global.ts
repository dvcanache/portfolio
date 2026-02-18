type Route = {
  title: string;
  path: string;
};

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
  support: {
    message: string;
  };
};

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/projects",
  },
  {
    title: "Github",
    path: "https://github.com/dvcanache",
  },
];

export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Products",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Github",
          link: "https://github.com/dvcanache",
          leavesWebsite: true,
        },
      ],
    },
    {
      title: "Social Media",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/dvcanache",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/dave-canache-70977723b/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Whatsapp",
          link: "https://api.whatsapp.com/send/?phone=%2B584125459537&text&type=phone_number&app_absent=0",
          icon: "/static/icons/whatsapp.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    message:
      "if you have any questions or any suggestions, feel free to reach out! I'm here to help and would love to hear from you.",
  },
};
