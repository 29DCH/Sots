import redis

from analysis.digitization import Analysis
from analysis.words_split import words_split


def count_words():
    words_split()


def handle():
    Analysis().handel()