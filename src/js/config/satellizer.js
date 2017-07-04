angular
  .module('wabisabiApp')
  .config(Auth);

Auth.$inject = ['$authProvider'];
function Auth($authProvider) {
  $authProvider.signupUrl = '/api/register';
  $authProvider.loginUrl = '/api/login';
  $authProvider.github({
    url: '/api/oauth/instagram',
    clientId: '6dcf28a419c64ab883c4c0584e95ab1f'
  });
}
