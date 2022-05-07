export interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const examples = 'examples'

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: `${examples}`,
    children: [
      {
        label: 'Intro animation cube',
        subLabel: 'clickable animated cube',
        href: `/${examples}/box-animation`,
      },
      {
        label: 'T Rex model',
        subLabel: 'Load a T Rex model',
        href: `/${examples}/t-rex`,
      },
      {
        label: 'Clouds',
        subLabel: 'Clouds with text',
        href: `/${examples}/clouds`,
      },
      {
        label: 'Image gallery',
        subLabel: '3d Image gallery',
        href: `/${examples}/image-gallery-with-panorama`,
      },
      {
        label: 'Image gallery auto rotate',
        subLabel: 'Lionel Messi 3d Image gallery',
        href: `/${examples}/image-gallery-lionel-messi`,
      },
      {
        label: '3D Text',
        subLabel: '3D Text with MouseOnMove event',
        href: `/${examples}/3d-text`,
      },
      {
        label: 'Panorama',
        subLabel: 'Beach panorama in three.js fiber',
        href: `/${examples}/panorama`,
      },
      {
        label: 'Room',
        subLabel: 'Room with clickable window',
        href: `/${examples}/room-with-clickable-window`,
      },
      {
        label: 'Cubes',
        subLabel: 'cubes from three.js fiber',
        href: `/${examples}/cubes`,
      },
      {
        label: 'Stars',
        subLabel: 'stars example from drei',
        href: `/${examples}/stars`,
      },
      {
        label: 'Plain Geometry',
        subLabel: 'simple geometry example',
        href: `/${examples}/plain-geometry`,
      },
    ],
  },
  {
    label: 'Data fetching examples',
    children: [
      {
        label: 'Frontend Frameworks Stars',
        subLabel: 'Github stars for different frontend frameworks',
        href: '/frontend-frameworks-stars',
      },
      // {
      //   label: 'Euro 21 top scorers',
      //   subLabel: 'data fetching example from football-data',
      //   href: '/euro-football',
      // }
    ],
  },
  {
    label: 'Useful links',
    href: '/useful-links',
  },
]
