from django.db import models
import uuid
from django.core.validators import RegexValidator


class Patient(models.Model):
    patient_id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    patient_name = models.CharField(max_length=255)
    patient_age = models.IntegerField()
    patient_address = models.CharField(max_length=255)
    patient_email = models.EmailField(max_length=255)
    password = models.CharField(max_length=255)
    patient_mobile = models.BigIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
