# 1) ახსენით რა არის abstractclasses

# Abstract Method-ის გამოყენებისას, თუ ჩვენ Parent Class-ს გავუწერთ რაიმე ფუნქციას, იძულებულები ვართ რომ Child Class-ებსაც გავუწეროთ ეს ფუნქციები. ეს მხოლოდ იმ შემთხვევაში თუ Parent Class-ის შექმნისას მას არგუმენტად "ABC"-ს გადავცემთ.

# 2) ახსენით რა არის და რას ნიშნავს polymorphism
# Polymorphism საშუალებას გვაძლევს, რომ სხვადასხვა Child Class-ებს როდესაც ერთნაირ ფუნქციებს დავუწერთ (ძირითადად იმ ფუნქციას, რომელიც Parent Class-ს გააჩნია), ჩვენ შეგვიძლია მათ სხვადასხვა ფუნქციონალი მივანიჭოთ როგორც ფართობის მაგალითზე განვიხილეთ.

# 3) ახსენით რა არის და რას ნიშნავს aggregation

# aggregation არის კლასების ურთიერთქმედება.

# 4) გააკეთეთ abstractclasses მაგალითი

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

# 5) გააკეთეთ polymorphismის მაგალითი

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

# 6) გააკეთეთ aggreagationის მაგალითი

class Movie_collection:
    def __init__(self, name):
        self.name = name
        self.movies = []

    def add_movie(self, movie):
        self.movies.append(movie)

    def list_of_movies(self):
        return [f"{movie.title} directed by {movie.director} "for movie in self.movies ]
    

class Movie:
    def __init__(self, title, director):
        self.title = title
        self.director = director

Movie_collection = Movie_collection("My movie collection")

movie1 = Movie("Get out", "Jordan Peele")
movie2 = Movie("Us", "Jordan Peele")
movie3 = Movie("The prisoners", "Denis Villneuve")

Movie_collection.add_movie(movie1)
Movie_collection.add_movie(movie2)
Movie_collection.add_movie(movie3)

for movie in Movie_collection.list_of_movies():
    print(movie)