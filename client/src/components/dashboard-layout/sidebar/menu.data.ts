import { IMenu } from './menu.interface';
import {
  CalendarRange,
  LayoutDashboard,
  Settings,
  SquareKanban,
  Timer,
} from 'lucide-react';
import { DASHBOARD_PAGES } from '@/config/page-url.config';

export const MENU: IMenu[] = [
  {
    icon: LayoutDashboard,
    link: DASHBOARD_PAGES.HOME,
    name: 'Dashboard',
  },
  {
    icon: SquareKanban,
    link: DASHBOARD_PAGES.TASKS,
    name: 'Tasks',
  },
  {
    icon: Timer,
    link: DASHBOARD_PAGES.TIMER,
    name: 'Pomodoro',
  },
  {
    icon: CalendarRange,
    link: DASHBOARD_PAGES.TIME_BLOCKS,
    name: 'Time blocks',
  },
  {
    icon: Settings,
    link: DASHBOARD_PAGES.SETTINGS,
    name: 'Settings',
  },
];
