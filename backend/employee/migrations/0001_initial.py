# Generated by Django 4.1.12 on 2023-11-23 05:48

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('employee_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('employee_name', models.CharField(max_length=100)),
                ('employee_email', models.EmailField(max_length=100)),
                ('employee_number', models.BigIntegerField()),
                ('employee_password', models.CharField(max_length=255)),
                ('employee_type', models.CharField(choices=[('Part Time', 'Part Time'), ('Full Time', 'Full Time')], max_length=50)),
                ('employee_role', models.CharField(choices=[('Doctor', 'Doctor'), ('Manager', 'Manager')], max_length=50)),
                ('employee_status', models.CharField(choices=[('Available', 'Available'), ('Unavailable', 'Unavailable')], max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('created_by', models.CharField(default='Default_value', max_length=100)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('updated_by', models.CharField(default='default_value', max_length=100)),
            ],
        ),
    ]
