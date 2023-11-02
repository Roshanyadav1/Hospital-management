# Generated by Django 4.1.12 on 2023-10-28 11:43

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('doctor', '__first__'),
        ('disease', '__first__'),
        ('prescription', '__first__'),
        ('appointment', '0001_initial'),
        ('patient', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='CheckUp',
            fields=[
                ('checkup_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('check_status', models.CharField(max_length=100)),
                ('next_appointment_date', models.DateField()),
                ('next_appointment_time', models.TimeField()),
                ('appointment_id', models.ForeignKey(default=uuid.uuid4, on_delete=django.db.models.deletion.CASCADE, to='appointment.appointment')),
                ('disease_id', models.ForeignKey(default=uuid.uuid4, on_delete=django.db.models.deletion.CASCADE, to='disease.disease')),
                ('doctor_id', models.ForeignKey(default=uuid.uuid4, on_delete=django.db.models.deletion.CASCADE, to='doctor.doctor')),
                ('patient_id', models.ForeignKey(default=uuid.uuid4, on_delete=django.db.models.deletion.CASCADE, to='patient.patient')),
                ('prescription_id', models.ForeignKey(default=uuid.uuid4, on_delete=django.db.models.deletion.CASCADE, to='prescription.prescription')),
            ],
        ),
    ]
