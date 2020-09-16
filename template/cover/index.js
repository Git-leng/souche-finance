/* eslint-disable */
import Util from '../util';

let domain = '<%- data.project.domain || '' %>';
let instance = Util.finance(domain);

<% _.forEach(data.list, function(o){ %> /** <%- o.summary %> */
export function <%- $$.convertUrl(`${o.path}/${o.method}`.replace(/-/g, '_')) %> (opts) {
    return instance({
        method: '<%- o.method %>',
        url: '<%- o.path %>',
        opts: opts,
    });
}

<% }) %>
