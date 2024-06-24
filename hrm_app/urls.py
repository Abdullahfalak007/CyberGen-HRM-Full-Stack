from django.urls import path
from . import views

urlpatterns = [
    path('', views.hrm_jobs, name='hrm jobs'),
]
