import { registerApplication, start } from 'single-spa';

registerApplication({
  name: 'user-profile',
  app: () => import('userProfile/index'),
});

registerApplication({
  name: 'user-photo',
  app: () => import('userPhoto/index'),
});

registerApplication({
  name: 'user-auth',
  app: () => import('userAuth/index'),
});

start(); 