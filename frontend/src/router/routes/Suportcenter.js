import { lazy } from 'react'

const SuportcenterRoutes = [
  // Suportcenter
  {
    path: '/suportcenter/faq',
    component: lazy(() => import('../../views/suportcenter/faq'))
  },
  {
    path: '/suportcenter/knowledge-base',
    exact: true,
    component: lazy(() => import('../../views/suportcenter/knowledge-base/KnowledgeBase'))
  },
  {
    path: '/suportcenter/knowledge-base/:category',
    exact: true,
    component: lazy(() => import('../../views/suportcenter/knowledge-base/KnowledgeBaseCategory')),
    meta: {
      navLink: '/suportcenter/knowledge-base'
    }
  },
  {
    path: '/suportcenter/knowledge-base/:category/:question',
    component: lazy(() => import('../../views/suportcenter/knowledge-base/KnowledgeBaseCategoryQuestion')),
    meta: {
      navLink: '/suportcenter/knowledge-base'
    }
  }
 

]

export default SuportcenterRoutes
