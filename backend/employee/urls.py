from django.urls import path, include
from rest_framework.routers import DefaultRouter
from employee.views import *

router = DefaultRouter()
router.register('', EmployeeViewSet, basename='employee')

urlpatterns = [
    path('', include(router.urls)),
]