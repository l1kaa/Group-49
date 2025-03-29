# 1) შექმენით car class, მიეცით 4 ატრიბუტი და შეუქმენით 2 ფუნქცია class'ში. ამ class'ისგან შექმენით 3 ობიექტი და სამივეზე გატესტეთ ყვლა ატრიბუტის გამოტანა და მეთოდები.
class Car:
    def __init__(self, color, brand, year, horse_power):
        self.color = color
        self.brand = brand
        self.year = year
        self.horse_power = horse_power

    def move(self, move1):
        print(f"You are {move1} {self.color} {self.brand}")

    def condition(self, condition1):
        print(f"Your {self.color} {self.brand} is {condition1}")

car1 = Car("Black", "Ferrari", 2018, 1000)
car2 = Car("White","Porcshe", 2020, 900)
car3 = Car("Red", "Mercedes", 2015, 1089)

print(car1.color, car1.brand, car1.year, car1.horse_power)
print(car2.color, car2.brand, car2.year, car2.horse_power)
print(car3.color, car3.brand, car3.year, car3.horse_power)

car1.move("Stopping")
car1.condition("Perfectly fine")

car2.move("Driving")
car2.condition("Damaged")

car3.move("Stopping")
car3.condition("Damaged")


# 2) შექმენით person class, მიეცით 3 ატრიბუტი და შეუქმენით 2 ფუნქცია class'ში.  ამ class'ისგან შექმენით რამდენიმე ობიექტი და პირველ ორზე გატესტეთ ყვლა ატრიბუტის გამოტანა და მეთოდები. ასევე შექმენით დამატებითი კლასის ცვლადი რომელიც დათვლის რამდენი ადამიანია ჯამში.

class Person:
    class_Count = 0
    def __init__(self, name, surname, favColor):
        self.name = name
        self.surname = surname
        self.favColor = favColor
        Person.class_Count += 1

    def activity(self, activity1):
        print(f"{self.name} is {activity1}")

    def place(self, place1):
        print(f"{self.name} {self.surname} is at {place1}")


person1 = Person("Lika", "Chkhikvadze", "Black")
person2 = Person("Vano", "Motiashvili", "Black")
person3 = Person("Luka", "Tskhvaradze", "Blue")

print(person1.name, person1.surname, person1.favColor)
print(person2.name, person2.surname, person2.favColor)

person1.activity("Coding")
person1.place("home")

person3.activity("Doing a project")
person3.place("work")

print(Person.class_Count)

# 3) დაწერეთ რას ეწოდება dunder method
# dunder method-ი საშუალებას იძლევა, რომ კლასის ინსტანსებმა ასე ვთქვათ იტერაქცია მოახდინონ კლასში ჩაშენებულ ფუნქციებთან 

# 4) დაწერეთ რას ეწოდება instance variables
# instance variable არის კლასში შექმნილ ობიექტის ინიციალიზებული ცვლადი

# 5) დაწერეთ რას ეწოდება class variables
# class variables არის ისეთი ცვლადები, რომლებიც მთლიან კლასს განეკუთვნება და საერთოა ყველა ობიექტისთვის. ისინი განისაზღვრება უშუალოდ კლასის შიგნით იქმნება, მაგრამ ასევე შესაძლებელია მათი გამოყენება კლასის გარეთ მეთოდის სახით.


# 6) ახსენით რა არის blueprint
# Blueprint არის ერთგვარი ჩანახაზი, სადაც მხოლოდ საგნის კონსტრუქციაა შექმნილი და ჯერ მისი მახასიათებელი თვისებები არ არის განსაზღვრული