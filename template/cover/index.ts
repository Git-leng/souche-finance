/* eslint-disable */
import Util from '../util';
let domain = process.env.<%- $$.convertUrl(data.moduleName) || 'HOST' %>;
let instance = Util.request(domain || '');

<% _.forEach(data.list, function(o){ %> /** <%- o.summary %> */
export function <%- $$.convertUrl(o.path) %><T = any> (opts?: any) {
    return instance<T>({
        method: '<%- o.method %>',
        url: '<%- o.path %>',
        opts: opts
    });
}

<% }) %>
