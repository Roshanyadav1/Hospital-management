from django.db import models
import uuid
from djongo.storage import GridFSStorage
from django.conf import settings

grid_fs_storage = GridFSStorage(collection='myfiles', base_url=''.join([settings.BASE_URL, 'myfiles/']))

# Patient Model Class
class Patient(models.Model):
    patient_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    patient_name = models.CharField(max_length = 255)
    patient_profile_picture = models.ImageField(upload_to='patient_profile_picture/')
    patient_age = models.IntegerField()
    patient_address = models.CharField(max_length = 255)
    patient_mobile = models.BigIntegerField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)