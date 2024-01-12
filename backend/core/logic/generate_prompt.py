def minute_prompt():
    return """
    I have a meeting discussion in text. I want to convert that discussion into minute. 
    If not found, return null value in below json dictionary.  Just return json format reply without any other note and content. The format type is given below: 
    json = { 
    organization:sth,
    address:sth,
    POB:sth,
    Ph. no.:sth,
    Email:sth,
    Date of meeting:sth, 
    [starting text: the minute of the nth regular meeting of {organization} held on {date} at {time} presided by the {maybe_chairperson} in {location},  ] -> add more if necessary
    present memebers:[if any list],
    relative post:[if any list],
    absent members :[if any list],
    relative post:[if any list],
    [
    Agendas :{
    title: sth, 
    description :include conclusion about problem with person allocated for solving that agenda problem}
    ] -> n agendas according to meeting text
    conclude of meeting: example text(As there was no other matter to be discussed, the meeting ended {time} with vote of thanks to {sb} and approval for next meeting on {time})
    }

    meeting conversation:"""


def lecture_prompt():
    return """
    I have a lecture discussion in text format. I want to convert that discussion into detailed note. 
    Just return json format reply without any other note and content. The format type is given below: 
    json = { 
    Topic: sth,
    Introducton: Short introduction about the given lecture, 
    Objectives: [objective1, objective2, ....] -> at least 4
    [Discussion: {
    Problem: state the problem, 
    Discussed solution:
    }] -> loop as many problems and discussions in text
    Questions and Answers: [q&a1, ....] -> if any questions were asked by students or by teacher to student
    Assignment: [assignment1, assignment2, ....] -> if not then return empty list
    Conclusion: sth
    }

    lecture text:"""