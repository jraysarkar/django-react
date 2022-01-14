from statistics import mode
from django.db import models




# Create your models here.

class Attack_data(models.Model):
    id = models.UUIDField(primary_key=True)
    attack_asn = models.TextField(max_length=100)
    attack_city = models.TextField(max_length=100)
    attack_country= models.TextField(max_length=100)
    attack_country_code = models.TextField(max_length=100)
    attack_ip = models.TextField()
    attack_isp = models.TextField(max_length=100)
    attack_lat = models.TextField(max_length=100) 
    attack_lon = models.TextField(max_length=100)
    attack_region_name = models.TextField(max_length=100)
    attack_threat_class = models.TextField(max_length=100)
    attack_timestamp = models.TextField()
    attack_timezone = models.TextField(max_length=100)
    attack_zip = models.TextField()
    data_input_timestamp = models.TextField()
    data_source_id = models.TextField()
    data_source_type = models.TextField()
    attack_threat_type= models.TextField(max_length=100)
    org_id = models.TextField(max_length=100)
    org_location = models.TextField(max_length=100)
    target_os = models.TextField(max_length=100)
    target_city = models.TextField(max_length=100)
    target_country = models.TextField(max_length=100)
    target_id = models.TextField()
    target_ip = models.TextField()
    target_mac_address = models.TextField()
    target_region = models.TextField(max_length=100)
    target_status = models.TextField(max_length=100)
    target_type = models.TextField(max_length=100)
    is_inside_threat = models.TextField(max_length=100)
    attack_os = models.TextField(max_length=100)
    attack_threat_severity = models.TextField(max_length=100)
    packet_id = models.TextField(max_length=100)

    class Meta:
        db_table ='attack_event'


class attacker_table(models.Model):
    attack_event_id = models.IntegerField(primary_key=True)
    attack_asn = models.TextField(max_length=100)
    attack_city = models.TextField(max_length=100)
    # attack_country= models.TextField(max_length=100)
    attack_country_code = models.TextField(max_length=100)
    # attack_ip = models.TextField()
    attack_isp = models.TextField(max_length=100)
    attack_lat = models.TextField(max_length=100) 
    attack_log = models.TextField(max_length=100)
    attack_region_name = models.TextField(max_length=100)
    # attack_threat_class = models.TextField(max_length=100)
    # attack_timestamp = models.TextField()
    # attack_timezone = models.TextField(max_length=100)
    attack_zip = models.TextField()
    # data_input_timestamp = models.TextField()
    # data_source_id = models.TextField()
    # data_source_type = models.TextField()
    # attack_threat_type= models.TextField(max_length=100)
    org = models.TextField(max_length=100)
    # org_location = models.TextField(max_length=100)
    #target_os = models.TextField(max_length=100)
    # target_city = models.TextField(max_length=100)
    target_country = models.TextField(max_length=100)
    target_id = models.TextField()
    target_ip = models.TextField()
    # target_mac_address = models.TextField()
    target_region = models.TextField(max_length=100)
    target_status = models.TextField(max_length=100)
    target_type = models.TextField(max_length=100)
    # is_inside_threat = models.TextField(max_length=100)
    # attack_os = models.TextField(max_length=100)
    #attack_threat_severity = models.TextField(max_length=100)
    event_detection_type = models.TextField(max_length=100)

    class Meta:
        db_table ='attacker_table'


class Attack_data3(models.Model):
    attack_asn = models.TextField(max_length=100)
    attack_city = models.TextField(max_length=100)
    attack_country = models.TextField(max_length=100)
    attack_country_code = models.TextField(max_length=100)
    attack_ip = models.TextField()
    attack_isp = models.TextField(max_length=100)
    attack_lat = models.TextField(max_length=100) 
    attack_lon = models.TextField(max_length=100)
    attack_region_name = models.TextField(max_length=100)
    attack_threat_class = models.TextField(max_length=100)
    attack_timestamp = models.DateTimeField()
    attack_timezone = models.TextField(max_length=100)
    attack_zip = models.TextField()
    data_input_timestamp = models.DateTimeField()
    data_source_id = models.TextField()
    data_source_type = models.TextField()
    attack_threat_type= models.TextField(max_length=100)
    org_id = models.TextField(max_length=100)
    org_location = models.TextField(max_length=100)
    target_os = models.TextField(max_length=100)
    target_city = models.TextField(max_length=100)
    target_country = models.TextField(max_length=100)
    target_id = models.TextField()
    target_ip = models.TextField()
    target_mac_address = models.TextField()
    target_region = models.TextField(max_length=100)
    target_status = models.TextField(max_length=100)
    target_type = models.TextField(max_length=100)
    is_inside_threat = models.TextField(max_length=100)
    attack_os = models.TextField(max_length=100)
    attack_threat_severity = models.TextField(max_length=100)
    packet_id = models.TextField()

class Meta:
        db_table ='frontend_attack_data'

class data222(models.Model):
  attack_threat_class =  models.TextField(max_length=100)
    
class Meta:
    db_table ='attack_event'