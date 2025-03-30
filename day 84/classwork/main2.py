# 2) ახსენით რაში გვჭირდება super()

# ზოგადად თუ ვიყენებთ Class inheritance-ს და ახალი კლასის შექმნისას გვინდა რომ მასში ახალი property დავამატოთ, ხდება child-კლასების property-ების override-ი parent კლასებზე. ანუ ხდება Property-ების ზემოდან გადაწერა. ეს რომ ავირიდოთ თავიდან ვიყენებთ super() მეთოდს.


# 3) ახსენით როგორ მუშაობს super()

# def ფუნქციის ინიციალიზებისას ვუთითებთ super-ს, რომელსაც არგუმენტებად გადავცემთ, როგორც Parent კლაის, ასევე Child კლასში შექმნილ ახალ Property-ებს. super() მეთოდს Parent კლასიდან მოაქვს Property-ები და კლასების Override-იც აღარ ხდება.


# 4) გააკეთეთ super()'ის მაგალითი, ანუ აიღეთ რაიმე კლასი და როდესაც მის child class'ს შექმნით დაამატეთ ახალი property  და წამოიღეთ ძველებიც

class Dad:
    def __init__(self, hair_color, eye_color):
        self.hair_color = hair_color
        self.eye_color = eye_color

class Son(Dad):
    def __init__(self, hair_color, eye_color, age):
        super().__init__(hair_color, eye_color)
        self.age = age

    def sleep(self):
        print(f"{self.age} years old son with {self.hair_color} hair and {self.eye_color} eyes is sleeping")

Son1 = Son("Brown", "Blue", 9)
Son1.sleep()