import Products from '../pages/Products'
import Terminal from '../pages/Terminal'

const routeList = [
  {
    name: 'Terminal',
    path: '/',
    exact: false,
    component: <Terminal />,
    permission: true,
  },
  {
    name: 'Products',
    path: '/product',
    exact: false,
    component: <Products />,
    permission: true,
  },
]

export default routeList
