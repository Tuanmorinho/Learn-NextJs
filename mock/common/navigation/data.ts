export const ROUTE_LIST = [
    {
        label: 'Trang chủ',
        path: '/',
    },
    {
        label: 'Tin bài',
        path: '/posts',
    },
    {
        label: 'Đơn hàng',
        path: '/order',
        children: [
            {
                label: 'Đơn nhận',
                path: '/receipt',
            },
            {
                label: 'Đơn gửi',
                path: '/shipment',
            }
        ]
    }
]