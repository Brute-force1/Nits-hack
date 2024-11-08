[8:23 pm, 8/11/2024] Yashraj Mishra Ece: import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt
from datetime import datetime, timedelta


time_intervals = [
    ('2023-11-07 08:00', '2023-11-07 09:00'),
    ('2023-11-07 12:00', '2023-11-07 13:00'),
    ('2023-11-07 14:30', '2023-11-07 15:00'),
    ('2023-11-07 20:00', '2023-11-07 21:00'),
    ('2023-11-08 08:30', '2023-11-08 09:30'),
    ('2023-11-08 14:00', '2023-11-08 15:00'),
    ('2023-11-08 19:30', '2023-11-08 20:00'),
    ('2023-11-08 22:00', '2023-11-08 23:00'),
]

def time_to_minutes(t):
    time_obj = datetime.strptime(t, "%Y-%m-%d %H:%…
[8:23 pm, 8/11/2024] Yashraj Mishra Ece: import pandas as pd
from datetime import datetime

target_usage = {
    'social': 120,  
    'productivity': 60, 
    'entertainment': 90  
}

def calculate_usage_duration(start_time, end_time):
    start = datetime.strptime(start_time, "%H:%M")
    end = datetime.strptime(end_time, "%H:%M")
    duration = (end - start).total_seconds() / 60
    return duration

usage_data = [
    ('08:00', '09:00', 'Instagram', 'social'),
    ('12:00', '13:00', 'Facebook', 'social'),
    ('14:00', '14:30', 'Slack', 'productivity'),
    ('09:00', '09:30', 'YouTube', 'entertainment'),
    ('10:00', '11:00', 'Trello', 'productivity'),
    ('15:00', '16:00', 'Netflix', 'entertainment')
]

processed_data = []

for start_time, end_time, app, category in usage_data:
    duration = calculate_usage_duration(start_time, end_time)
    processed_data.append({
        'app': app,
        'category': category,
        'start_time': start_time,
        'end_time': end_time,
        'duration_minutes': duration
    })

df = pd.DataFrame(processed_data)

total_usage = df.groupby(['app', 'category']).duration_minutes.sum().reset_index()

def convert_minutes_to_hours(minutes):
    hours = minutes // 60
    remaining_minutes = minutes % 60
    return hours, remaining_minutes


suggestions = []
for _, row in total_usage.iterrows():
    app = row['app']
    start_time = row['start_time']
    end_time = row['end_time']
    category = row['category']
    avg_usage = row['duration_minutes']
    target = target_usage.get(category, 0)
    
    if avg_usage > target:

        excess_hours, excess_minutes = convert_minutes_to_hours(avg_usage - target)
        suggestions.append(f"Consider reducing usage of {app} ({category}) during ({start_time}) - ({end_time}) by {excess_hours} hours and {excess_minutes} minutes.")
    elif avg_usage < target:
    
        deficit_hours, deficit_minutes = convert_minutes_to_hours(target - avg_usage)
        suggestions.append(f"Try to increase usage of {app} ({category}) during ({start_time}) - ({end_time}) by {deficit_hours} hours and {deficit_minutes} minutes.")

print("Personalized Usage Suggestions:")
for suggestion in suggestions:
    print("- " + suggestion)