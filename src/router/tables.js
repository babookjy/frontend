import Layout from '@/Layout/Layout'

export default [{
    path: '/tables',
    component: Layout,
    children: [{
        path: 'table1',
        component: () => import('@/components/tables/Vue-tables-2')
    }]
}]