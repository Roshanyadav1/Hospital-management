<<<<<<< HEAD
=======
from employee.models import Employee
>>>>>>> origin/main
from django.db import models
import uuid


class Doctor(models.Model):
<<<<<<< HEAD
    doctor_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    # employee_id = models.ForeignKey(Employee, on_delete=models.CASCADE)
    # doctor_profile_picture = models.ImageField(upload_to='doctor_profile_picture/')
    disease_specialist = models.CharField(max_length = 255)
=======
    doctor_id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    doctor_profile_picture = models.CharField(max_length=255)
    disease_specialist = models.CharField(max_length=255)
>>>>>>> origin/main
    doctor_type = models.CharField(max_length = 255)
    times = models.TextField(blank=True, null=True)
    day = models.TextField(blank=True, null=True)
    per_patient_time = models.TimeField()
    status = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
