from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes and origins

# Initialize the pipeline once when the server starts
qa_pipeline = pipeline("question-answering", model="Cheapcoder/my_awesome_qa_model")

@app.route('/qa', methods=['POST'])
def qa():
    data = request.json
    question = data.get('question')
    context = data.get('context')

    if not question or not context:
        return jsonify({"error": "Both 'question' and 'context' are required fields."}), 400

    result = qa_pipeline(question=question, context=context)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
