# Generated by Django 3.1.4 on 2021-11-07 09:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0003_member_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='dateOfBirth',
            field=models.CharField(max_length=225),
        ),
    ]
