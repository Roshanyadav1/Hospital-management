# Generated by Django 4.1.12 on 2023-11-16 10:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('appointment', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='disease_id',
            new_name='disease',
        ),
        migrations.RenameField(
            model_name='appointment',
            old_name='doctor_id',
            new_name='doctor',
        ),
        migrations.RenameField(
            model_name='appointment',
            old_name='patient_id',
            new_name='patient',
        ),
    ]
