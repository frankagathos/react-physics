export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const examples="examples";

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: `${examples}`,
    children: [
      {
        label: "Clouds",
        subLabel: "Clouds with text",
        href: `/${examples}/clouds`,
      },
      {
        label: "Image gallery",
        subLabel: "3d Image gallery",
        href: `/${examples}/image-gallery-with-panorama`,
      },
      {
        label: "3D Text",
        subLabel: "3D Text with MouseOnMove event",
        href: `/${examples}/3d-text`,
      },
      {
        label: "Panorama",
        subLabel: "Beach panorama in three.js fiber",
        href: `${examples}/panorama`,
      },
      {
        label: "Room",
        subLabel: "Room with clickable window",
        href: `/${examples}/room-with-clickable-window`,
      },
      {
        label: "Cubes",
        subLabel: "cubes from three.js fiber",
        href: `/${examples}/cubes`,
      },
      {
        label: "Stars",
        subLabel: "stars example from drei",
        href: `/${examples}/stars`,
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
