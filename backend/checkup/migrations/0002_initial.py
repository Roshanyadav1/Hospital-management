# Generated by Django 4.1.12 on 2023-11-08 13:25

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('patient', '0001_initial'),
        ('doctor', '0001_initial'),
        ('checkup', '0001_initial'),
        ('prescription', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='checkup',
            name='doctor_id',
            field=models.ForeignKey(default=uuid.uuid4, on_delete=django.db.models.deletion.CASCADE, to='doctor.doctor'),
        ),
        migrations.AddField(
            model_name='checkup',
            name='patient_id',
            field=models.ForeignKey(default=uuid.uuid4, on_delete=django.db.models.deletion.CASCADE, to='patient.patient'),
        ),
        migrations.AddField(
            model_name='checkup',
            name='prescription_id',
            field=models.ForeignKey(default=uuid.uuid4, on_delete=django.db.models.deletion.CASCADE, to='prescription.prescription'),
        ),
    ]
