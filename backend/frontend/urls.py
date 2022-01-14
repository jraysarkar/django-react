from django.urls import path
from . import views
from .views import Attack_data_count, Attack_data_count, attacker_table_list, Attack_data2_list, attack_data3_list, data_count

urlpatterns = [
    path('', views.index),
    path('attack/', Attack_data_count),
    path('attacker/', attacker_table_list),
    path('attacker2/', Attack_data2_list),
    path('query/', attack_data3_list)
]


