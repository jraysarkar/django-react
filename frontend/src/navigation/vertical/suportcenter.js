import { Home, Circle, XCircle, PlusSquare } from 'react-feather'

export default [
  {
    header: 'Suport Center'
  },
  
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
