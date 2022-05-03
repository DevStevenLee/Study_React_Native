import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    /**
     * async, await, callback
     *
     */
    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                /**
                 * params는 yelp api에서 찾아볼 수 있듯이
                 * api에서 get할 때 options을 설정해줄 수 있는 것이다.
                 * 
                 * ex) params: { limit: 50 } 결과값을 최대 50개로 제한한다.
                 */
                params: {
                    term: searchTerm,
                    limit: 50,
                    location: 'san jose'
                }
            });
            setResult(response.data.businesses);
        } catch (e) {
            setErrorMessage('Something went wrong! :(');
        }
    };

    /**
     * SearchScreen이 맨 처음 시작할 때
     * 초기 화면을 api에서 가지고 온 값으로 하고 싶으면
     * 하단에 있는 것처럼
     * searchApi('pasta')로 하면 되지 않나?
     * 
     * 그러나 !
     * 
     * searchApi('pasta')를 할 경우 rerender를 하는데
     * 이때 다시 searchApi('pasta')를 불러 infinte loop에 빠지게 된다.
     */

    // BAD Code!
    // Call searchApi when component is first rendered. 
    // searchApi('pasta');

    /**
     * * useEffect
     * 1. useEffect(() => {})
     * => run the arrow function every time the component is rendered
     * 
     * 2. useEffect(() => {}, [])
     * => run the arrow function only when the component is first rendered
     * 
     * 3. useEffect(() => {}, [value])
     * => retun the arrow function only when the component is first rendered,
     * and when the 'value' changes
     */

    useEffect(() => {
        searchApi('fish');
    }, [])

    return [searchApi, results, errorMessage];
};