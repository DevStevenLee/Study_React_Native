
import { useState, useEffect } from 'react';
import * as Location from 'expo-location';


export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);
    /*
        하단 useEffect()의 기존 코드는
        useEffect(() => {
            if(shouldTrack){
                startWatching();
            } else {
                if(subscriber)
                    subscriber.remove();
                subscriber = null;
            }
        }, [shouldTrack])이었다.

        shouldTrack은 TrackCreateScreen에서 isFocus로 들어왔는데

    */
    useEffect(() => {
        let subscriber;

        const startWatching = async () => {
            try {
                const { granted } = await Location.requestForegroundPermissionsAsync();
                if (!granted) {
                    throw new Error('Location permission not granted');
                }
    
                subscriber = await Location.watchPositionAsync({
                    accuracy: Location.Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, callback);

    
            } catch (e) {
                setErr(e);
            }
        };    

        if (shouldTrack) {
            startWatching();
        } else {
            if(subscriber)
                subscriber.remove();
            subscriber = null;
        }

        /*
            Clean-up함수란,
            useEffect()에서 parameter로 넣은 함수의 return 함수이다.

            clean-up 함수를 사용하면
            re-render -> 이전 effect clean-up -> effect
        */
        return () => {
            if(subscriber){
                subscriber.remove();
                subscriber = null;
            }
        };
    }, [shouldTrack, callback]);

    return [err];
}