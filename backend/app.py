"""
It contains the methods that are called by the front-end.
"""
import io
import json
import nftUtil

from flask import Flask, request, jsonify
from flask.helpers import make_response, send_file, send_from_directory
from flask_cors import CORS, cross_origin

# ----------- test route ---------------------
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
# -------------- end of test route ------------------

# front-end folder name
# connect flask to front end
# do not need static_url_path
app = Flask(__name__, static_folder="../frontend/build", static_url_path="")
CORS(app)


@app.route("/images/<tokenId>", methods=["GET"])
def GetImage(tokenId):
    """
    This will retrieve the imageBinaryString from the database.
    """
    if isinstance(tokenId, str):
        tokenId = int(tokenId.split(".")[0])

    imageBinaryString = nftUtil.GetImageBinaryString(tokenId)
    if imageBinaryString is None:
        return jsonify(None)
    mimetype = "image/png"
    attachment_filename = str(tokenId) + ".png"
    return send_file(io.BytesIO(imageBinaryString), mimetype=mimetype, attachment_filename=attachment_filename)


@app.route("/metadata/<tokenIdJson>", methods=["GET"])
def GetMetadata(tokenIdJson):
    """
    Find the metadata associated with the input tokenIdJson.
      'tokenIdJson' : The sequential integer id (1, 2, 3, ...)
    """
    if isinstance(tokenIdJson, str):
        tokenIdJson = int(tokenIdJson.split(".")[0])
    metadata = nftUtil.GetMetadata(tokenIdJson)
    return jsonify(metadata)


@app.route("/test-metadata/<token_id>", methods=["GET"])
def GetMetadata2(token_id):
    """
    Get the metadata.
    """
    # Get the document.
    doc = _DB["TestMetadata"].find_one({"token_id": token_id})

    if doc is None:
        # Error, the token_id is not in the database.
        return None

    # Return the metadata.
    return {"description": doc["description"], "image": doc["image"], "name": doc["name"], "rarity": doc["rarity"], "type": doc["type"]}


# generate html file on / route
@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run()
