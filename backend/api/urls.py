from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.getTasks),
    path('add/', views.addTask),
]