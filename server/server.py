# -*- coding: utf-8 -*-
"""
Created on Thu Jan 14 20:21:06 2021

@author: Riya Aggarwal
"""

from flask import Flask, request, jsonify, render_template
#import server.util as util  #replace this by import util for running locally
import util

app = Flask(__name__, static_url_path="/client", static_folder='../client', template_folder="../client")

@app.route('/', methods=['GET'])
def index():
    if request.method=="GET":
        return render_template("app.htm")

@app.route('/predict_loan_status', methods=['POST'])
def predict_loan_status():
    married = request.form['married']
    dependents = request.form['dependents']
    education = request.form['education']
    self_employed = request.form['self_employed']
    applicantincome = int(request.form['applicantincome'])
    coapplicantincome = float(request.form['coapplicantincome'])
    loanamount = float(request.form['loanamount'])
    loan_amount_term = float(request.form['loan_amount_term'])
    credit_history = request.form['credit_history']
    property_area = request.form['property_area']
    
    response = jsonify({
        'loan_status_prediction': util.get_loan_status(married, dependents, education, self_employed, applicantincome,
                                                       coapplicantincome, loanamount, loan_amount_term, credit_history,
                                                       property_area)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == "__main__":
    print("Starting Python Flask Server For Loan Status Prediction...")
    app.run(debug=True)
