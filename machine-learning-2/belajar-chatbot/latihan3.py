# -*- coding: utf-8 -*-
from chatterbot import ChatBot
from chatterbot.comparisons import levenshtein_distance
from chatterbot.trainers import ChatterBotCorpusTrainer
import logging

custom_logger = logging.getLogger(__name__)

# Uncomment the following lines to enable verbose logging
# import logging
# logging.basicConfig(level=logging.INFO)

# Create a new instance of a ChatBot
bot = ChatBot(
    "Terminal",
    filters=["chatterbot.filters.RepetitiveResponseFilter"],
    storage_adapter="chatterbot.storage.SQLStorageAdapter",
    logic_adapters=[
        "chatterbot.logic.MathematicalEvaluation",
        "chatterbot.logic.TimeLogicAdapter",
        {
            "import_path": "chatterbot.logic.BestMatch",
            "statement_comparison_function": "chatterbot.comparisons.levenshtein_distance",
            "response_selection_method": "chatterbot.response_selection.get_first_response"
        },
        {
            'import_path': 'chatterbot.logic.LowConfidenceAdapter',
            'threshold': 0.65,
            'default_response': 'I am sorry, but I do not understand.'
        }
    ],
    input_adapter="chatterbot.input.TerminalAdapter",
    output_adapter="chatterbot.output.TerminalAdapter",
    database="./data/database.db",
    trainer='chatterbot.trainers.ChatterBotCorpusTrainer',
    statement_comparison_function=levenshtein_distance,
    preprocessors=[
        'chatterbot.preprocessors.clean_whitespace'
    ],
    logger=custom_logger
)

bot.set_trainer(ChatterBotCorpusTrainer)

# Train based on the english corpus
bot.train("chatterbot.corpus.english")
bot.train("chatterbot.corpus.indonesia")
bot.train("./data/ubuntu_dialogs/dialogs")


print("Type something to begin...")

# The following loop will execute each time the user enters input
while True:
    try:
        # We pass None to this method because the parameter
        # is not used by the TerminalAdapter
        bot_input = bot.get_response(None)

    # Press ctrl-c or ctrl-d on the keyboard to exit
    except (KeyboardInterrupt, EOFError, SystemExit):
        break
