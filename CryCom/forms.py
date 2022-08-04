from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms


class CreateUserForm(UserCreationForm):
    first_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': "First name"}))
    last_name = forms.CharField(widget=forms.TextInput(attrs={'placeholder': "Last name"}))
    email = forms.CharField(widget=forms.TextInput(attrs={'placeholder': "Email"}))
    password1 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': "Password"}))
    password2 = forms.CharField(widget=forms.PasswordInput(attrs={'placeholder': "Password"}))

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'password1', 'password2']
