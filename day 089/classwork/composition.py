# ახსენით რა არის კომპოზიცია, რითი განსხვავდება აგრეგაციისგან და გააკეთეთ 1 მაგალითი

# კომპოზიცია საკმაოდ ჰგავს აგრეგაციას იქიდან გამომდინარე, რომ კოპოზიციაც კლასების ურთიერთქმედებას მოიცავს, თუმცაღა განსხვავება არის ის, რომ - ამ ერთმანეთთან დაკავშირებულ კლასებს ერთმანეთის გარეშე მუშაობა არ შეუძლიათ.

class Heart:
    def __init__(self, heartrate):
        self.heartrate = heartrate

class Human:
    def __init__(self, name, pronouns, heart_rate):
        self.name = name
        self.pronouns = pronouns
        self.heart_rate = heart_rate

    def display_human(self):
        return f"This peron's name is {self.name}, {self.pronouns} heart rate is {self.heart_rate} "
    

human1 = Human("Lika", "her", "90 bpm")

print(human1.display_human())