from django.db import models
import uuid

<<<<<<< HEAD
# Create your models here.
class Error(models.Model):
    error_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    error_title = models.CharField(max_length = 255)
    error_message = models.TextField(max_length = 255)
=======

class Error(models.Model):
    error_id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    error_title = models.CharField(max_length=255)
    error_message = models.TextField(max_length=255)
    error_code = models.IntegerField()
>>>>>>> origin/main
