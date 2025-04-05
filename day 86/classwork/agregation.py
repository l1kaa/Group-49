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