import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'))
const Homepage = React.lazy(() => import('./components/pages/Homepage'))



const routes = [
    { path: '/', exact: true, name: 'Homepage', component: Homepage },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
];

export default routes;