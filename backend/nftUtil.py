"""
BitBird utilities.
"""
import os
import pymongo
from dotenv import load_dotenv

load_dotenv()


######################################## GLOBAL VARIABLES ########################################
# Get the DATABASE_CONNECTION_STRING from the environment (.env or Heroku config)
_DATABASE_CONNECTION_STRING = os.getenv("DATABASE_CONNECTION_STRING")

# The port for the localhost database.  Only relevant if DATABASE_CONNECTION_STRING is an empty string or None.
_DATABASE_LOCAL_PORT = 27017

# Mongo names
_MONGO_COLLECTION_NAME = "BitBirds"
_MONGO_DATABASE_NAME = "BitBirds"


def _GetMongoClient():
    """
    Returns the mongoDB client.
    """
    if _DATABASE_CONNECTION_STRING:
        # Atlas
        return pymongo.MongoClient(_DATABASE_CONNECTION_STRING)

    # localhost
    return pymongo.MongoClient("localhost", _DATABASE_LOCAL_PORT)


def _GetMongoDb():
    """
    Returns a handle to the mongoDB
    """
    with _GetMongoClient() as client:
        return client[_MONGO_DATABASE_NAME]


# Database Handle
_DB = _GetMongoDb()


################################ PUBLIC FUNCTIONS ##############################
def GetImageBinaryString(tokenId, mustBeExposable=True):
    """
    This will retrieve the imageBinaryString from the database.
      1. Then you can display the imageBinaryString as a png file on a web page:
         https://newbedev.com/displaying-a-byte-array-as-an-image-using-javascript
         https://stackoverflow.com/questions/20756042/how-to-display-an-image-stored-as-byte-array-in-html-javascript
      2. Or you can turn the binary string into a PIL image:
           from PIL import Image
           image = Image.open(io.BytesIO(imageBinaryString))
           image.show()
      3. Or you can save it as an actual .png file:
           with open(str(tokenId) + '.png', 'wb') as f:
             f.write(imageBinaryString)
    """
    # Get the document.
    doc = _DB[_MONGO_COLLECTION_NAME].find_one({"_id": tokenId})

    if doc is None:
        # The tokenId is not in the database.
        return None

    if mustBeExposable and not doc["is_exposable"]:
        # The tokenId is not exposable.
        return None

    # Return the image.
    return doc["image_binary_string"]


def GetMetadata(tokenId, mustBeExposable=True):
    """
    Get the metadata.
    """
    # Get the document.
    doc = _DB[_MONGO_COLLECTION_NAME].find_one({"_id": tokenId})

    if doc is None:
        # The tokenId is not in the database.
        return None

    if mustBeExposable and not doc["is_exposable"]:
        # The tokenId is not exposable.
        return None

    # Return the metadata.
    return {"name": doc["name"], "image": doc["image"], "description": "This is a " + doc["type"] + " bird with a rarity level of " + doc["rarity"], "type": doc["type"], "rarity": doc["rarity"]}


def InsertOneDocument(document):
    """
    Insert the document into the collection.
    """
    _DB[_MONGO_COLLECTION_NAME].insert_one(document)


def PreProcessing(outputFolderNames):
    """
    Drop the database and remove any existing images and metadata in outputFolderNames.
    """
    # Drop _MONGO_DATABASE_NAME
    with _GetMongoClient() as client:
        if _MONGO_DATABASE_NAME in client.list_database_names():
            client.drop_database(_MONGO_DATABASE_NAME)

    # Remove existing images and metadata.
    for folderName in outputFolderNames:
        if not os.path.exists(folderName):
            os.makedirs(folderName)
        for file in os.scandir(folderName):
            os.remove(file.path)


"""
BitBird utilities.
"""
import os
import pymongo
from dotenv import load_dotenv

load_dotenv()


######################################## GLOBAL VARIABLES ########################################
# Get the DATABASE_CONNECTION_STRING from the environment (.env or Heroku config)
_DATABASE_CONNECTION_STRING = os.getenv("DATABASE_CONNECTION_STRING")

# The port for the localhost database.  Only relevant if DATABASE_CONNECTION_STRING is an empty string or None.
_DATABASE_LOCAL_PORT = 27017

# Mongo names
_MONGO_COLLECTION_NAME = "BitBirds"
_MONGO_DATABASE_NAME = "BitBirds"


def _GetMongoClient():
    """
    Returns the mongoDB client.
    """
    if _DATABASE_CONNECTION_STRING:
        # Atlas
        return pymongo.MongoClient(_DATABASE_CONNECTION_STRING)

    # localhost
    return pymongo.MongoClient("localhost", _DATABASE_LOCAL_PORT)


def _GetMongoDb():
    """
    Returns a handle to the mongoDB
    """
    with _GetMongoClient() as client:
        return client[_MONGO_DATABASE_NAME]


# Database Handle
_DB = _GetMongoDb()


################################ PUBLIC FUNCTIONS ##############################
def GetImageBinaryString(tokenId, mustBeExposable=True):
    """
    This will retrieve the imageBinaryString from the database.
      1. Then you can display the imageBinaryString as a png file on a web page:
         https://newbedev.com/displaying-a-byte-array-as-an-image-using-javascript
         https://stackoverflow.com/questions/20756042/how-to-display-an-image-stored-as-byte-array-in-html-javascript
      2. Or you can turn the binary string into a PIL image:
           from PIL import Image
           image = Image.open(io.BytesIO(imageBinaryString))
           image.show()
      3. Or you can save it as an actual .png file:
           with open(str(tokenId) + '.png', 'wb') as f:
             f.write(imageBinaryString)
    """
    # Get the document.
    doc = _DB[_MONGO_COLLECTION_NAME].find_one({"_id": tokenId})

    if doc is None:
        # The tokenId is not in the database.
        return None

    if mustBeExposable and not doc["is_exposable"]:
        # The tokenId is not exposable.
        return None

    # Return the image.
    return doc["image_binary_string"]


def GetMetadata(tokenId, mustBeExposable=True):
    """
    Get the metadata.
    """
    # Get the document.
    doc = _DB[_MONGO_COLLECTION_NAME].find_one({"_id": tokenId})

    if doc is None:
        # The tokenId is not in the database.
        return None

    if mustBeExposable and not doc["is_exposable"]:
        # The tokenId is not exposable.
        return None

    # Return the metadata.
    return {"name": doc["name"], "image": doc["image"], "description": "This is a " + doc["type"] + " bird with a rarity level of " + doc["rarity"], "type": doc["type"], "rarity": doc["rarity"]}


def InsertOneDocument(document):
    """
    Insert the document into the collection.
    """
    _DB[_MONGO_COLLECTION_NAME].insert_one(document)


def PreProcessing(outputFolderNames):
    """
    Drop the database and remove any existing images and metadata in outputFolderNames.
    """
    # Drop _MONGO_DATABASE_NAME
    with _GetMongoClient() as client:
        if _MONGO_DATABASE_NAME in client.list_database_names():
            client.drop_database(_MONGO_DATABASE_NAME)

    # Remove existing images and metadata.
    for folderName in outputFolderNames:
        if not os.path.exists(folderName):
            os.makedirs(folderName)
        for file in os.scandir(folderName):
            os.remove(file.path)
