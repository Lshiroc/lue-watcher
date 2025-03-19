from django.db import models

class Track(models.Model):
    session_id = models.SlugField(null=False)
    x = models.IntegerField(default=0)
    y = models.IntegerField(default=0)
    scrollX = models.IntegerField(default=0)
    scrollY = models.IntegerField(default=0)
    timestamp = models.IntegerField(default=0, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    isClicked = models.BooleanField(default=False)
    isScrolling = models.BooleanField(default=False)
