import { Home, Circle, PlusSquare, XCircle } from 'react-feather'

export default [
  {
    id: 'suportcenter',
    title: 'Suport Center',
    icon: <Home size={20} />,
    badge: 'light-warning',
    children: [
      {
        id: 'faqsuport',
        title: 'FQA',
        icon: <XCircle size={12} />,
        navLink: '/Suportcenter/FAQ'
      },
      {
        id: 'knowledgeBasesuport',
        title: 'Knowledge Base',
        icon: <PlusSquare />,
        permissions: ['admin', 'editor'],
        navLink: '/suportcenter/knowledge-base',
        parentOf: ['/suportcenter/knowledge-base/category/questions', '/suportcenter/knowledge-base/category']
      }
    ]
  }
]
