import whisper

def convert_text(audio):
    model = whisper.load_model("base")
    print('converting audio to text...')
    result = model.transcribe(audio)
    print('Text conversion completed!!')
    return result["text"]

