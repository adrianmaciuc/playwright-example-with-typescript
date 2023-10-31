import argparse
import os
import re
from datetime import datetime, timedelta
import shutil

def find_old_folders(n_days, directory):
    """
    Find folders in the specified directory that are older than n_days.
    
    Args:
        directory (str): The directory to search for folders.
        n_days (int): The number of days to determine which folders to delete.

    Returns:
        list: List of folder names older than n_days.
    """
    current_time = datetime.utcnow()
    folder_name_regex = re.compile(r'^\d{8}_\d{6}Z$')

    old_folders = []
    for entry in os.scandir(directory):
        if entry.is_dir() and re.match(folder_name_regex, entry.name):
            try:
                folder_date = datetime.strptime(entry.name, "%Y%m%d_%H%M%SZ")
                time_difference = current_time - folder_date
                if time_difference > timedelta(days=n_days):
                    old_folders.append(entry.name)
                else:
                    print(f"SKIPPED --- Folder '{entry.name}' is not older than {n_days}. It will not be deleted")
            except ValueError:
                print(f"SKIPPED --- Error parsing timestamp for folder '{entry.name}'. It will not be deleted.")
        else:
            print(f"SKIPPED --- Found folder/file with name '{entry.name}' that does not match the expected timestamp format. It will not be deleted.")

    return old_folders

def delete_folders(directory, folder_names):
    """
    Delete specified folders and their contents in the given directory.
    
    Args:
        directory (str): The directory containing the folders to delete.
        folder_names (list): List of folder names to delete.
    """
    for folder_name in folder_names:
        folder_path = os.path.join(directory, folder_name)
        try:
            shutil.rmtree(folder_path)
            print(f"DELETED --- Folder '{folder_name}' and its contents have been deleted.")
        except FileNotFoundError:
            print(f"Folder '{folder_name}' not found.")
        except Exception as e:
            print(f"Error deleting folder '{folder_name}': {e}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Delete old folders in a specified directory.")
    parser.add_argument("--n-days", type=int, required=True, help="Number of days (days older than current date) to determine which folders to delete.")
    parser.add_argument("--folder-name", type=str, required=True, help="Full path to the directory where reports are located.")
    args = parser.parse_args()

    old_folders = find_old_folders(args.n_days, args.folder_name)
    delete_folders(args.folder_name, old_folders)
