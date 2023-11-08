from django.contrib import admin
from django.urls import path, include
from doctor.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/doctor/', include('doctor.urls')),
]
