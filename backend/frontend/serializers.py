from rest_framework import serializers
from .models import Attack_data, attacker_table, Attack_data3, data222

class Attack_dataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attack_data
        fields = '__all__'

class attacker_tableSerializer(serializers.ModelSerializer):
     class Meta:
         model = Attack_data
         fields = '__all__'

class attack_data3Serializer(serializers.ModelSerializer):
    class Meta:
        model = Attack_data3
        fields = '__all__'

class dataSerializer(serializers.ModelSerializer):
    class Meta:
        model = data222
        fields = 'attack_threat_class'