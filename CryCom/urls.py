from django.contrib import admin
from django.urls import path
from CryCom import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('login/', views.login_page, name='login'),
    path('register/', views.register_page, name='register'),
    path('images/logo', views.logo, name='logo')
]
