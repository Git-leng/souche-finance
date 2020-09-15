/* eslint-disable */
import Util from '../util';

let domain = process.env.<%- data.project.domain || 'DOMAIN' %>;
let instance = Util.finance(domain);

<% _.forEach(data.list, function(o){ %> /** <%- o.summary %> */
export function <%- $$.convertUrl(`${o.path}/${o.method}`) %> (opts) {
    return instance({
        method: '<%- o.method %>',
        url: '<%- o.path %>',
        opts: opts,
    });
}

<% }) %>
