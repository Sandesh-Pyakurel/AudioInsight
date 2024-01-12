import whisper

def convert_text(audio):
    model = whisper.load_model("base")
    print('converting ...')
    result = model.transcribe(audio)
    print('conversion completed!!')
    return result["text"]

