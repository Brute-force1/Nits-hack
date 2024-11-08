import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt
from datetime import datetime, timedelta



# Sample data: Time intervals (start to end)
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

# Function to convert time string to minutes since midnight
def time_to_minutes(t):
    time_obj = datetime.strptime(t, "%Y-%m-%d %H:%M")
    return time_obj.hour * 60 + time_obj.minute

# Extract start, end, and calculate the midpoint in minutes
midpoints = []
for start, end in time_intervals:
    start_minutes = time_to_minutes(start)
    end_minutes = time_to_minutes(end)
    midpoint_minutes = (start_minutes + end_minutes) / 2
    midpoints.append(midpoint_minutes)

# Convert midpoints into a DataFrame for clustering
df = pd.DataFrame({'midpoint_minutes': midpoints})

# Reshape the data for KMeans (KMeans expects 2D array)
X = df.values.reshape(-1, 1)

# Normalize the data
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Apply KMeans clustering (let's assume we want 3 clusters)
kmeans = KMeans(n_clusters=3, random_state=42)
df['cluster'] = kmeans.fit_predict(X_scaled)

# Visualize the clusters
plt.scatter(df['midpoint_minutes'], np.zeros_like(df['midpoint_minutes']), c=df['cluster'], cmap='viridis')
plt.xlabel('Midpoint (Minutes Since Midnight)')
plt.title('KMeans Clustering of App Usage Midpoints')
plt.show()

# Get cluster centroids (preferred times)
centroids = kmeans.cluster_centers_

# Convert centroids back to time format (time interval)
preferred_intervals = []
for centroid in centroids:
    # Convert the centroid from minutes back to hours and minutes
    centroid_minutes = scaler.inverse_transform([centroid])[0][0]
    start_hour = int(centroid_minutes // 60)
    start_minute = int(centroid_minutes % 60)
    
    # Use a fixed interval duration, e.g., 1 hour (or the average duration of the usage periods)
    duration_minutes = 60  # Assume each usage window is about 1 hour, adjust if needed
    
    # Calculate the start and end time of the interval
    start_time = datetime.strptime(f'{start_hour:02d}:{start_minute:02d}', "%H:%M")
    end_time = start_time + timedelta(minutes=duration_minutes)
    
    if()

    preferred_intervals.append(f"from {start_time.strftime('%H:%M')} to {end_time.strftime('%H:%M')}")

print("Preferred usage intervals (centroids):", preferred_intervals)

import pandas as pd
from datetime import datetime

# Example target usage (in minutes per day for each app category)
target_usage = {
    'social': 120,   # 2 hours per day
    'productivity': 60,  # 1 hour per day
    'entertainment': 90  # 1.5 hours per day
}

# Function to calculate the difference between two timestamps in minutes
def calculate_usage_duration(start_time, end_time):
    # Convert timestamps to datetime objects
    start = datetime.strptime(start_time, "%H:%M")
    end = datetime.strptime(end_time, "%H:%M")
    # Calculate duration in minutes
    duration = (end - start).total_seconds() / 60
    return duration

# Sample input data: list of usage sessions (start time, end time, app, category)
usage_data = [
    ('08:00', '09:00', 'Instagram', 'social'),
    ('12:00', '13:00', 'Facebook', 'social'),
    ('14:00', '14:30', 'Slack', 'productivity'),
    ('09:00', '09:30', 'YouTube', 'entertainment'),
    ('10:00', '11:00', 'Trello', 'productivity'),
    ('15:00', '16:00', 'Netflix', 'entertainment')
]

# Initialize a list to hold processed data
processed_data = []

# Process each usage session and calculate the total minutes used
for start_time, end_time, app, category in usage_data:
    duration = calculate_usage_duration(start_time, end_time)
    processed_data.append({
        'app': app,
        'category': category,
        'start_time': start_time,
        'end_time': end_time,
        'duration_minutes': duration
    })

# Convert the processed data into a DataFrame
df = pd.DataFrame(processed_data)

# Calculate total usage per app category
total_usage = df.groupby(['app', 'category']).duration_minutes.sum().reset_index()

# Function to convert minutes into hours and minutes
def convert_minutes_to_hours(minutes):
    hours = minutes // 60
    remaining_minutes = minutes % 60
    return hours, remaining_minutes

# Analyze usage and create suggestions based on target usage
suggestions = []
for _, row in total_usage.iterrows():
    app = row['app']
    start_time = row['start_time']
    end_time = row['end_time']
    category = row['category']
    avg_usage = row['duration_minutes']
    target = target_usage.get(category, 0)
    
    # Determine if usage is above or below target
    if avg_usage > target:
        # Convert excess usage into hours and minutes
        excess_hours, excess_minutes = convert_minutes_to_hours(avg_usage - target)
        suggestions.append(f"Consider reducing usage of {app} ({category}) during ({start_time}) - ({end_time}) by {excess_hours} hours and {excess_minutes} minutes.")
    elif avg_usage < target:
        # Convert required usage into hours and minutes
        deficit_hours, deficit_minutes = convert_minutes_to_hours(target - avg_usage)
        suggestions.append(f"Try to increase usage of {app} ({category}) during ({start_time}) - ({end_time}) by {deficit_hours} hours and {deficit_minutes} minutes.")

# Display the suggestions
print("Personalized Usage Suggestions:")
for suggestion in suggestions:
    print("- " + suggestion)
