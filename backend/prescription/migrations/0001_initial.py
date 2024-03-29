# Generated by Django 4.1.12 on 2023-11-23 05:52

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('disease', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Prescription',
            fields=[
                ('prescription_id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('medication_name', models.CharField(max_length=255)),
                ('dosage', models.CharField(max_length=10)),
                ('frequency', models.CharField(max_length=50)),
                ('route', models.CharField(choices=[('Tablet', 'Tablet'), ('Oral', 'Oral'), ('Intravenous', 'Intravenous'), ('Intramuscular', 'Intramuscular'), ('Subcutaneous', 'Subcutaneous'), ('Topical', 'Topical'), ('Inhalation', 'Inhalation')], max_length=50)),
                ('duration', models.CharField(max_length=50)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('update_at', models.DateTimeField(auto_now=True)),
                ('disease', models.ForeignKey(default=uuid.uuid4, on_delete=django.db.models.deletion.CASCADE, to='disease.disease')),
            ],
        ),
    ]
