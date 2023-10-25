from django.db import models
import uuid 

# Create your models here.
class Doctor(models.Model):
    id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False) 
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    specialty = models.CharField(max_length=200)
    contact_number = models.CharField(max_length=10)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    password2 = models.CharField(max_length=100)