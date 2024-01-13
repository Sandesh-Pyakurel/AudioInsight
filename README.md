# AudioInsight

AudioInsights is a powerful tool designed to transform audio input from various events such as meetings, lectures, speeches, etc., into formal and structured reports. The primary objective is to provide users with automated minutes for meetings, formal lecture notes, and more, utilizing cutting-edge technologies for audio transcription and document generation.

## Features

- **Audio Transcription with OpenAI's Whisper:** Leverage the advanced audio transcription capabilities of OpenAI's Whisper API to convert spoken words into written text accurately.

- **Django Backend:** The backend of AudioInsights is built using Django, a high-level Python web framework, ensuring robustness, security, and scalability.

- **React Frontend:** The frontend is developed using React, a popular JavaScript library for building user interfaces. This provides a seamless and interactive user experience.

- **GPT API for Document Generation:** Generate formal reports, meeting minutes, and lecture notes effortlessly with the GPT API, incorporating state-of-the-art natural language processing.

## Installation

To run AudioInsights locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/Sandesh-Pyakurel/AudioInsight.git
    ```

2. Navigate to the project's backend directory:

    ```bash
    cd AudioInsight/backend
    ```

3. Install dependencies and start server:

    ```bash
    pip install -r requirements.txt
    ```
    ```bash
    python3 manage.py migrate
    ```
    ```bash
    python3 manage.py runserver    
    ```

4. Navigate to the project's frontend directory:

    ```bash
    cd ../fend/fendui
    ```

5. Install dependencies:

    ```bash
    npm install
    ```
    ```bash
    npm start
    ```


6. Access the application at [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Upload the audio file of the event you want to transcribe and analyze.

2. The Whisper API will transcribe the audio content, converting it into written text.

3. Utilize the React-based frontend to navigate through the transcribed content.

4. Leverage the GPT API to generate formal reports, minutes, or lecture notes based on the transcribed audio.

