/* eslint-disable */
import Util from '../util';
let domain = process.env.MUJI_APP_<%- $$.convertUrl(data.moduleName) %>_HOST;
let instance = Util.request(domain || '');

<% _.forEach(data.list, function(o){ %> /** <%- o.summary %> */
export function <%- $$.convertUrl(o.path) %><T = any> (opts?: any) {
    return instance({
        method: '<%- o.method %>',
        url: '<%- o.path %>',
        opts: opts
    });
}

<% }) %>
