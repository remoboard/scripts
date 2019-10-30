


var request = require('request');


class RemoboardClient {
    constructor(url) {
        this.url = url;
        this.apiurl = url + '/api';
        this.key = '##rkb-1l0v3y0u3000##';
    }

    ping() {
        request.post(
            this.apiurl,
            {  form: { 
                msg : 'input' + this.key + '' 
            }},
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log('ready')
                } else {
                    console.log('error:' + error);
                }
            }
        );
    }

    input(text) {
        request.post(
            this.apiurl,
            {  form: { 
                msg : 'input' + this.key + text
            }},
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log('ready')
                } else {
                    console.log('error:' + error);
                }
            }
        );
    }

    delete() {
        request.post(
            this.apiurl,
            {  form: { 
                msg : 'input-delete' + this.key + ''
            }},
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log('ready')
                } else {
                    console.log('error:' + error);
                }
            }
        );
    }

    _move(direction) {
        request.post(
            this.apiurl,
            {  form: { 
                msg : 'move-' + direction + this.key + ''
            }},
            function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log('ready')
                } else {
                    console.log('error:' + error);
                }
            }
        );
    }

    move_up() { this._move('up') }
    move_down() { this._move('down') }
    move_left() { this._move('left') }
    move_right() { this._move('right') }

}


c = new RemoboardClient('http://192.168.31.80:7777');
c.ping();
c.input('hello');
c.delete();
c.move_up();
c.move_down();
c.move_left();
c.move_right();


console.log('done');
