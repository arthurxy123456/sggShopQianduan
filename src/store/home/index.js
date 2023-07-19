// home模块仓库

import { reqGetBaseCategoryList, reqGetBannerList } from '@/api/index.js'

const state = {
    categoryList: [],
    bannerList: []
};
const mutations = {
    // 级联选择器
    CATEGORYLIST(state, data) {
        data.pop();
        state.categoryList = data;
    },
    // home页面轮播图数据
    BANNERLIST(state, data) {
        state.bannerList = data;
    }
};
const actions = {
    // 级联选择器
    async categoryList(context) {
        let result = await reqGetBaseCategoryList()
        if (result.code == 200) {
            context.commit('CATEGORYLIST', result.data)
        }
    },
    // home页面轮播图数据
    async getBannerList(context) {
        let result = await reqGetBannerList()
        if (result.code == 200) {
            context.commit('BANNERLIST', result.data)
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}