from checkup.views import CheckUpViewSet
from rest_framework.routers import DefaultRouter
from django.urls import path, include

router = DefaultRouter()
router.register('checkup', CheckUpViewSet, basename='checkup')

urlpatterns = [
    path('', include(router.urls)),
]