import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Team from '@/components/Team';
import Quiz from '@/components/Quiz';
import Result from '@/components/Result';
import FailedModal from '@/components/FailedModal';

// import { hasOwnMetadata } from 'core-js/fn/reflect';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, 
    {
      path: '/About',
      name: 'About',
      component: About,
    },
    {
      path: '/Quiz',
      name: 'Quiz',
      component: Quiz,
    },
    {
      path: '/Result',
      name: 'Result',
      component: Result,
    },    
    {
      path: '/About/Team',
      name: 'Team',
      component: Team,
    },
    {
      path: '/FailedModal',
      name: 'FailedModal',
      component: FailedModal,
    },   
    
    
    
  ]
});
