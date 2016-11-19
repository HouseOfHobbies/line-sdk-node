/**
 *  Line Request Class
 *  Private Method _Name
 *
 *  @author Goma::NanoHa
 *  @version 1.0
 */

const META = require('./constant/meta');
const request = require('superagent-promise')(require('superagent'), Promise);

class lineRequest
{

    /**
     *  Constructor
     *
     *  @var token String Token
     */
    constructor(token)
    {
        this._authHeaders = {
            Authorization: `Bearer ${token}`
        };
        this._userAgentHeader = {
            'User-Agent': `LINE-SDK-Node/${META.VERSION}`
        };
    }

    /**
     *  Get Method
     *
     *  @var url String URL
     *  @return Promise(responce)
     */
    get(url)
    {
        return this.sendRequest('GET', url, [], []);
    }

    /**
     *  Post Method
     *
     *  @var url String URL
     *  @var data Object requestBody
     *  @return Promise(responce)
     */
    post(url, data = {})
    {
        return this.sendRequest('POST', url, {'Content-Type': 'application/json', 'charset': 'utf-8'}, data);
    }

    sendRequest(method, url, additionalHeader = {}, reqBody = {})
    {
        let headers = Object.assign(this._authHeaders, this._userAgentHeader, additionalHeader);
        switch(method) {
            case 'get':
            case 'GET':
                return request.get(url)
                    .set(headers)
                    .query(reqBody)
                    .end();
                break;
            case 'post':
            case 'POST':
                return request.post(url)
                    .set(headers)
                    .send(reqBody)
                    .end();
                break;
        }
    }

}

module.exports = lineRequest;
