from prescription.views import PrescriptionViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path, include

router = DefaultRouter()
router.register('', PrescriptionViewSet, basename = 'prescription')

urlpatterns = [
    path('', include(router.urls)),
]