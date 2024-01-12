from audio_text import convert_text
from gpt_response import get_content
from generate_prompt import minute_prompt, lecture_prompt

audio = 'recordings/biology.m4a'
text = convert_text(audio)
#print(text)


#prompt = minute_prompt() + text
prompt = lecture_prompt() + text


#print(prompt)

response = get_content(prompt)
print(response)
