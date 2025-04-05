from abc import ABC, abstractmethod

class Shape:

    @abstractmethod
    def perimeter(self):
        pass

class Square(Shape):
    def __init__(self, side1, side2):
        self.side1 = side1
        self.side2 = side2

    def perimeter(self):
        return 2 * (self.side1 + self.side2)
    

class Triangle(Shape):
    def __init__(self, Side1, Side2, Side3):
        self.Side1 = Side1
        self.Side2 = Side2
        self.Side3 = Side3

        def perimeter(self):
            return self.side1 + self.side2 + self.side3
        

shapes = [Square(10, 20), Triangle(3, 4, 5)]

for i in shapes:
    print (f"The perimeter is: {i.perimeter()} cm")