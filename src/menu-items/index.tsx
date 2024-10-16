import dashboard from './dashboard';
// import application from './application';
import forms from './forms';
// import elements from './elements';
// import pages from './pages';
// import utilities from './utilities';
// import support from './support';
// import other from './other';
import { NavItemType } from 'types';

// ==============================|| MENU ITEMS ||============================== //

// const menuItems: { items: NavItemType[] } = {
//     items: [dashboard, widget, application, forms, elements, pages, utilities, support, other]
// };
const menuItems: { items: NavItemType[] } = {
    items: [dashboard, forms]
};

export default menuItems;
