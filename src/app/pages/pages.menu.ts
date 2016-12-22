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
        path: 'articles',
        data: {
          menu: {
            title: 'Articles',
            icon: 'assignment',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'categories',
        data: {
          menu: {
            title: 'Categories',
            icon: 'style',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'pages',
        data: {
          menu: {
            title: 'Example Pages',
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
          },
          {
            path: 'userprofile',
            data: {
              menu: {
                title: 'User Profile'
              }
            }
          }
        ]
      }
    ]
  }
];
