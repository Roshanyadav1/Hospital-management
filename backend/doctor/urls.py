from django.urls import path, include
from doctor.views import DoctorViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('', DoctorViewSet, basename='doctor')

urlpatterns = [
    path('', include(router.urls)),
]