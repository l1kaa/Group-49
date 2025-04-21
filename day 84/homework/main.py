class Writer:
    def write(self):
        return "Writing..."

class Painter:
    def paint(self):
        return "Painting..."

class Artist(Writer, Painter):
    def create(self):
        return "Creating something artistic!"

artist1 = Artist()
print(artist1.write())   
print(artist1.paint())   
print(artist1.create())


class Animal:
    def speak(self):
        return "sound"

class Mammal(Animal):
    def walk(self):
        return "walk"

class Dog(Mammal):
    def bark(self):
        return "Woof"

animal1 = Dog()
print(animal1.speak())  
print(animal1.walk())   
print(animal1.bark()) 



class Animal2:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return f"{self.name} makes a sound"

class Dog(Animal2):
    def __init__(self, name, breed):
        super().__init__(name)  
        self.breed = breed

    def speak(self):
        return f"{self.name} barks!"

dog = Dog("pup", "Labrador")
print(dog.name)       
print(dog.breed)      
print(dog.speak()) 