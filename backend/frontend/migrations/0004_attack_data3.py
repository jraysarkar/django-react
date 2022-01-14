# Generated by Django 4.0 on 2022-01-12 05:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0003_remove_attacker_table_attack_threat_severity_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Attack_data3',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('attack_asn', models.TextField(max_length=100)),
                ('attack_city', models.TextField(max_length=100)),
                ('attack_country', models.TextField(max_length=100)),
                ('attack_country_code', models.TextField(max_length=100)),
                ('attack_ip', models.TextField()),
                ('attack_isp', models.TextField(max_length=100)),
                ('attack_lat', models.TextField(max_length=100)),
                ('attack_lon', models.TextField(max_length=100)),
                ('attack_region_name', models.TextField(max_length=100)),
                ('attack_threat_class', models.TextField(max_length=100)),
                ('attack_timestamp', models.DateTimeField()),
                ('attack_timezone', models.TextField(max_length=100)),
                ('attack_zip', models.TextField()),
                ('data_input_timestamp', models.DateTimeField()),
                ('data_source_id', models.TextField()),
                ('data_source_type', models.TextField()),
                ('attack_threat_type', models.TextField(max_length=100)),
                ('org_id', models.TextField(max_length=100)),
                ('org_location', models.TextField(max_length=100)),
                ('target_os', models.TextField(max_length=100)),
                ('target_city', models.TextField(max_length=100)),
                ('target_country', models.TextField(max_length=100)),
                ('target_id', models.TextField()),
                ('target_ip', models.TextField()),
                ('target_mac_address', models.TextField()),
                ('target_region', models.TextField(max_length=100)),
                ('target_status', models.TextField(max_length=100)),
                ('target_type', models.TextField(max_length=100)),
                ('is_inside_threat', models.TextField(max_length=100)),
                ('attack_os', models.TextField(max_length=100)),
                ('attack_threat_severity', models.TextField(max_length=100)),
                ('packet_id', models.TextField()),
            ],
        ),
    ]
