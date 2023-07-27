import pymongo
import json
from bson.binary import Binary
from bson.objectid import ObjectId
from bson.decimal128 import Decimal128
from datetime import datetime
import os
from bson.timestamp import Timestamp
import dateutil.parser
import base64
import logging

# Rest of the code remains the same...

# Configurations
MONGODB_URI = "mongodb+srv://kendogg:s3nNJwBtxaSqEArX@weedjournal.4xv4luz.mongodb.net/?retryWrites=true&w=majority"
EXPORT_PATH = "WeedJournal/data/json"

# Set up logging
logging.basicConfig(level=logging.INFO, format="%(levelname)s - %(message)s")

# Function to convert types
def convert_for_json(doc):
    doc_copy = {}

    for k, v in doc.items():
        if isinstance(v, Binary):  # Update the attribute check
            try:
                v = v.decode()
            except UnicodeDecodeError:
                v = base64.b64encode(v).decode()  # Convert binary to base64 string
        elif isinstance(v, ObjectId):
            v = str(v)
        elif isinstance(v, Decimal128):
            v = str(v)
        elif isinstance(v, Timestamp):
            v = str(v)
        elif isinstance(v, dict):
            # Recurse on values (for nested dictionaries)
            v = convert_for_json(v)

        doc_copy[k] = v

    return doc_copy


def export_mongodb_to_json(uri, export_path):
    try:
        client = pymongo.MongoClient(uri)
        client.admin.command('ping')  # Test the connection
 
        if not os.path.exists(export_path):
            os.makedirs(export_path)
        else:
            pass

        for db_name in client.list_database_names():
            db = client[db_name]

            for col_name in db.list_collection_names():
                col = db[col_name]

                docs = [convert_for_json(doc) for doc in col.find()]

                file_name = f'{export_path}/{db_name}_{col_name}.json'
                with open(file_name, 'w+') as f:
                    json.dump(docs, f, indent=2, default=str)  # Use default=str for custom serialization

        logging.info("Export complete!")

    except pymongo.errors.ConnectionFailure as e:
        logging.error("Connection failed:", e)
    except Exception as e:
        logging.error("An unexpected error occurred:", e)

if __name__ == "__main__":
    export_mongodb_to_json(MONGODB_URI, EXPORT_PATH)
