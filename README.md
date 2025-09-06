# Breast Cancer Prediction Website

## Overview
This project is a simple web-based Breast Cancer Prediction System.  
It is designed to help with early detection and provide decision support.  
The application has two main features:
1. **Symptom Checker** – Users can enter their symptoms to check if an MRI scan is recommended.  
2. **MRI Report Analyzer** – Users can manually enter MRI parameters to predict if the tumor is **benign** or **malignant**.

---

## Features
- Symptom-based prediction (MRI needed or not)  
- MRI report-based prediction (Benign / Malignant)  
- User-friendly interface  
- Machine Learning model integrated  
- No database required  

---

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Python (Flask)  
- **Machine Learning:** scikit-learn, pandas, numpy  

---

## Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/Sankar018/Breast_Cancer_Prediction.git
   cd Breast_Cancer_Prediction
2. Install the required packages:
    pip install -r requirements.txt
3. Run the application:
    python app.py
4. Open your browser and go to:
    http://127.0.0.1:5000/

## Project Structure

Breast_Cancer_Prediction/
│-- Model_Training/ # Trained ML models
│-- static/         # CSS, JS, Images
│-- templates/      # HTML files
│-- app.py          # Main application
│-- data.csv        # Dataset
│-- README.md
│-- requirements.txt
│-- Smili.pkl

## Author

## Authors
- **Sankar Bhunia** – [GitHub: Sankar018](https://github.com/Sankar018)  
- **[Your Teammate's Name]** – [GitHub: teammate_username](https://github.com/miliparua18)

## Disclaimer

This project is for educational purposes only and should not be used as a replacement for professional medical advice.

---

Do you want me to also make a **ready `requirements.txt` file** (with Flask, scikit-learn, numpy, pandas, joblib) so anyone can run your project easily?