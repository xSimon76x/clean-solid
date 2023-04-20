(
    () => {

        type Gender = 'M' | 'F'

        class Person {
            // 1ra opcion
            // public name: string;
            // public gender: Gender;
            // public birthdate: Date;

            // constructor(name: string, gender: Gender, birthdate: Date) {
            //     this.name = name;
            //     this.gender = gender;
            //     this.birthdate = birthdate;
            // }

            // 2da opcion
            constructor(
                public name: string,
                public gender: Gender,
                public birthdate: Date,
            ) {}
        }
        
        class User extends Person {

            public lastAccess: Date;

            constructor(
                public email: string,
                public role: string,
                name: string,
                gender: Gender,
                birthdate: Date,
            ) {
                super(name, gender, birthdate);
                this.lastAccess = new Date();
            }

            checkcredentials(){
                return true;
            }
        }

        class UserSettings extends User {
            constructor(
                public workingDirectory: string,
                public lastopenFolder  : string,
                email                  : string,
                role                   : string,
                name                   : string,
                gender                 : Gender,
                birthdate              : Date,
            ) {
                super( email, role, name, gender, birthdate )
            }
        }

        const userSetting = new UserSettings(
            '/usr/home',
            '/home',
            'simon@gmail.com',
            'Admin',
            'Simón',
            'M',
            new Date('1999-10-22')
        )

        console.log({ userSetting, areCredentialsValid: userSetting.checkcredentials()})

    }
)();