// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'my profile',
    path: '/dashboard/profile',
    icon: icon('ic_user'),
  },
  {
    title: 'my dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  //   {
  //   title: 'product',
  //   path: '/dashboard/products',
  //   icon: icon('ic_cart'),
  // },
  {
    title: 'my actions',
    path: '/dashboard/actions',
    icon: icon('ic_user'),
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  }
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // }
];

export default navConfig;
