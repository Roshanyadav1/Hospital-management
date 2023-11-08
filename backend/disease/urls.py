from disease.views import DiseaseViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path, include

router = DefaultRouter()    
router.register('disease', DiseaseViewSet, basename='disease')

urlpatterns = [
    path('', include(router.urls)),
]