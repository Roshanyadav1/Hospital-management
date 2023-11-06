from django.urls import path
from employee.views import *

<<<<<<< HEAD
router = DefaultRouter()
router.register('employee', EmployeeViewSet, basename='employee')
urlPattern = router.urls
=======
urlpatterns= [
    path('add/', EmployeeAdd.as_view(), name='employee add'),
    path('view/', EmployeeView.as_view(), name = 'employee view'),
    path('view/<uuid:pk>/', EmployeeView.as_view(), name = 'employee view by id'),
    path('update/<uuid:pk>/', EmployeeUpdate.as_view(), name = 'employee update'),
    path('delete/<uuid:pk>/', EmployeeDelete.as_view(), name = 'employee delete'),
    path('filter/', EmployeeFilter.as_view(), name = 'employee filter'),
]
>>>>>>> 404572c91cef9095024bdf6c6fe733dd63e33511
