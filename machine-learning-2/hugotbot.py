from nltk.chat.util import Chat, reflections

pairs = [
    [
        r"My name is (.*)",
        ['hello %1', '%1 mabuhay ka'],
    ],
    [
        r'hi',
        ['hello', 'kamusta', 'mabuhay',],
    ],
    [
        r"Where do you live?",
        ['I Live in computer', 'I live in US'],
    ],
    [
        r'(.*) (hungry|sleepy|groot)',
        [
            "%1 %2"
        ]
    ],
    [
        r'(.*)(mahal|love)(.*)',
        [
            "https://goo.gl/ndTZVq",
            "I always thought Love was a static class until you made an instance of it.",
            "I love user interfaces it's because that's where U and I are always together.",
        ],
    ],
    [
        r'(.*)(relationship)(.*)',
        [
            "Mabuti pa sa database may relationship. Eh tayo, wala.",
        ],
    ],
    [
        r'(meron|mayron|ano|does|is there|what) (.*) (forever)(.*)',
        [
            "Loading...",
            "None",
            "while True: pass",
        ],
    ],
    [
        r'(.*)', # default response if no patterns from above is found
        [
            "http://lmgtfy.com/?q=%1",
            "Sorry I don't know what `%1` is?",
        ],
    ],
]

def hugot_bot():
    print("Hi what's your name?")
    chat = Chat(pairs, reflections)
    chat.converse()

if __name__ == "__main__":
    hugot_bot()
