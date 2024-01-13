import openai

openai.api_key = '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'

def get_content(prompt, model="gpt-3.5-turbo"):
    print("json creating ....")
    messages = [{"role": "user", "content": prompt}]
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=0,
    )
    print('json created!!')
    return response.choices[0].message["content"]