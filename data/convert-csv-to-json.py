import csv

def convert_csv_to_js_format(csv_file_path):
    data = []
    with open(csv_file_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            # Create a formatted string for each row dictionary
            formatted_row = f"{{ rank: {row['rank']}, team: '{row['team']}', score: {row['score']} }}"
            data.append(formatted_row)
    
    # Join all formatted rows into a single string with array format
    formatted_data = '[\n        ' + ',\n        '.join(data) + ',\n ]'
    return formatted_data

# Example usage
csv_path = 'scores-ps-1.csv'
js_text = convert_csv_to_js_format(csv_path)
print(js_text)
with open('scores-ps-1.txt', 'w') as file:
    file.write(js_text)
