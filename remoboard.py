import requests 


class RemoboardClient:
    def __init__(self, url):
        self.url = url
        self.apiurl = url + '/api'
        self.key = '##rkb-1l0v3y0u3000##'

    def ping(self):
        data = {
            'msg': 'input' + self.key + ''
        }
        r = requests.post(self.apiurl, data)
        if r.status_code != 200:
            return False
        return r.text == '{ "result": 0 }'

    def input(self, text):
        data = {
            'msg': 'input' + self.key + text 
        }
        r = requests.post(self.apiurl, data)
        if r.status_code != 200:
            return False
        return r.text == '{ "result": 0 }'

    def delete(self):
        data = {
            'msg': 'input-delete' + self.key + ''
        }
        r = requests.post(self.apiurl, data)
        if r.status_code != 200:
            return False
        return r.text == '{ "result": 0 }'

    def _move(self, direction):
        data = {
            'msg': 'move-' + direction + self.key + '' 
        }
        r = requests.post(self.apiurl, data)
        if r.status_code != 200:
            return False
        return r.text == '{ "result": 0 }'

    def move_up(self):
        return self._move('up')

    def move_down(self):
        return self._move('down')

    def move_left(self):
        return self._move('left')

    def move_right(self):
        return self._move('right')


def main():
    c = RemoboardClient('http://192.168.31.80:7777')

    if not c.ping():
        print('pint failed')
        return

    print('ping ready')
    c.input('hello')
    c.delete()
    c.move_left()
    c.move_right()
    c.move_up()
    c.move_down()

    print('done')
    

if __name__ == '__main__':
    main()

