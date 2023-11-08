from patient.views import PatientViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path, include

router = DefaultRouter()
router.register('', PatientViewSet, basename = 'patient')

urlpatterns = [
    path('', include(router.urls)),
]