from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

#user
class User(AbstractUser):
  pass
#subject
class Subject(models.Model):
  sub_name = models.CharField(max_length=225)
  user = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self) -> str:
    return self.sub_name
