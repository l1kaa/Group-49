# Class Method:

# Class Method-ს აუცილებლად სჭირდება cls პარამეტრი, რადგან ის კლასის კუთვნილებებზე მუშაობს.

class Student:
    count = 0
    total_grades = 0

    def __init__(self, name, grade):
        self.name = name
        self.grade = grade
        Student.count += 1
        Student.total_grades += 1

    @classmethod
    def get_count(cls):
        return f"There are total of {Student.count} students"
    
    @classmethod
    def get_grades(cls):
        return f"Total grades of students is: {Student.total_grades}"
    
student1 = Student("Lika", 10)
student2 = Student("Luka", 8)

print(Student.get_count())
print(Student.get_grades())