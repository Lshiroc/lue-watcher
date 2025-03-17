from django.http import JsonResponse
from lue_backend.models import Track
from .serializers import TrackSerializer
from django.shortcuts import get_list_or_404
from drf_spectacular.utils import extend_schema 
from rest_framework import generics

class Tracks(generics.GenericAPIView):
    @extend_schema(
        summary="Retrieve Tracks",
        description="Returns a list of tracks",
        responses={200: TrackSerializer(many=True)}
    )
    def get(self, request):
        tracks = Track.objects.all()
        serializer = TrackSerializer(tracks, many=True)

        return JsonResponse(serializer.data, safe=False)

class TracksGet(generics.GenericAPIView):
    @extend_schema(
        summary="Retrieve Tracks by session_id",
        description="Returns a list of tracks for a given session ID.",
        responses={200: TrackSerializer(many=True)}
    )
    def get(self, request, session_id):
        tracks = get_list_or_404(Track, session_id=session_id)
        serializer = TrackSerializer(tracks, many=True)

        return JsonResponse(serializer.data, safe=False)

