// 对于axios进行二次封装
import axios from 'axios'
// 引入进度条 start:开始 done:结束
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';

const requests = axios.create({
    // 基础路径：发请求的时候，路径当中会出现api
    baseURL:"/api",
    // 代表请求超时的时间5s
    timeout:5000,
})
// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    // config:配置对象，对象里面有一个属性很重要，headers请求头
    nProgress.start();
    return config;
})

// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 成功的回调
    nProgress.done();
    return res.data;
},(error)=>{
    // 失败的回调
    return Promise.reject(new Error('faile'))
})
// 对外暴露
export default requests;