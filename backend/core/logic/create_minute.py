import json
from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_PARAGRAPH_ALIGNMENT

def create_letterhead(file_path):
    
    doc = Document()

    header_table = doc.add_table(rows=5, cols=1)
    header_table.alignment = WD_PARAGRAPH_ALIGNMENT.CENTER
    header_table.autofit = False
    header_table.columns[0].width = Inches(2)

    # Company
    cell_logo = header_table.cell(0, 0)
    cell_logo.paragraphs[0].add_run().add_picture('logo.png', width=Inches(1))
    cell_logo.paragraphs[0].alignment = WD_PARAGRAPH_ALIGNMENT.CENTER

    # Company Name
    cell_company_name = header_table.cell(1, 0)
    company_name = cell_company_name.paragraphs[0].add_run('Pulchowk Campus')
    company_name.bold = True
    company_name.font.size = Pt(17)
    company_name.font.color.rgb = RGBColor(255, 0, 0)
    cell_company_name.paragraphs[0].alignment = WD_PARAGRAPH_ALIGNMENT.CENTER

    # Institute Name
    cell_institute = header_table.cell(2, 0)
    institute_name = cell_institute.paragraphs[0].add_run('Institute of Engineering')
    institute_name.bold = True
    institute_name.font.size = Pt(14)
    institute_name.font.color.rgb = RGBColor(255, 0, 0)
    cell_institute.paragraphs[0].alignment = WD_PARAGRAPH_ALIGNMENT.CENTER

    # Address
    cell_address = header_table.cell(3, 0)
    address = cell_address.paragraphs[0].add_run('Pulchowk, Lalitpur')
    address.bold = True
    address.font.size = Pt(12)
    address.font.color.rgb = RGBColor(255, 0, 0)
    cell_address.paragraphs[0].alignment = WD_PARAGRAPH_ALIGNMENT.CENTER


    # Contact Information
    cell_contact = header_table.cell(4, 0)
    contact_info = cell_contact.paragraphs[0].add_run('POB: 121345678\tPhone No.: 9800000000\tEmail: pcampus@gmail.com')
    contact_info.font.size = Pt(12)
    address.bold = True
    cell_contact.paragraphs[0].alignment = WD_PARAGRAPH_ALIGNMENT.CENTER
    
    doc.add_paragraph('_' * 100, style='Normal')


    # Add date
    date = doc.add_paragraph('Date: January 11, 2024\n', style='Normal')
    date.alignment = WD_PARAGRAPH_ALIGNMENT.RIGHT


    # call to order
    call_to_order = doc.add_paragraph('Call to order', style='Normal')
    call_to_order.runs[0].bold = True
    call_to_order.alignment = WD_PARAGRAPH_ALIGNMENT.LEFT


    # start
    start = doc.add_paragraph('Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, \n', style='Normal')
    start.alignment = WD_PARAGRAPH_ALIGNMENT.LEFT


    #Present members
    members_pre = doc.add_paragraph('Present Members:', style='Normal')
    members_pre.runs[0].bold = True
    members_pre.alignment = WD_PARAGRAPH_ALIGNMENT.LEFT

    row_pre = 12
    col_pre = 4
    table_pre = doc.add_table(rows=row_pre, cols=col_pre)
    table_pre.style = 'Table Grid'
    
    widths_pre = (Inches(0.5), Inches(2.2), Inches(2.5), Inches(2.5))
    for row in table_pre.rows:
        for idx, width in enumerate(widths_pre):
            row.cells[idx].width = width

    column_names_pre = ["S.N.", "Present Member", "Position", "Signature"]
    for col_num, column_name in enumerate(column_names_pre):
        cell = table_pre.cell(0, col_num)
        cell.text = column_name
        cell.paragraphs[0].runs[0].bold = True
        cell.paragraphs[0].runs[0].font.size = Pt(12)

    
    #Absent members
    members_abs = doc.add_paragraph('\nAbsent Members:', style='Normal')
    members_abs.runs[0].bold = True
    members_abs.alignment = WD_PARAGRAPH_ALIGNMENT.LEFT

    row_abs = 6
    col_abs = 3
    table_abs = doc.add_table(rows=row_abs, cols=col_abs)
    table_abs.style = 'Table Grid'

    widths_abs = (Inches(0.5), Inches(2.2), Inches(2.5))
    for row in table_abs.rows:
        for idx, width in enumerate(widths_abs):
            row.cells[idx].width = width

    column_names_abs = ["S.N.", "Absent Member", "Position"]
    for col_num, column_name in enumerate(column_names_abs):
        cell = table_abs.cell(0, col_num)
        cell.text = column_name
        cell.paragraphs[0].runs[0].bold = True
        cell.paragraphs[0].runs[0].font.size = Pt(12)


    #Agenda
    agendas = {
        "agenda1": {"title": "Agenda 1", "description": "Description 1"},
        "agenda2": {"title": "Agenda 2", "description": "Description 2"},
        "agenda3": {"title": "Agenda 3", "description": "Description 3"}}
    
    agenda_count = 1
    for agenda_key, agenda_data in agendas.items():
        title = agenda_data.get("title", "No Title")
        description = agenda_data.get("description", "No Description")

        agenda_tit = doc.add_paragraph(f'{agenda_count}. {title}:', style='Normal')
        agenda_tit.runs[0].bold = True
        agenda_tit.alignment = WD_PARAGRAPH_ALIGNMENT.LEFT

        agenda_dis = doc.add_paragraph(f'{description}\n\n', style='Normal')
        agenda_dis.alignment = WD_PARAGRAPH_ALIGNMENT.LEFT

        agenda_count += 1


    #ending
    conclude = doc.add_paragraph('Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, Hello World, \n\n', style='Normal')
    conclude.alignment = WD_PARAGRAPH_ALIGNMENT.LEFT

    #signature
    signature = doc.add_paragraph('_'*14 + '\t\t\t\t\t\t\t\t' + '_'*14, style='Normal')
    signature.alignment = WD_PARAGRAPH_ALIGNMENT.LEFT

    person = doc.add_paragraph("President" + '\t\t\t\t\t\t\t\t' + "Secretory", style='Normal')
    person.alignment = WD_PARAGRAPH_ALIGNMENT.LEFT

    # Save the document
    doc.save(file_path)
    print(f'Minute created at: {file_path}')

if __name__ == "__main__":
    file_path = "documents/minute.docx"
    create_letterhead(file_path)
