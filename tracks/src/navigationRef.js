import { NavigationActions } from 'react-navigation'; 

let navigator;

export const setNavigator = (nav) => {
    navigator = nav;
};

export const navigate = (routeName, params) => {
     /**
       * * 
       * navigator.dispatch
       * => The dispatch method lets us send a navigation action object which determines 
       * how the navigation state will be updated. 
       * */
    navigator.dispatch(

/*
 * All NavigationActions 
 * return an object that can be sent to the router using navigation.dispatch() method.
 * 
 */
        NavigationActions.navigate({
            routeName: routeName,
            params
        })
    );
};