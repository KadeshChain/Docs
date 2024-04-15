import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/Chain',
    component: ComponentCreator('/docs/Chain', '6c0'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '4bc'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '6f0'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '310'),
            routes: [
              {
                path: '/docs/Chain/',
                component: ComponentCreator('/docs/Chain/', 'ca5'),
                exact: true
              },
              {
                path: '/docs/Overview',
                component: ComponentCreator('/docs/Overview', '3e8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Entry/Introduction',
                component: ComponentCreator('/docs/whitepaper/Entry/Introduction', '41d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Entry/WhatWeNeed',
                component: ComponentCreator('/docs/whitepaper/Entry/WhatWeNeed', '644'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Features/BiometricSmartContract',
                component: ComponentCreator('/docs/whitepaper/Features/BiometricSmartContract', 'f6e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Features/KadeshBox',
                component: ComponentCreator('/docs/whitepaper/Features/KadeshBox', '3d2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Features/KadeshChain',
                component: ComponentCreator('/docs/whitepaper/Features/KadeshChain', 'e28'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Features/KadeshWallet',
                component: ComponentCreator('/docs/whitepaper/Features/KadeshWallet', 'ee5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Features/KadeshWill',
                component: ComponentCreator('/docs/whitepaper/Features/KadeshWill', 'aad'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Legal/Disclaimer',
                component: ComponentCreator('/docs/whitepaper/Legal/Disclaimer', 'bb5'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Market Info/Competitors',
                component: ComponentCreator('/docs/whitepaper/Market Info/Competitors', 'bcc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Market Info/TargetMarkets',
                component: ComponentCreator('/docs/whitepaper/Market Info/TargetMarkets', '8fb'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/References/MobileApp',
                component: ComponentCreator('/docs/whitepaper/References/MobileApp', 'f45'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/References/WebApp',
                component: ComponentCreator('/docs/whitepaper/References/WebApp', '2a3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Revenue Model/Monetization',
                component: ComponentCreator('/docs/whitepaper/Revenue Model/Monetization', 'bfc'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Roadmap/',
                component: ComponentCreator('/docs/whitepaper/Roadmap/', '548'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Team/CoreTeam',
                component: ComponentCreator('/docs/whitepaper/Team/CoreTeam', 'e37'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Team/Resumes',
                component: ComponentCreator('/docs/whitepaper/Team/Resumes', '467'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Token/KDSToken',
                component: ComponentCreator('/docs/whitepaper/Token/KDSToken', '77d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Token/TokenAllocation',
                component: ComponentCreator('/docs/whitepaper/Token/TokenAllocation', '8d2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Token/TokenEmission',
                component: ComponentCreator('/docs/whitepaper/Token/TokenEmission', 'd7c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Token/TokenFlow',
                component: ComponentCreator('/docs/whitepaper/Token/TokenFlow', '7d6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/docs/whitepaper/Token/TokenUtility',
                component: ComponentCreator('/docs/whitepaper/Token/TokenUtility', '2dc'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '5f6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
