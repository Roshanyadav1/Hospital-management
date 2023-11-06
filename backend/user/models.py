from django.db import models
import uuid

class User(models.Model):
    user_id  = models.UUIDField(primary_key = True, default = uuid.uuid4, editable = False)
    member_id = models.UUIDField()
    user_name = models.CharField(max_length = 255)
    user_email = models.CharField(
        verbose_name="email address",
        max_length=255,
        unique=True,
    )
    user_role = models.CharField(max_length = 255, choices=(('Admin', 'Admin'),
                                                            ('Manager', 'Manager'),
                                                            ('Doctor', 'Doctor'),
                                                            ('Patient', 'Patient')))
    user_password = models.CharField(max_length = 255)
    is_verify = models.BooleanField(default = False)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

