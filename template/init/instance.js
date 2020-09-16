import Util from '<%- $$.relative("util") %>';

const baseUrl = function() {
    return `${process.env.<%- data.project.domain || 'DOMAIN' %>}`;
};

export default Util.finance(baseUrl);
