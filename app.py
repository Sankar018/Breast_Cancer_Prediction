from flask import Flask,request,render_template
import pickle
import numpy as np
app=Flask(__name__)
with open('Smili.pkl','rb') as model_file:
	ml_model=pickle.load(model_file)
@app.route("/MRI_Analysis")
def index():
	return render_template('MRI_Analysis.html')

@app.route("/")
def index1():
	return render_template('homepage.html')

@app.route("/symp")
def index2():
	return render_template('Symptom_check.html')

@app.route("/self")
def index3():
	return render_template('Self_Observe.html')

@app.route("/Need_MRI")
def index4():
	return render_template('Need_MRI.html')

@app.route("/M")
def index5():
	return render_template("Malignent.html")

@app.route("/NM")
def index6():
	return render_template("NotMalignent.html")

@app.route("/process",methods=['GET','POST'])
def process():
	if request.method=='POST':
		#Extract input feature from form
		
		features=[
			float(request.form['radius_mean']),
			float(request.form['texture_mean']),
			float(request.form['perimeter_mean']),
			float(request.form['area_mean']),
			float(request.form['smoothness_mean']),
			float(request.form['compactness_mean']),
			float(request.form['concavity_mean']),
			float(request.form['concave points_mean']),
			float(request.form['symmetry_mean']),
			float(request.form['fractal_dimension_mean']),
			float(request.form['radius_se']),
			float(request.form['texture_se']),
			float(request.form['perimeter_se']),
			float(request.form['area_se']),
			float(request.form['smoothness_se']),
			float(request.form['compactness_se']),
			float(request.form['concavity_se']),
			float(request.form['concave points_se']),
			float(request.form['symmetry_se']),
			float(request.form['fractal_dimension_se']),
			float(request.form['radius_worst']),
			float(request.form['texture_worst']),
			float(request.form['perimeter_worst']),
			float(request.form['area_worst']),
			float(request.form['smoothness_worst']),
			float(request.form['compactness_worst']),
			float(request.form['concavity_worst']),
			float(request.form['concave points_worst']),
			float(request.form['symmetry_worst']),
			float(request.form['fractal_dimension_worst'])
		]

		#Ensure input is in correct shape
		input_data = np.array(features).reshape(1, -1)
		#model prediction
		result=ml_model.predict([features])[0]
		diagnosis="Malignent" if result==1 else "Not Malignent"
		print("Predicted Outcome=",diagnosis)
		if result==1:
			return render_template("Malignent.html")
		else:
			return render_template("NotMalignent.html")
if __name__=='__main__':
	app.run(debug=True)