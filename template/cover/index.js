/* eslint-disable */
import Util from '../util.js';
let instance = Util.request('<%- data.project.domain %>');

<% _.forEach(data.list, function(o){ %> /** <%- o.summary %> */
export function <%- $$.convertUrl(o.path) %><T = any> (opts?: any) {
    return instance<T>({
        method: '<%- o.method %>',
        url: '<%- o.path %>',
        opts: opts
    });
}

<% }) %>
