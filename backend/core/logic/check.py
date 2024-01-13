import json

from audio_text import convert_text
from gpt_response import get_content
from generate_prompt import minute_prompt, speech_prompt, speech_prompt2, lecture_prompt

from create_minute import create_minute
from create_speech_document import create_speech_document
from create_lecture_note import create_lecture_note

def audio_to_minute(audio):
    text = convert_text(audio)
    prompt = minute_prompt() + text
    response = get_content(prompt)
    json_object = json.loads(response)
    file_path = "documents/minute.docx"
    create_minute(file_path, json_object)
    return file_path


def audio_to_speech_document(audio):
    text = convert_text(audio)
    prompt = speech_prompt() + text
    prompt2 = speech_prompt2() + text
    response = get_content(prompt)
    response2 = get_content(prompt2)
    json_object = json.loads(response)
    json_object2 = json.loads(response2)
    file_path = "documents/speech_document.docx"
    create_speech_document(file_path, json_object, json_object2)
    return file_path


def audio_to_lecture_note(audio):
    text = convert_text(audio)
    prompt = lecture_prompt() + text
    response = get_content(prompt)
    json_object = json.loads(response)
    file_path = "documents/lecture_note.docx"
    create_speech_document(file_path, json_object)
    return file_path


def select_convert(audio, type):
    if type == "meeting":
        return audio_to_minute(audio)
    if type == "speech":
        return audio_to_speech_document(audio)
    if type == "lecture":
        return audio_to_lecture_note(audio)


#audio = 'recordings/speech.m4a'
#type = 'speech'
#path_of_document = select_convert(audio, type)