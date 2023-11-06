from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions
from django.views.generic import TemplateView

get_schema_view = get_schema_view(
   openapi.Info(
      title = "Hospital Management System",
      default_version = 'v1',),
   public = True,
   permission_classes = (permissions.AllowAny,),
)

urlpatterns = [
<<<<<<< HEAD
   path('admin/', admin.site.urls),
   path('api/docs/', schema_view.with_ui('swagger', cache_timeout = 0),name = 'schema-swagger-ui'),
   path('api/', include('appointment.urls')),
   path('api/', include('patient.urls')),
   path('api/', include('doctor.urls')),
   path('api/', include('disease.urls')),
   path('api/', include('hospital.urls')),
   path('api/prescription', include('prescription.urls')),
   path('api/', include('checkup.urls')),
   path('api/user/', include('user.urls')),
   path('api/', include('employee.urls')),
=======
   path('admin/', admin.site.urls),   
   path('api/',
        include([
            path('api_schema', get_schema_view.as_view(), name = "api_schema"),
            path('docs/', TemplateView.as_view(
                  template_name='docs.html',
                  extra_context={'schema_url':'api_schema'}
            ), name='docs'),
            path('patient/', include('patient.urls'), name = 'Patient'),
            path('doctor/', include('doctor.urls'), name = 'Doctor'),
            path('disease/', include('disease.urls')),
            path('appointment/', include('appointment.urls')),
            path('hospital/', include('hospital.urls')),
            path('prescription/', include('prescription.urls')),
            path('checkup/', include('checkup.urls')),
            path('user/', include('user.urls')),
            path('employee/', include('employee.urls')),
        ]))
>>>>>>> 404572c91cef9095024bdf6c6fe733dd63e33511
]
