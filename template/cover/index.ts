/* eslint-disable */
import Util from '../util';
let baseUrl = process.env.VUE_APP_<%- $$.convertUrl(data.moduleName) %>_API_URL;
let instance = Util.ajax(baseUrl);

<% _.forEach(data.list, function(o){ %> /** <%- o.summary %> */
export function <%- $$.convertUrl(o.path) %> (opts?: any) {
    return instance({
        method: '<%- o.method %>',
        url: '<%- o.path %>',
        opts: opts,
        res: <%- o.responseMessages[0].responseModel %>
    });
}

<% }) %>
