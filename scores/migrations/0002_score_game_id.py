# Generated by Django 3.0.7 on 2020-08-25 05:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scores', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='score',
            name='game_id',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
