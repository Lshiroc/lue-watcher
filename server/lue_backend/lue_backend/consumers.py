import json
from channels.generic.websocket import WebsocketConsumer
from django.shortcuts import get_object_or_404
from .serializers import TrackSerializer
from django.utils.crypto import get_random_string
from .models import Track
# from lua_backend.models import Track

class MyConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

        for i in range(3):
            session_id = get_random_string(8, 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890')
            track = Track.objects.filter(session_id=session_id)
            if not track:
                break
        
        print(f"Connected with session id: {session_id}")
        self.send(text_data=json.dumps({
            'message': 'TestMessage',
            'session_id': session_id,
        }))

    def disconnect(self, close_code):
        print("Disconnected") 

    def receive(self, text_data):
        data = json.loads(text_data)
        serializer = TrackSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            self.send(text_data=json.dumps({
                "status": "success",
                "message": "Data saved successfully"
            }))
        else:
            self.send(text_data=json.dumps({
                "status": "error",
                "errors": serializer.errors
            }))


