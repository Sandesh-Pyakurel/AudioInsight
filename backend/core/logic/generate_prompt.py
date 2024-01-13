def minute_prompt():
    return """
    I have a meeting discussion in text. I want to convert that discussion into minute. 
    If not found, return empty value in below json list and dictionary. Just return json format reply without any other note and content. The format type is given below: 
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


def speech_prompt():
    return """
    I have a speech given by a person in text form. I want to convert this speech into well documented form as a report.
    If not found, return empty value in below json list and dictionary. Just return json format reply without any other note and content. The format type is given below: 
    json = {
    Title: give a suitable title,
    Introduction: a brief explanation of the given text, including all the concepts and keywords used. 
    Speaker Experience: A brief paragraph where the person says statements using my, me and  I. what other people did or said to them.
    [
    Problems shared:{
    description of problem: brief information on the problems, difficult, hard things speaker says about in the speech text, at least 2}
    ] -> n problems according to the speech text
    }

    speech text is:"""
    

def speech_prompt2():
    return """
    I have a speech given by a person in text form. I want to convert this speech into well documented form as a report.
    If not found, return empty value in below json list and dictionary. Just return json format reply without any other note and content. The format type is given below: 
    json = {
    Solution: [soultion1, solution2, ...] -> a detailed points on how to deal with the problem in given speech
    Current scenario: Explain about any situation, the speaker says about in detail. Otherwise give empty.
    [
    QandA from audience:{
    question: ,
    answer: ,
    }] -> n q/a shortly according to the speech text
    }

    speech text is:"""


def lecture_prompt():
    return """
    I have a lecture given by a professor in text format. I want to convert this lecture into well readable note.
    If not found, return empty value in below json list and dictionary. Just return json format reply without any other note and content. The format type is given below: 
    json = {
    Title: give a suitable title,
    objective: [obj1, obj2, ...] -> n objectives according to lecture text 
    [
    Taught Things: {
    Topic: ,
    Explanation of topic: , } -> n number topics and the explanation included in lecture text
    ]
    [
    Q/A from students:{
    question: any question related to lecture,
    answer: answer for the mentioned question,
    }] -> n q/a according to the lecture text,
    Conclusion: final summary of overall text
    }
    lecture text:"""