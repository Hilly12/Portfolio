# Generated by Django 3.0.7 on 2020-07-19 18:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0006_auto_20200719_0157'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='content',
        ),
        migrations.RemoveField(
            model_name='project',
            name='date',
        ),
        migrations.RemoveField(
            model_name='project',
            name='imgSrc',
        ),
        migrations.RemoveField(
            model_name='project',
            name='pretext',
        ),
        migrations.RemoveField(
            model_name='project',
            name='timespan',
        ),
    ]
