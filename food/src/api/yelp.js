import axios from 'axios';

/**
 * axios는 api을 불러올 수 있게 해주는 network package이다.
 * 1. 하단 baseURL은 기본 url을 설정한 것이다.
 * 2. api을 접근하기 위해서 key를 입력해야 한다.
 *      => headers: { Authorization: 'Bearer 본인의 key 값'}을 통해 api에 접근할 수 있는 권한을 가진다.
 */

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 0ws1nhGBaV8LWajQnkUjJrRrPIKaGBYTWRqLK9xKXQSlayaQlWGvO98lVo-nRbu3Y3UMtdya7vqP6z7rAgvKa11ENUIcThEPcpbWFHLYyqi7NRWhhTX_J9a3icktYnYx'
    }
});