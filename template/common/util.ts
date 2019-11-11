/**
 * @file 封装请求
 */
import Http from '@souche-f2e/http-request';

const ajax = (url: string, params : any = {}) => {
    params.url = url;
    return Http(params);
}

export default {
    ajax(baseURL: string) {
        return function(params: any) {
            let host = typeof baseURL === 'function' ? baseURL() : baseURL;
            params.opts = params.opts || {};
            return ajax(host + params.url, {
                data: params.opts || {},
                ...params
            });
        };
    }
};
