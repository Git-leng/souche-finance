/* eslint-disable */
import Util from '../util.js';
let instance = Util.request();

<% _.forEach(data.list, function(o){ %> /** <%- o.summary %> */
export function <%- $$.convertUrl(o.path) %><T = any> (opts?: any) {
    let host = Util.getHost('<%- data.project.domain %>');

    return instance<T>({
        method: '<%- o.method %>',
        url: host + '<%- o.path %>',
        opts: opts
    });
}

<% }) %>
