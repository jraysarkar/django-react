from django.contrib import admin
from .models import Attack_data, Attack_data3

#admin.site.register(Attack_data)
#admin.site.register(attacker_table)

@admin.register(Attack_data3)
class Attack_data3Model(admin.ModelAdmin):
    list_filter = ('attack_asn', 'attack_city', 'attack_country', 'attack_country_code', 'attack_ip', 'attack_isp', 'attack_lat', 'attack_lon', 'attack_region_name', 'attack_threat_class', 'attack_timestamp', 'attack_timezone', 'attack_zip', 'data_input_timestamp', 'data_source_id', 'data_source_type', 'attack_threat_type', 'org_id', 'org_location', 'target_os', 'target_city', 'target_country', 'target_id', 'target_ip', 'target_mac_address', 'target_region', 'target_status', 'target_type', 'is_inside_threat', 'attack_os', 'attack_threat_severity', 'packet_id')
    list_display = ('attack_asn', 'attack_city', 'attack_country', 'attack_country_code', 'attack_ip', 'attack_isp', 'attack_lat', 'attack_lon', 'attack_region_name', 'attack_threat_class', 'attack_timestamp', 'attack_timezone', 'attack_zip', 'data_input_timestamp', 'data_source_id', 'data_source_type', 'attack_threat_type', 'org_id', 'org_location', 'target_os', 'target_city', 'target_country', 'target_id', 'target_ip', 'target_mac_address', 'target_region', 'target_status', 'target_type', 'is_inside_threat', 'attack_os', 'attack_threat_severity', 'packet_id')