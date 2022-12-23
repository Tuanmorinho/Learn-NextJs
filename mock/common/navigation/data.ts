import { INavigation } from "@/models/navigation"

export const ROUTE_LIST_DESKTOP: INavigation[] = [
    {
        id: 'home',
        title: 'Trang chủ',
        type: 'basic',
        path: '/'
    },
    {
        id: 'posts',
        title: 'Tin bài',
        type: 'basic',
        path: '/posts'
    },
    {
        id: 'order',
        type: 'group',
        title: 'Đơn hàng',
        path: '/order',
        children: [
            {
                id: 'receipt',
                type: 'basic',
                title: 'Đơn nhận',
                path: '/order/receipt',
                children: [
                    {
                        id: 'order-receipt-test',
                        type: 'basic',
                        title: 'Test',
                        icon: 'SwipeDownAltRoundedIcon',
                        path: '/order/receipt/test',
                        children: [
                            {
                                id: 'order-receipt-test-test-2',
                                type: 'basic',
                                title: 'Test 2',
                                icon: 'SwipeDownAltRoundedIcon',
                                path: '/order/receipt/test/test2',
                                children: [
                                    {
                                        id: 'order-receipt-test-test-2-test-3',
                                        type: 'basic',
                                        title: 'Test 3',
                                        icon: 'SwipeDownAltRoundedIcon',
                                        path: '/order/receipt/test/test2/test3',
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                id: 'shipment',
                type: 'basic',
                title: 'Đơn gửi',
                path: '/order/shipment',
            }
        ]
    },
    {
        id: 'other',
        title: 'Xem thêm',
        type: 'basic',
        path: '/other'
    },
]

export const ROUTE_LIST_MOBILE: INavigation[] = [
    {
        id: 'home',
        title: 'Trang chủ',
        type: 'basic',
        icon: 'HomeRounded',
        path: '/'
    },
    {
        id: 'posts',
        title: 'Tin bài',
        type: 'basic',
        icon: 'DynamicFeedRoundedIcon',
        path: '/posts'
    },
    {
        id: 'up-post',
        title: 'Đăng tin',
        type: 'basic',
        icon: 'PostAddRoundedIcon',
        path: '/posts/up'
    },
    {
        id: 'order',
        type: 'group',
        title: 'Đơn hàng',
        icon: 'ShoppingBagOutlinedIcon',
        path: '/order',
        children: [
            {
                id: 'order-receipt',
                type: 'basic',
                title: 'Đơn nhận',
                icon: 'SwipeDownAltRoundedIcon',
                path: '/order/receipt',
            },
            {
                id: 'order-shipment',
                type: 'basic',
                title: 'Đơn gửi',
                icon: 'SwipeUpAltRoundedIcon',
                path: '/order/shipment',
                children: [
                    {
                        id: 'order-shipment-test',
                        type: 'basic',
                        title: 'Test',
                        icon: 'SwipeDownAltRoundedIcon',
                        path: '/order/shipment/test',
                    },
                ]
            }
        ]
    },
    {
        id: 'other',
        title: 'Xem thêm',
        type: 'basic',
        icon: 'MoreHorizRoundedIcon',
        path: '/other'
    },
]