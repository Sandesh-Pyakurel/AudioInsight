# Generated by Django 5.0.1 on 2024-01-13 09:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_audioinsight'),
    ]

    operations = [
        migrations.AddField(
            model_name='audioinsight',
            name='document',
            field=models.FileField(blank=True, null=True, upload_to='core/docs/files'),
        ),
    ]
