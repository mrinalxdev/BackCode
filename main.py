import tkinter as tk
import speech_recognition as sr
import pyttsx3
import threading
import random
import sounddevice as sd
import numpy as np

class VoiceAssistant:
    def __init__(self, master):
        self.master = master
        master.title("Voice Assistant")
        master.geometry("300x200")

        self.label = tk.Label(master, text="Press 'Start' to begin listening")
        self.label.pack(pady=20)

        self.start_button = tk.Button(master, text="Start", command=self.start_listening)
        self.start_button.pack(pady=10)

        self.quit_button = tk.Button(master, text="Quit", command=master.quit)
        self.quit_button.pack(pady=10)

        self.recognizer = sr.Recognizer()
        self.engine = pyttsx3.init()

    def start_listening(self):
        self.label.config(text="Listening...")
        threading.Thread(target=self.listen_and_respond).start()

    def listen_and_respond(self):
        duration = 5  # seconds
        sample_rate = 44100

        recording = sd.rec(int(duration * sample_rate), samplerate=sample_rate, channels=1)
        sd.wait()
        audio_data = np.frombuffer(recording, dtype=np.int16)

        try:
            text = self.recognizer.recognize_google(audio_data)
            response = random.choice(["Hi", "Hello"])
            self.label.config(text=f"You said: {text}\nResponse: {response}")
            self.speak(response)
        except sr.UnknownValueError:
            self.label.config(text="Sorry, I didn't catch that")
        except sr.RequestError:
            self.label.config(text="Sorry, there was an error with the speech recognition service")

    def speak(self, text):
        self.engine.say(text)
        self.engine.runAndWait()

root = tk.Tk()
voice_assistant = VoiceAssistant(root)
root.mainloop()