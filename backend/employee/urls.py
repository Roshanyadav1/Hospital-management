from django.urls import path
from employee.views import *

urlpatterns= [
    path('add/', EmployeeAdd.as_view(), name='employee add'),
    path('view/', EmployeeView.as_view(), name = 'employee view'),
    path('view/<uuid:pk>/', EmployeeView.as_view(), name = 'employee view by id'),
    path('update/<uuid:pk>/', EmployeeUpdate.as_view(), name = 'employee update'),
    path('delete/<uuid:pk>/', EmployeeDelete.as_view(), name = 'employee delete'),
    path('filter/', EmployeeFilter.as_view(), name = 'employee filter'),
]