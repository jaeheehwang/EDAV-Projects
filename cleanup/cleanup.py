import pandas as pd

# Import data file
file = pd.ExcelFile('Survey Response.xlsx')
df = file.parse('Form Responses 1')

# Drop columns with no data
df.drop(df.columns[18:], axis=1, inplace=True)
df.drop(df.columns[4:12], axis=1, inplace=True)

# Separate tools and assign to boolean table
for index, tools in df['Experiences with tools'].iteritems():
    tools = tools.split(',')
    for tool in tools:
        tool = tool.strip()
        if tool not in list(df):
            df[tool] = [False] * df.shape[0]
        df.set_value(index, tool, True)

# Miscellaneous clean-up
df.drop('Experiences with tools', 1, inplace=True)
df.replace(['None', 'A little', 'Confident', 'Expert'],[0,1,2,3], inplace=True)
df['Are you on the waiting list?'].replace(['No', 'Yes'], [False, True], inplace=True)
df['What code/text editor do you use most?'].replace('^(?i)sublime([A-Za-z0-9 ]*)', 'Sublime Text', regex=True, inplace=True)
df['What code/text editor do you use most?'].replace('^([A-Za-z0-9 ]*)(?i)wrangler$', 'TextWrangler', regex=True, inplace=True)
df['Program'].replace(['Ms in ds', 'MSDS', 'QMSS'], ['IDSE (master)', 'IDSE (master)', 'QMSS (master)'], inplace=True)

# Export
df.to_csv('../responses_clean.csv')