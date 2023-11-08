from appointment.views import AppointmentViewSet
from django.urls import path, include
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('appointment', AppointmentViewSet, basename='appointment')

urlpatterns = [
    path('', include(router.urls)),
]