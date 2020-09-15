import axios from 'axios';

const instance = axios.create();

function finance(baseURL) {
    return function (conf) {
        let { url, method, opts } = conf || {};
        let convertUrl = url.replace(/\{([\s\S]+?)\}/g, ($0, $1) => opts[$1] || '');
        return instance[method](baseURL + convertUrl, method == 'get' ? { params: opts } : { ...opts });
    };
}

export default {
    finance
};
