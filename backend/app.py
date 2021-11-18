'''
It contains the methods that are called by the front-end.
'''
import io
import json
import nftUtil

from flask import Flask, request, jsonify
from flask.helpers import make_response, send_file, send_from_directory
from flask_cors import CORS, cross_origin

# front-end folder name
# connect flask to front end
# do not need static_url_path
app = Flask(__name__, static_folder="../frontend/build", static_url_path='')
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

# generate html file on / route
@app.route('/')
@cross_origin()
def serve():
  return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
  app.run()
