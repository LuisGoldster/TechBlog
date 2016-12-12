export const PAGES_MENU = [
  {
    path: 'pages',
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
        path: 'functionForms',
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
            path: 'regularForms',
            data: {
              menu: {
                title: 'Regular Forms',
              }
            }
          },
          {
            path: 'extendedForms',
            data: {
              menu: {
                title: 'Extended Forms',
              }
            }
          }
        ]
      },
      {
        path: 'functionPages',
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
            path: 'userProfile',
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
