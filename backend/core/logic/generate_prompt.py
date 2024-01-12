def minute_prompt():
    return """
    I have a meeting discussion in text. I want to convert that discussion into minute. 
    If not found, return empty value in below json list and dictionary.  Just return json format reply without any other note and content. The format type is given below: 
    json = { 
    Company name: ,
    Institute of: ,
    address: ,
    POB: ,
    Ph. no.: ,
    Email: ,
    Date of meeting: , 
    [starting text: The minute of the {nth} regular meeting of {organization} held on {date} at {time} presided by the {somebody} in {location},  ] -> add more if necessary
    present members:[if any list],
    present position:[if any list],
    absent members :[if any list],
    absent position:[if any list],
    [
    Agendas :{
    title: , 
    description :detailed analysis of discussion and conclusion in a paragraph in third person passive voice}
    ] -> n agendas according to meeting text
    conclude of meeting: example text(As there was no other matter to be discussed, the meeting ended {time} with vote of thanks to {sb} and approval for next meeting on {time})
    }

    meeting conversation:"""