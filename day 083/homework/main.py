# 1) შექმენით Motorcycle class'ი, 4 attribute'ით და 1 class variable'ით. class variable'მა უნდა დათვალოს რამდენი მოტოციკლეტი გაკეთდა, დანარჩენი თქვენ მოიფიქრეთ, ატრიბუტები რა იქნება და ა.შ

class Motorcycle:
    class_Count = 0

    def __init__(self, color, brand, year, horse_power):
        self.color = color
        self.brand = brand
        self.year = year
        self.horse_power = horse_power
        Motorcycle.class_Count += 1

    def move(self, move1):
        print(f"You are {move1} {self.color} {self.brand}")

    def condition(self, condition1):
        print(f"Your {self.color} {self.brand} is {condition1}")

Motorcycle1 = Motorcycle("Black", "Yamaha", 2019, 1300)
Motorcycle2 = Motorcycle("Blue", "Kawasaki", 2020, 1200)
Motorcycle3 = Motorcycle("Red", "Ducati", 2015, 950)

print(Motorcycle1.color, Motorcycle1.brand, Motorcycle1.year, Motorcycle1.horse_power)
print(Motorcycle2.color, Motorcycle2.brand, Motorcycle2.year, Motorcycle2.horse_power)
print(Motorcycle3.color, Motorcycle3.brand, Motorcycle3.year, Motorcycle3.horse_power)

Motorcycle1.move("Stopping")
Motorcycle1.condition("Perfectly fine")

Motorcycle2.move("Driving")
Motorcycle2.condition("Damaged")

Motorcycle3.move("Stopping")
Motorcycle3.condition("Damaged")

print(Motorcycle.class_Count)

# 2) გააკეთეთ inheritance'ს მაგალითი ცხოველებზე (3 child class)

class Animal:
    def __init__(self, name):
        self.name = name

    def is_sleeping(self):
        print(f"{self.name} is sleeping")


class Dog(Animal):
    def sound(self):
        print("woof")

class Cat(Animal):
    def sound(self):
        print("woof")

cat1 = Cat("Micky")
print(cat1.name)
print(cat1.is_sleeping())



# 3) ახსენით როგორ მუშაობს inheritance
# class inheritance-ის დროს ის მეთოდები რაც parent class-ებს აქვთ გაწერილი, ავტომატურად გადადის child class-ებზე.


# 4) ახსენით რა შემთხვევაში გვჭირდება inheritanceის გამოყენება
# inheritance-ის გამოყენება საგრძნობლად ამცირებს კოდის წერის რაოდენობას.

# 5) მოიძიეთ ინფორმაცია და გაიგეთ რა არის multiple inheritance
# Multiple inheritance allows a class to inherit attributes and methods from more than one parent class. This means a child class can have multiple base classes.


