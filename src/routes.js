import Home from './Pages/Home.vue'
import Product from './Pages/Product.vue'

export  default[
    {
        path: '/',
        component: Home,
        name: 'home' 
    },
    {
        path: '/product/:id',
        component: Product,
        name: 'product',
        props: true
    }
]