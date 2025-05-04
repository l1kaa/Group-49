from abc import ABC, abstractmethod

class Vehicle(ABC):

    @abstractmethod
    def move(self):
        pass

class Car(Vehicle):
    def move(self):
        print("The car is moving")

class Motorcycle(Vehicle):
    def move(self):
        print("The motorcycle is moving")

car1 = Car()
motorcycle1 = Motorcycle()

car1.move()
motorcycle1.move()