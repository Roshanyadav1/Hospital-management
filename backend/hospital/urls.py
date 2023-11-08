from hospital.views import HospitalViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path, include

router = DefaultRouter()
router.register('', HospitalViewSet, basename = 'hospital')

urlpatterns = [
    path('', include(router.urls)),
]