from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    # TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('', views.getRoutes),

    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('create_group/', views.CryptoGroupView.as_view(), name='create_group'),
    path('group_members/', views.getGroupsMembers),
    path('join_group/',views.CryptoJoinGroupView.as_view(), name='join_room'),
    path('difference/', views.CryptoBiggestProfitLossGet, name='difference'),
    path('actual_best/', views.CryptoBiggestProfitLossAllDataBestGet, name='actual_best'),
]