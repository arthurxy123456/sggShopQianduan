// api接口统一管理
import requests from "./request";
import mockRequests from "./mockRequest";

// 三级联动接口 /api/product/getBaseCategoryList
export const reqGetBaseCategoryList = () => {
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'GET'
    })
}

// home页面轮播图banner数据
export const reqGetBannerList = () => {
    return mockRequests({
        url: '/banner',
        method: 'GET'
    })
}