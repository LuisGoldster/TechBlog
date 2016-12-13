export const PAGES_MENU = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'dashboard',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'Forms',
            icon: 'content_paste',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'regular',
            data: {
              menu: {
                title: 'Regular Forms',
              }
            }
          },
          {
            path: 'extended',
            data: {
              menu: {
                title: 'Extended Forms',
              }
            }
          }
        ]
      },
      {
        path: 'pages',
        data: {
          menu: {
            title: 'Pages',
            icon: 'image',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'userprofile',
            data: {
              menu: {
                title: 'User Profile',
              }
            }
          }
        ]
      }
    ]
  }
];
