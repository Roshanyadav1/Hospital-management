from django.db import models
from django.core.validators import RegexValidator
import uuid


# Hospital Model Class
class Hospital(models.Model):
    hospital_id = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    hospital_name = models.CharField(max_length = 255)
    hospital_email = models.EmailField(max_length = 255)
    hospital_phone = models.CharField(max_length=10, validators=[
            RegexValidator(
                regex=r'^(?!.*(\d)\1{5})[0-9]+$/',
                message="Invalid Mobile number "
            ),
            ],)
    hospital_owner_name = models.CharField(max_length = 255)
    hospital_owner_phone = models.CharField(max_length=10, validators=[
            RegexValidator(
                regex=r'^(?!.*(\d)\1{5})[0-9]+$/',
                message="Invalid Mobile number "
            ),
            ],)
    hospital_owner_email = models.EmailField(max_length = 255,
            #                                  validators=[
            # RegexValidator(
            #     regex=r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b',
            #     message="Invalid email."
            # ),
            # ],
    )
                                         
    hospital_address = models.CharField(max_length = 255)
    hospital_city = models.CharField(max_length = 255)
    hospital_status =  models.BooleanField()
    # hospital_logo = models.ImageField(upload_to = 'hospital_logo/')
    hospital_type = models.CharField(max_length = 255)
    hospital_category = models.CharField(max_length = 255)
    username = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
