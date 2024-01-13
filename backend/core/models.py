from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

#user
class User(AbstractUser):
    pass


class AudioInsight(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=64)
    audio = models.FileField(upload_to='core/audio/files')
    document = models.FileField(upload_to='core/docs/files')
    doc_name = models.CharField(max_length=64)