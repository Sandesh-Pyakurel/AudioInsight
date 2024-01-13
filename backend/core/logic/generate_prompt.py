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
def speech_prompt():
        return """
        Make well documented report of above text with contents exactly as mentioned below.
        Title: 
        Introduction-: a brief explanation of the given text, including all the concepts and keywords used. 
        Speaker's Experience -: a detailed paragraph where the person says statements using my, me and  I. what other people did or said to them.
        Problems shared -: detailed information on the problems, difficult, hard things speaker says about in the text
        Solution -: a detailed notes on how to deal, how to be happy, what the speaker mentions for the problems mentioned above
        Current scenario -: Explain about any situation, the speaker says about in detail. Otherwise give empty.
        Q/A- : any sentence with ? and he asked the audiences. Also give answer to those.

        speech:
    
    
    """
def lecture_prompt():
    return """
    The detailed documentation notes from lectures
    Title:
    The topics covered : The main objective of the text, the new contents in the text
    Description: All the keywords, and related statements in the text, about the topics covered
    Q/A: the questions in the text with question marks and their answers
    Conclusion: final summary of overall text



"""


