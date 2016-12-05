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
            path: 'pricing',
            data: {
              menu: {
                title: 'Pricing',
              }
            }
          },
          {
            path: 'timeline',
            data: {
              menu: {
                title: 'Timeline',
              }
            }
          },
          {
            path: 'login',
            data: {
              menu: {
                title: 'Login Page',
              }
            }
          },
          {
            path: 'register',
            data: {
              menu: {
                title: 'Register Page',
              }
            }
          },
          {
            path: 'lock',
            data: {
              menu: {
                title: 'Lock Screen Page',
              }
            }
          },
          {
            path: 'user',
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
