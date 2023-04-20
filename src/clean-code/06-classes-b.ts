(
    () => {
        // Aun no aplicado el Principio de Responsabilidad Unica
        type Gender = 'M' | 'F'

        interface PersonProps {
            name: string;
            gender: Gender;
            birthdate: Date;
        }

        interface UserProps {
            email: string;
            role: string;
            name: string;
            gender: Gender;
            birthdate: Date;
        }

        interface UserSettingsProps {
            workingDirectory: string;
            lastopenFolder  : string;
            email: string;
            role: string;
            name: string;
            gender: Gender;
            birthdate: Date;
        }
        
        class Person {

            public name: string;
            public gender: Gender;
            public birthdate: Date;

            constructor({ name, gender, birthdate }: PersonProps ) {
                this.name = name;
                this.gender = gender;
                this.birthdate = birthdate;
            }
        }
        
        class User extends Person {

            public lastAccess: Date;
            public email: string;
            public role: string;

            constructor({ email, role, name, gender, birthdate }: UserProps) {
                super({ name, gender, birthdate });
                
                this.email = email;
                this.role = role;

                this.lastAccess = new Date();
            }

            checkcredentials(){
                return true;
            }
        }

        class UserSettings extends User {

            public workingDirectory: string;
            public lastopenFolder  : string;

            constructor({ workingDirectory, lastopenFolder, email, role, name, gender, birthdate }: UserSettingsProps) {
                super({ email, role, name, gender, birthdate })

                this.workingDirectory = workingDirectory;
                this.lastopenFolder = lastopenFolder;
            }
        }

        const userSetting = new UserSettings({
            workingDirectory: '/usr/home',
            lastopenFolder: '/home',
            email: 'simon@gmail.com',
            role: 'Admin',
            name: 'Simón',
            gender: 'M',
            birthdate: new Date('1999-10-22')
        })

        console.log({ userSetting, areCredentialsValid: userSetting.checkcredentials()})

    }
)();