export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Examples",
    children: [
      {
        label: "Clouds",
        subLabel: "Clouds with text",
        href: "/clouds",
      },
      {
        label: "Image gallery",
        subLabel: "3d Image gallery",
        href: "/image-gallery-with-panorama",
      },
      {
        label: "3D Text",
        subLabel: "3D Text with MouseOnMove event",
        href: "/3d-text",
      },
      {
        label: "Panorama",
        subLabel: "Beach panorama in three.js fiber",
        href: "/panorama",
      },
      {
        label: "Room",
        subLabel: "Room with clickable window",
        href: "/room-with-clickable-window",
      },
      {
        label: "Cubes",
        subLabel: "cubes from three.js fiber",
        href: "/cubes",
      },
      {
        label: "Stars",
        subLabel: "stars example from drei",
        href: "/stars",
      },
    ],
  },
  {
    label: "Data fetching examples",
    children: [
      {
        label: "Frontend Frameworks Stars",
        subLabel: "Github stars for different frontend frameworks",
        href: "/frontend-frameworks-stars",
      },
      // {
      //   label: 'Euro 21 top scorers',
      //   subLabel: 'data fetching example from football-data',
      //   href: '/euro-football',
      // }
    ],
  },
];
