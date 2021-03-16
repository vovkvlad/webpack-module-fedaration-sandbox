import App from './App';
import { SubPage1 } from './components/sub-page-1/sub-page-1';
import { SubPage2 } from './components/sub-page-2/sub-page-2';

const REACT_PAGE_ROUTES = [
  {
    name: "app.react-page",
    url: "/react-page",
    component: App,
  },
  {
    name: "app.react-page.sub-page-1",
    url: "/sub-a",
    component: SubPage1,
  },
  {
    name: "app.react-page.sub-page-2",
    url: "/sub-b",
    component: SubPage2,
  },
];

export default REACT_PAGE_ROUTES;