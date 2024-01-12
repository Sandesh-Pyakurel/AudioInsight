import json

from audio_text import convert_text
from gpt_response import get_content
from generate_prompt import minute_prompt, lecture_prompt
from create_minute import create_minute


def audio_to_minute(audio):
    text = convert_text(audio)
    #print(text)
    prompt = minute_prompt() + text
    #print(prompt)
    response = get_content(prompt)
    #print(response)
    json_object = json.loads(response)
    #print(json_object)
    file_path = "documents/minute.docx"
    create_minute(file_path, json_object)
    return file_path

def select_convert(audio, type):
    if type == "meeting":
        return audio_to_minute(audio)

#audio = 'recordings/meeting.m4a'
#audio_to_minute(audio)
