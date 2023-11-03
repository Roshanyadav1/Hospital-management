from django.urls import path, include
from rest_framework.routers import DefaultRouter
from employee.views import *

router = DefaultRouter()
router.register('employee', EmployeeViewSet, basename='employee')
urlPattern = router.urls