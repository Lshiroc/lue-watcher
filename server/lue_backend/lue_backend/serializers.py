# from .models import Track
from lue_backend.models import Track
from rest_framework import serializers

class TrackSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Track
        fields = ['session_id', 'x', 'y', 'scrollX', 'scrollY', 'timestamp', 'isClicked', 'isScrolling', 'created_at',]
