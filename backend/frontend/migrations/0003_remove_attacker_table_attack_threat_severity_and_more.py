# Generated by Django 4.0.1 on 2022-01-11 06:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0002_attacker_table'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='attacker_table',
            name='attack_threat_severity',
        ),
        migrations.RemoveField(
            model_name='attacker_table',
            name='target_os',
        ),
    ]
