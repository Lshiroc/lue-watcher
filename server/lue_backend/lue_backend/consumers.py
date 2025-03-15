import json
from channels.generic.websocket import WebsocketConsumer

class MyConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        self.send(text_data=json.dumps({
            'message': 'TestMessage'
        }))

    def disconnect(self, close_code):
        pass

    def recieve(self, text_data):
        pass

