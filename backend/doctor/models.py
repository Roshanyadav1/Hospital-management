from employee.models import Employee
from django.db import models
import uuid

class Doctor(models.Model):
    doctor_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    # doctor_profile_picture = models.ImageField(upload_to='doctor_profile_picture/')
    disease_specialist = models.CharField(max_length = 255)
    doctor_type = models.CharField(max_length = 255)
    times = models.TextField(blank=True, null=True)
    day = models.CharField(max_length=255, choices=(('Monday', 'Monday'),
                                                    ('Tuesday', 'Tuesday'),
                                                    ('Wednesday', 'Wednesday'),
                                                    ('Thursday', 'Thursday'),
                                                    ('Friday', 'Friday'),
                                                    ('Saturday', 'Saturday'),
                                                    ('Sunday', 'Sunday'),))
    per_patient_time = models.TimeField()
    status = models.CharField(max_length=255)
    # doctor_time_schedule = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)