"""
ASGI config for lue_backend project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/asgi/
"""

import os
import django
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from lue_backend.routing import websocket_urlpatterns

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'lue_backend.settings')
django.setup()

# Initialize Django ASGI application
django_asgi_app = get_asgi_application()

# Define ASGI application
application = ProtocolTypeRouter({
    "http": django_asgi_app,  # Corrected this line
    "websocket": AuthMiddlewareStack(
        URLRouter(
            websocket_urlpatterns
        )
    ),
})
