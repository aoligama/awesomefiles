export enum Routes {
    HOME = 'Home',
    SIGNIN = 'SignIn',
    APP_ROUTE = 'AppRoute',
    AUTH_ROUTE = 'AuthRoute',
    UNAUTH_ROUTE = 'UnauthRoute'
}

export type RootStackParamList = {
    [Routes.APP_ROUTE]: undefined
    [Routes.AUTH_ROUTE]: undefined
    [Routes.UNAUTH_ROUTE]: undefined
    [Routes.HOME]: undefined
    [Routes.SIGNIN]: undefined
}
